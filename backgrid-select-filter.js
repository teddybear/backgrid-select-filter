/*
	Backgrid select-filter extension
	http://github.com/amiliaapp/backgrid-select-filter

	Copyright (c) 2014 Amilia Inc.
	Authored by Martin Drapeau
	Licensed under the MIT @license.
 */
(function(){
	var SelectFilter = Backgrid.Extension.SelectFilter = Backbone.View.extend({
		tagName: "select",
		className: "backgrid-filter",
		template: _.template([
			"<% for (var i=0; i < options.length; i++) { %>",
			"  <option value='<%=JSON.stringify(options[i].value)%>' <%=options[i].value === initialValue ? 'selected=\"selected\"' : ''%>><%=options[i].label%></option>",
			"<% } %>"
		].join("\n")),
		events: {
			"change": "onChange"
		},
		initialize: function(options) {
			SelectFilter.__super__.initialize.apply(this, arguments);

			if (!options.selectOptions || !_.isArray(options.selectOptions)) throw "Invalid or missing selectOptions.";
			if (!options.field || !options.field.length) throw "Invalid or missing field.";
			this.selectOptions = options.selectOptions;
			this.field = options.field;
			this.clearValue = options.clearValue !== undefined ? options.clearValue : null;
			this.initialValue = options.initialValue !== undefined ? options.initialValue : this.clearValue;

			var collection = this.collection = this.collection.fullCollection || this.collection;
			var shadowCollection = this.shadowCollection = collection.clone();

			this.listenTo(collection, "add", function (model, collection, options) {
				shadowCollection.add(model, options);
			});
			this.listenTo(collection, "remove", function (model, collection, options) {
				shadowCollection.remove(model, options);
			});
			this.listenTo(collection, "sort", function (col) {
				if (this.currentValue() == this.clearValue) shadowCollection.reset(col.models);
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
				initialValue: this.initialValue
			}));
			return this;
		},
		currentValue: function() {
			return JSON.parse(this.$el.val());
		},
		onChange: function(e) {
			var col = this.collection,
				field = this.field,
				value = this.currentValue(),
				matcher = function(model) {
					return model.get(field) == value;
				};

			if (col.pageableCollection)
				col.pageableCollection.getFirstPage({silent: true});

			if (value !== this.clearValue)
				col.reset(this.shadowCollection.filter(matcher), {reindex: false});
			else
				col.reset(this.shadowCollection.models, {reindex: false});
		}
	});
}).call(this);