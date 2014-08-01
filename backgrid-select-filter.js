/*
  Backgrid select-filter extension
  http://github.com/amiliaapp/backgrid-select-filter

  Copyright (c) 2014 Amilia Inc.
  Written by Martin Drapeau
  Updgraded by Alexey Ismailov aka teddybear
  Licensed under the MIT @license
 */
(function(){
  var SelectFilter = Backgrid.Extension.SelectFilter = Backbone.View.extend({
    tagName: "div",
    className: "backgrid-filter",
    template: _.template([
      "<% for (var i=0; i < options.length; i++) { %>",
      " <select multiple='multiple'>",
      "   <% for (var j=0; j < options[i].length; j++) { %>",
      "     <option value='<%=JSON.stringify(options[i][j].value)%>' <%=options[i][j].value === clearValue ? 'selected=\"selected\"' : ''%>><%=options[i][j].label%></option>",
      "   <% } %>",
      " </select>",
      " <% } %>"
    ].join("\n")),
    events: {
      "change": "onChange"
    },
    defaults: {
      selectOptions: undefined,
      fields: undefined,
      clearValue: null,
      initialValue: undefined,
      makeMatcher: function(values) {
        var c = [];
        _.each(this.fields, function(field, idx){
          if(values[idx] !== this.clearValue)
            c.push({field:field, value:values[idx]});
        }, this);
        if(!(_.isEmpty(c))){
          
          return function(model){
            var en = _.filter(c, function(q){
                        
                        if(_.isArray(q.value)){
                          return _.find(q.value, function(m){
                            return model.get(q.field) === m;
                          });  
                        } 
                          else if(model.get(q.field) === q.value){
                            return true;
                        } else {
                           return false;
                        }
                    });
            console.log(en);
            return !_.isEmpty(en) && en.length === c.length;
          }
        } else {
          return function(model){
            return true;
          }
        }
      }
    },
    initialize: function(options) {
      SelectFilter.__super__.initialize.apply(this, arguments);

      _.defaults(this, options || {}, this.defaults);
      if (_.isEmpty(this.selectOptions) || !_.isArray(this.selectOptions)) throw "Invalid or missing selectOptions.";
      if (_.isEmpty(this.fields) || !this.fields.length) throw "Invalid or missing field.";
      if (this.initialValue === undefined) this.initialValue = this.clearValue;

      var collection = this.collection = this.collection.fullCollection || this.collection;
      var shadowCollection = this.shadowCollection = collection.clone();

      this.listenTo(collection, "add", function (model, collection, options) {
        shadowCollection.add(model, options);
      });
      this.listenTo(collection, "remove", function (model, collection, options) {
        shadowCollection.remove(model, options);
      });
      this.listenTo(collection, "sort", function (col) {
        if (_.uniq(this.currentValue()).length == 1 && _.uniq(this.currentValue())[0] == this.clearValue) shadowCollection.reset(col.models);
      });
      this.listenTo(collection, "reset", function (col, options) {
        options = _.extend({reindex: true}, options || {});
        if (options.reindex && options.from == null && options.to == null) {
          shadowCollection.reset(col.models);
        }
      });
    },
    render: function() {
      this.$el.empty().append(this.template({
        options: this.selectOptions,
        initialValue: this.initialValue,
        clearValue: this.clearValue
      }));
			this.onChange();
      return this;
    },
    currentValue: function() {
      return _.map(this.$el.children(), function(sel){
          var v = $(sel).val();
          if(v.length === 1){
            return JSON.parse(v);
          }
          else {
            console.log(this);
            return _.filter(
                      _.map(v, function(i){return JSON.parse(i)}),
                      function(p){
                        return p !== this.clearValue;
                      },
                      this
                    );
          }
        }, this);
    },
    onChange: function(e) {
      var col = this.collection;
      var fields = this.fields;
      var values = this.currentValue();
      var matcher = _.bind(this.makeMatcher(values), this);

      if (col.pageableCollection)
        col.pageableCollection.getFirstPage({silent: true});

      var nonclear = _.filter(values, function(v){
          if(v !== this.clearValue)
            return v;
      });
      // console.log(nonclear);
      if (!_.isEmpty(nonclear))
        col.reset(this.shadowCollection.filter(matcher), {reindex: false});
      else
        col.reset(this.shadowCollection.models, {reindex: false});
    }
  });
}).call(this);
