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
	
});