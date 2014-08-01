$(document).ready(function() {

  // Collection
  var Territories = Backbone.PageableCollection.extend({
    state: {pageSize: 15},
    mode: "client"
  });
  
  var columns = [{name: "id", label: "ID", cell: "integer", editable:false},
    {name: "name", label: "Name", cell: "string", editable:false},
    {name: "code", label: "Code", cell: "string", editable:false},
    {name: "continent_code", label: "Continent", cell: "string", editable:false}];
  
  
  // ** Example 1 **
  (function(){
    var territories = new Territories(_.map(_territories, _.clone));
    
    // Grid
    var grid = new Backgrid.Grid({
      columns: columns,
      collection: territories,
      className: "backgrid table"
      }),
      $grid = grid.render().$el;
    $("#result").append($grid);

    // Paginator
    var paginator = new Backgrid.Extension.Paginator({
      collection: territories
      }),
      $paginator = paginator.render().$el;
    $("#result").append($paginator);

    // Select filter
    var filter = new Backgrid.Extension.SelectFilter({
      className: "backgrid-filter form-control",
      collection: territories,
      fields: [{ 
                name:"continent_code",
                selectOptions: _.union([{label: "All", value: null}],
                              _.map(_continents, function(o) {return {label: o.name, value: o.code};}))          
              }],
    }),
    $filter = filter.render().$el;
    $("#filter").replaceWith($filter);
  }).call(this);
  
  // ** Example 2 **
  (function(){
    var territories = new Territories(_.map(_territories, _.clone));
    
    // Grid
    var grid = new Backgrid.Grid({
      columns: columns,
      collection: territories,
      className: "backgrid table"
      }),
      $grid = grid.render().$el;
    $("#result-2").append($grid);

    // Paginator
    var paginator = new Backgrid.Extension.Paginator({
      collection: territories
      }),
      $paginator = paginator.render().$el;
    $("#result-2").append($paginator);
    
    // Select filter
    var filter = new Backgrid.Extension.SelectFilter({
        className: "backgrid-filter form-control",
      collection: territories,
      fields:[{
              name: "continent_code"
              selectOptions: [{
                label: "All", value: null
              }, {
                label: "Americas", value: ["NA", "SA"]
              }, {
                label: "Europe", value: ["EU"]
              }, {
                label: "Asia", value: ["AS"]
              }, {
                label: "Other", value: ["AF", "OC", "AN"]
              }]
      }],
      makeMatcher: function(value) {
        return function(model) {
        return _.indexOf(value, model.get(this.field)) >= 0;
        }
      }
      }),
      $filter = filter.render().$el;
    $("#filter-2").replaceWith($filter);
  }).call(this);
  
});
