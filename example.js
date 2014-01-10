$(document).ready(function() {

	// Collection
	var Territory = Backbone.Model.extend({});
	var Territories = Backbone.PageableCollection.extend({
	  model: Territory,
	  state: {
		pageSize: 15
	  },
	  mode: "client"
	});
	var territories = new Territories(_territories);

	// Grid
	var columns = [{
		name: "id",
		label: "ID",
		editable: false,
		cell: Backgrid.IntegerCell.extend({
		orderSeparator: ''
		})
	}, {
		name: "name",
		label: "Name",
		cell: "string"
	}, {
		name: "code",
		label: "Code",
		cell: "string"
	}, {
		name: "continent",
		label: "Continent",
		cell: "string"
	}];
	var grid = new Backgrid.Grid({
			columns: columns,
			collection: territories
		}),
		$grid = grid.render().$el;

	$("#result").append($grid);
	
	// Initialize the paginator
	var paginator = new Backgrid.Extension.Paginator({
			collection: territories,
			className: "backgrid-paginator pagination"
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