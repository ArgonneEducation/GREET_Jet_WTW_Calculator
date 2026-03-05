// Single data source URL
//const DATA_URL = "https://raw.githubusercontent.com/ArgonneEducation/GREET_Jet_WTW_Calculator/refs/heads/main/data/newest_data_array.json";

// makePanel loads the dataset, drills down to data, filters the data to get emissions data
// and then creates a panel with the emissions data.
function makePanel(feedstock, metric) {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_Jet_WTW_Calculator/refs/heads/main/data/newest_data_array.json").then(function (data) {
        let dataArray = data.emissions;

        // Filter data based on feedstock and metric
        let currentFeedstock = dataArray.filter(d => d.id === feedstock);
        if (currentFeedstock.length > 0) {
            let currentMetric = currentFeedstock[0][metric];
            d3.select(".WTP").text(`Well-to-pump: ${currentMetric.WTP}`);
            d3.select(".PTW").text(`Pump-to-wake: ${currentMetric.PTW}`);
            d3.select(".WTW").text(`Well-to-wake: ${currentMetric.WTW}`);
            d3.select(".UNITS").html(`Units: ${currentMetric.units.replace(/CO2e/g, 'CO<sub>2</sub>e')}`);
        } else {
            console.error("Feedstock or metric not found in data.");
        }
    });
}

// Update the bar chart with data
function makeBarChart(feedstock, metric) {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_Jet_WTW_Calculator/refs/heads/main/data/newest_data_array.json").then(function (data) {
        let dataArray = data.emissions;

        // Filter data based on feedstock and metric
        let currentFeedstock = dataArray.filter(d => d.id === feedstock);
        if (currentFeedstock.length > 0) {
            let emiss_values = currentFeedstock[0][metric];

            // Create the bar chart
            let trace1 = {
                x: [emiss_values.WTP],
                y: ['WTP'],
                type: 'bar',
                name: 'WTP',
                orientation: 'h',
                marker: { color: '#D81B60', // Strong magenta
                pattern: {
                    shape: '|', // vertical lines
                    size: 10,   // Pattern size
                    solidity: 0.5 // Transparency of the pattern
                }, width:2
    }
            };
            let trace2 = {
                x: [emiss_values.PTW],
                y: ['PTW'],
                type: 'bar',
                name: 'PTW',
                orientation: 'h',
                marker: {
                color: '#FFC107', // Bright amber
                pattern: {
                    shape: '-', // horizontal lines
                    size: 10,
                    solidity: 0.5
                }, width: 2
    }
            };
            let trace3 = {
                x: [emiss_values.WTW],
                y: ['WTW = WTP+PTW'],
                type: 'bar',
                name: 'WTW',
                orientation: 'h',
                marker: { color: '#1E88E5', // Medium blue
                pattern: {
                    shape: '+', // plus pattern
                    size: 10,
                    solidity: 0.5
                }, width: 2
    }
            };

            let plot = [trace3, trace2, trace1]; // Order of traces determines stacking order, WTW at the bottom, then PTW, then WTP on top
            let layout = {
                title: 'Emissions for Selected Feedstock and Metric',
                barmode: 'overlay',
                xaxis: { title: emiss_values.units.replace(/CO2e/g, 'CO<sub>2</sub>e') },
                yaxis: { title: 'Emissions by LCA Stage' },
                legend: {traceorder: 'reversed', font: {size: 20}},
                autosize: true
            };
            
            Plotly.newPlot('bar', plot, layout, { responsive: true });
        } else {
            console.error("Feedstock or metric not found in data.");
        }
    });
}

// Populate the data table with all emissions data
function makeDataTable(metric) {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_Jet_WTW_Calculator/refs/heads/main/data/newest_data_array.json").then(function (data) {
        let dataArray = data.emissions;
        let tableBody = d3.select("#tableBody");
        
        // Clear existing table data
        tableBody.html("");
        
        // Populate table with data for all feedstocks
        dataArray.forEach(feedstock => {
            if (feedstock[metric]) {
                let row = tableBody.append("tr");
                row.append("td").text(feedstock.id);
                row.append("td").text(feedstock[metric].WTP);
                row.append("td").text(feedstock[metric].PTW);
                row.append("td").text(feedstock[metric].WTW);
                row.append("td").html(feedstock[metric].units.replace(/CO2e/g, 'CO<sub>2</sub>e'));
            }
        });
    });
}

// Populate dropdown menus and initialize the page
function init() {
    d3.json("https://raw.githubusercontent.com/ArgonneEducation/GREET_Jet_WTW_Calculator/refs/heads/main/data/newest_data_array.json").then(function (data) {
        // Populate feedstock dropdown from the list in the json file
        let feedstockDropdown = d3.select("#selFeedstock");
        let feedstocks = data.feedstocks;
        feedstocks.forEach(feedstock => {
            feedstockDropdown.append("option").text(feedstock).property("value", feedstock);
        });

        // Populate metric dropdown from the list in the json file
        let metricDropdown = d3.select("#selMetric");
        let metrics = data.metrics;
        metrics.forEach(metric => {
            metricDropdown.append("option").text(metric).property("value", metric);
        });

        // Populate data table metric dropdown
        let tableMetricDropdown = d3.select("#metricSelect");
        metrics.forEach(metric => {
            tableMetricDropdown.append("option").text(metric).property("value", metric);
        });

        // Initialize with the first feedstock and metric
        let initialFeedstock = feedstocks[0];
        let initialMetric = metrics[0];
        makePanel(initialFeedstock, initialMetric);
        makeBarChart(initialFeedstock, initialMetric);
        makeDataTable(initialMetric);
    });
}

// Handle feedstock dropdown change, called whenever a new feedstock is selected, returns the new feedstock value and the current metric value
// and calls makePanel and makeBarChart with the new values
function feedstockChanged(feedstock) {
    let metric = d3.select("#selMetric").property("value"); // Get the current metric value
    makePanel(feedstock, metric);
    makeBarChart(feedstock, metric);
}

// Handle metric dropdown change
function metricChanged(metric) {
    let feedstock = d3.select("#selFeedstock").property("value"); // Get the current feedstock value
    makePanel(feedstock, metric);
    makeBarChart(feedstock, metric);
}

// Handle data table metric dropdown change
function tableMetricChanged(metric) {
    makeDataTable(metric);
}

init(); // call init function to load the data and create the dropdown list.
