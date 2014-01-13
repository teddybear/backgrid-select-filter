$(document).ready(function() {

  // Collection
  var Territories = Backbone.PageableCollection.extend({
    state: {pageSize: 15},
    mode: "client"
  });
  var territories = new Territories(_territories);

  // Grid
  var columns = [{name: "id", label: "ID", cell: "integer"},
      {name: "name", label: "Name", cell: "string"},
      {name: "code", label: "Code", cell: "string"},
      {name: "continent_code", label: "Continent", cell: "string"}],
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
      className: "backgrid-filter form-control",
      collection: territories,
      field: "continent_code",
      selectOptions: _.union([{label: "All", value: null}],
		_.map(_continents, function(o) {return {label: o.name, value: o.code};}))
    }),
    $filter = filter.render().$el;
  $("#filter").replaceWith($filter);
  
});