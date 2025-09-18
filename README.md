# GREET_Jet_WTW_Calculator
This repository includes code for an app to access the GREET WTW Calculator Data for comparing petroleum jet fuel and aviation biofuels.

## Source and Funding
The data is from software produced by UChicago Argonne, LLC under Contract No. DE-AC02-06CH11357 with the Department of Energy.

Documentation for calculated values can be found at https:/greet.anl.gov/

In addition, this interactive is intended for use with case studies developed by DOE's Bioenergy Technologies Office as part of the Bioenergy Research and Education Bridge Program (BRIDGES).

BRIDGES is a bioenergy case study-based educational toolkit created in partnership with Argonne National Laboratory and Idaho National Laboratory, as well as education, community, industry, and other government partners.  You can learn more about the program at https://www.energy.gov/eere/bioenergy/bioenergy-research-and-education-bridge-program .

## Using the app
In the deployed app, there is a dropdown box in the top left corner.  By default, ["Conventional Crude"](#conventional-crude) is selected, but users can select more specific conventional petroleum feedstocks or blends, or can select from a variety of aviation biofuels feedstocks.  A second dropdown box near the top left is for the metric to be used.  By default, [grams of CO2 equivalent](#co2e) per MegaJoule is selected, but other emissions and metrics can be chosen as well.

The large bar chart graphic displays the results for [well-to-pump](#well-to-pump-wtp), [pump-to-wake](#pump-to-wake-ptw), and [well-to-wake](#well-to-wake-wtw) emissions for the chosen feedstock and metric.  These are defined in the [glossary](#Glossary).

The table at the bottom is configured to show ALL the data for a particular metric, with a column for each feedstock/process.  Again, there is a dropdown box to change the metric.  The table is NOT directly linked to the graph, though the data used for the graph can be found in the table as well, with immediate comparisons to the values for other feedstocks/processes.

## Background Information
The data displayed here are data for life cycle analysis of the emissions (and more) of different processes for producing jet fuel.  Aviation is one of several "hard-to-electrify" industries, and therefore, developing aviation fuels with fewer emissions is an important goal.  Life cycle analysis is a form of cradle-to-grave analysis that is intended to provide information for making decisions about which processes to invest in.  Life cycle analysis helps us answer the question: "Does this new way of doing things really produce fewer emissions when the entire process is considered?"

The "Well-to-Pump" values are for all of the processes involved in producing a fuel.  For petroleum fuels, this would include things like oil field emissions, refinery emissions from producing a fuel, and transportation emissions for delivering a fuel to the location where a consumer could pump the fuel into a vehicle.  The "Pump-to-Wake" values are for combustion of the fuel during use in the vehicle.  In the table at the bottom, it can be seen that these values are often not very different for different fuel production processes and feedstocks.  The "Well-to-Wake" values are simply a combination (by addition) of the two.  

# Glossary

### CO2e 
Carbon dioxide equivalent.  Includes emissions from typical gases that contribute to the greenhouse effect, reported as carbon dioxide emissions, to attempt to fully encompass greenhouse effect ramifications from a process.

### Conventional Crude
Aviation fuel has traditionally been produced from petroleum, or crude oil.  When *Conventional Crude* is selected, emissions reported align with this conventional, historic process for producing aviation fuel.

### Conventional Oil Sand
Selection of Conventional Oil Sand reflects the additional process and energy requirements of exploration, recovery, and processing of petroleum sourced from oil sands into aviation fuel.

### Conventional Shale Oil
Selection of Conventional Shale Oil reflects the process and energy requirements of exploration, recovery and processing of petroleum from shale oil into aviation fuel.

### Conventional US Mix
Selection of Conventional US Mix reflects a typical average of petroleum feedstocks used in the US to produce aviation fuel.

### FT-Jet Corn Stover
Corn Stover is the stalks, leaves, and husks from corn plants that remain in the field after the corn harvest.  These can be processed into Jet fuel using a Fischer-Tropsch process.

### FT-Jet NA NG
The FT stands for Fischer-Tropsch, which is a process that converts hydrocarbons into liquid fuels.  NA stands for North America and NG is natural gas.  This entire classification refers to aviation fuel produced from natural gas using a Fischer-Tropsch process with assumptions related to sourcing and processing within North America.

### HEFA Camelina
HEFA stands for hydro-processed esters and fatty acids.  It is a chemical process that converts vegetable oils, waste oils, and fats into liquid fuels, such as aviation fuel.  Camelina is an oil seed plant historically grown in Europe for its oil.  This process involves obtaining oil from the camelina seeds to process into aviation fuel.

### HEFA Rapeseed
HEFA stands for hydro-processed esters and fatty acids.  It is a chemical process that converts vegetable oils, waste oils, and fats into liquid fuels, such as aviation fuel.  Rapeseed is an oil seed plant historically grown in Europe for its oil.  This process involves obtaining oil from the rapeseeds to process into aviation fuel.

### HEFA Soybean
This process involves obtaining soybean oil from plants to be processed via the hydro-processed esters and fatty acids route into aviation fuel.

### Pump-to-wake (PTW)  
The stage in the life cycle analysis of a fuel that includes the combustion of fuel during vehicle operation.

### VOC
Volatile Organic Carbon emissions

### Well-to-pump (WTP)
The stages in the life cycle analysis of a fuel that include exploration, recovery(e.g. from a well), fuel production, and the subsequent transportation of the fuel to the pump which can deliver it to a vehicle.

### Well-to-wake (WTW)
In a life cycle analysis of a fuel, includes the addition of well-to-pump and pump-to-wake stages.  Well-to-wake values are also referred to as cradle-to-grave in an attempt to convey that they 
