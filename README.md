# GREET_Jet_WTW_Calculator
This repository includes code for an app to access the GREET WTW Calculator Data for comparing petroleum jet fuel and aviation biofuels.

## Source and Funding
The data is from software produced by UChicago Argonne, LLC under Contract No. DE-AC02-06CH11357 with the Department of Energy.

Documentation for calculated values can be found at https:/greet.anl.gov/

In addition, this interactive is intended for use with case studies developed by DOE's Bioenergy Technologies Office as part of the Bioenergy Research and Education Bridge Program (BRIDGES).

BRIDGES is a bioenergy case study-based educational toolkit created in partnership with Argonne National Laboratory and Idaho National Laboratory, as well as education, community, industry, and other government partners.

## Using the app
In the deployed app, there is a dropdown box in the top left corner.  By default, "Conventional Crude" is selected, but users can select more specific conventional petroleum feedstocks or blends, or can select from a variety of aviation biofuels feedstocks.  A second dropdown box near the top left is for the metric to be used.  By default, grams of CO2 equivalent per MegaJoule is selected, but other emissions and metrics can be chosen as well.

The large bar chart graphic displays the results for well-to-pump, pump-to-wake, and well-to-wake emissions for the chosen feedstock and metric.  

The table at the bottom is configured to show ALL the data for a particular metric, with a column for each feedstock/process.  Again, there is a dropdown box to change the metric.  The table is NOT directly linked to the graph, though the data used for the graph can be found in the table as well, with immediate comparisons to the values for other feedstocks/processes.

## Background Information
The data displayed here are data for life cycle analysis of the emissions (and more) of different processes for producing jet fuel.  Aviation is one of several "hard-to-electrify" industries, and therefore, developing aviation fuels with fewer emissions is an important goal.  Life cycle analysis is a form of cradle-to-grave analysis that is intended to provide information for making decisions about which processes to invest in.  Life cycle analysis helps us answer the question: "Does this new way of doing things really produce fewer emissions when the entire process is considered?"

The "Well-to-Pump" values are for all of the processes involved in producing a fuel.  For petroleum fuels, this would include things like oil field emissions, refinery emissions from producing a fuel, and transportation emissions for delivering a fuel to the location where a consumer could pump the fuel into a vehicle.  The "Pump-to-Wake" values are for combustion of the fuel during use in the vehicle.  In the table at the bottom, it can be seen that these values are often not very different for different fuel production processes and feedstocks.  The "Well-to-Wake" values are simply a combination (by addition) of the two.  
