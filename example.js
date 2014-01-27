$(document).ready(function() {

  // Collection
  var Territories = Backbone.PageableCollection.extend({
    state: {pageSize: 15},
    mode: "client"
  });
  
  var territories = new Territories(_territories);

  
  // ** Example 1 **
  // Grid
  var columns = [{name: "id", label: "ID", cell: "integer"},
      {name: "name", label: "Name", cell: "string"},
      {name: "code", label: "Code", cell: "string"},
      {name: "continent", label: "Continent", cell: "string"}],
      grid = new Backgrid.Grid({
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
      collection: territories,
      field: "continent",
      selectOptions: _.union([{label: "All", value: null}], _continents)
    }),
    $filter = filter.render().$el;
  $("#filter").replaceWith($filter);
  
  
  // ** Example 2 **
  var grid2 = new Backgrid.Grid({
        columns: columns,
        collection: territories,
        className: "backgrid table"
      }),
      $grid2 = grid2.render().$el;
  $("#result-2").append($grid2);

  // Paginator
  var paginator2 = new Backgrid.Extension.Paginator({
        collection: territories
      }),
      $paginator2 = paginator.render().$el;
  $("#result-2").append($paginator2);
  
  // Select filter
  var filter2 = new Backgrid.Extension.SelectFilter({
        collection: territories,
        field: "continent",
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
        }],
        makeMatcher: function(value) {
          return function(model) {
            return _.indexOf(value, model.get(this.field)) >= 0;
          }
        }
      }),
      $filter2 = filter2.render().$el;
  $("#filter-2").replaceWith($filter2);
  
});