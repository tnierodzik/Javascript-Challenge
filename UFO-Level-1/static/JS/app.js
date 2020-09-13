// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Display the Dataset
tableData.forEach(function(UFOsightings) {
  console.log(UFOsightings);
  var row = tbody.append("tr");
  Object.entries(UFOsightings).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

	// Create event handlers for clicking the button or pressing the enter key
	button.on("click", function() {

	// Remove the Dataset
	d3.select("tbody").html("");

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");

	// Get the value property of the input element
	var inputValue = inputElement.property("value");

	// Print the value to the console
	console.log(inputValue);

	// Filter reports to match inputValue
	var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);
	console.log(filteredData);

	// Display the filtered Dataset
	filteredData.forEach((UFOsightings) => {

	// Console.log UFO Sightings
	console.log(UFOsightings);

	// Append row for each UFO Sighting
	var row = tbody.append('tr');

	// Use `Object.entries` to console.log each Sighting
	Object.entries(UFOsightings).forEach(([key, value]) => {
		console.log(key, value);

		// Append the value in each row to Cell
		var cell = row.append('td');
		cell.text(value);
    });
});
});









