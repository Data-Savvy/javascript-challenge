// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var t_body = d3.select("tbody");

// Display the entire dataset as default

tableData.forEach((report) => {
    console.log(report);
    var row = t_body.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

// Remove existing table
d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var date_value = d3.select("#datetime").property("value");
console.log(date_value);

// Filter reports
var filtered_data = tableData.filter(record => record.datetime === date_value);
console.log(filtered_data);

// Display the filtered dataset
filtered_data.forEach((report) => {
    var row = t_body.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});