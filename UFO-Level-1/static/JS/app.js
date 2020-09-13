// from data.js
var tableData = data;

var tbody = d3.select("tbody");



// YOUR CODE HERE!
// console.log(data);

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

