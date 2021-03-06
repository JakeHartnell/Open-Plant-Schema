# Common Garden Plant Data
Meta Data about plants and their environmental conditions.

We're trying to put together a more useful dataset of plants that can more readily be used for IoT and indoor agriculture purposes. This means trying to make a more complete dataset, combining info from many different sources and putting it into a modern format like JSON so we can more easily refine and add to it.

It is also a good oppertunity to start to create a plant schema; schema.org currently doens't have one.

# Sources gathered from
http://www.data.gov/

The most useful data sets for our cause were provided by the USDA http://plants.usda.gov/java/ and a suplemental data set from SF.

The USDA "schema" is described here: http://plants.usda.gov/charinfo.html

# Plant Schema
So I haven't been able to find much in the way of plant schemas. The USDA has a [characteristics document]( http://plants.usda.gov/charinfo.html), which is sort of a start but needs work.

Their data only contains complete information for a releatively small ammount of plants. Example entry:

        "Accepted Symbol": "ABFR",
        "Scientific Name": "Abies fraseri",
        "Common Name": "Fraser fir",
        "Duration": "Perennial",
        "Growth Habit": "Tree",
        "Active Growth Period": "Spring and Summer",
        "Bloat": "None",
        "C:N Ratio": "High",
        "Coppice Potential": "No",
        "Fall Conspicuous": "No",
        "Fire Resistance": "No",
        "Flower Color": "Purple",
        "Flower Conspicuous": "No",
        "Foliage Color": "Dark Green",
        "Foliage Porosity Summer": "Moderate",
        "Foliage Porosity Winter": "Moderate",
        "Foliage Texture": "Medium",
        "Fruit Color": "Brown",
        "Fruit Conspicuous": "Yes",
        "Growth Form": "Single Stem",
        "Growth Rate": "Moderate",
        "Height at Base Age, Maximum (feet)": 20,
        "Height, Mature (feet)": 55,
        "Known Allelopath": "No",
        "Leaf Retention": "Yes",
        "Lifespan": "Moderate",
        "Low Growing Grass": "No",
        "Nitrogen Fixation": "None",
        "Resprout Ability": "Yes",
        "Shape and Orientation": "Erect",
        "Toxicity": "None",
        "Adapted to Coarse Textured Soils": "Yes",
        "Adapted to Medium Textured Soils": "Yes",
        "Adapted to Fine Textured Soils": "No",
        "Anaerobic Tolerance": "Low",
        "CaCO<SUB>3</SUB> Tolerance": "Low",
        "Cold Stratification Required": "No",
        "Drought Tolerance": "Low",
        "Fertility Requirement": "Low",
        "Fire Tolerance": "Low",
        "Frost Free Days, Minimum": 90,
        "Hedge Tolerance": "Low",
        "Moisture Use": "Medium",
        "pH (Minimum)": 3.5,
        "pH (Maximum)": 5.5,
        "Planting Density per Acre, Minimum": 435,
        "Planting Density per Acre, Maximum": 1200,
        "Precipitation (Minimum)": 45,
        "Precipitation (Maximum)": 100,
        "Root Depth, Minimum (inches)": 6,
        "Salinity Tolerance": "Low",
        "Shade Tolerance": "Tolerant",
        "Temperature, Minimum (°F)": -23,
        "Bloom Period": "Mid Spring",
        "Commercial Availability": "Routinely Available",
        "Fruit/Seed Abundance": "Medium",
        "Fruit/Seed Period Begin": "Spring",
        "Fruit/Seed Period End": "Fall",
        "Fruit/Seed Persistence": "Yes",
        "Propogated by Bare Root": "Yes",
        "Propogated by Bulbs": "No",
        "Propogated by Container": "Yes",
        "Propogated by Corms": "No",
        "Propogated by Cuttings": "Yes",
        "Propogated by Seed": "Yes",
        "Propogated by Sod": "No",
        "Propogated by Sprigs": "No",
        "Propogated by Tubers": "No",
        "Seeds per Pound": 60800,
        "Seed Spread Rate": "Slow",
        "Seedling Vigor": "Medium",
        "Small Grain": "No",
        "Vegetative Spread Rate": "None",
        "Berry/Nut/Seed Product": "No",
        "Christmas Tree Product": "Yes",
        "Fodder Product": "No",
        "Fuelwood Product": "Low",
        "Lumber Product": "No",
        "Naval Store Product": "No",
        "Nursery Stock Product": "Yes",
        "Palatable Browse Animal": "Low",
        "Palatable Human": "No",
        "Post Product": "No",
        "Protein Potential": "Low",
        "Pulpwood Product": "Yes",
        "Veneer Product": "Yes"


This is an example entry from 'SF_Plant_List.json', which may contain info on plants not in the USDA dataset:

    "OBJECTID": 331,
    "Latin_Name": "Lonicera hispidula",
    "Common_Name": "California Honeysuckle",
    "Family_Name": "Caprifoliaceae",
    "Former_Latin_Name": "",
    "Plant_Type": "Vine",
    "Bloom_Time": "Summer",
    "Flower_Color": "Pink",
    "Size_at_Maturity": "7-12 ft",
    "Climate_Appropriate_Plants": "SF Native",
    "Plant_Communities": "Coastal scrub;Woodland;Riparian",
    "Suitable_Site_Conditions": "Sun;Part shade;Shade",
    "Soil_Type": "Clay; Loam",
    "Pruning_Needs": "",
    "Water_Needs": "Low",
    "Habitat_Value": "Fruit",
    "Associated_Wildlife": "Birds;Hummingbirds",
    "Stormwater_Benefit": "No",
    "Appropriate_Location": "Backyard",
    "Suggested_for_Green_Connection_Routes": 4,
    "Street_Tree_List": "NA",
    "Additional_Characteristices___Notes": "Climbing",
    "PhotoCredit01": "�2003 Margo Bors",
    "Nurseries": "",
    "PhotoCredit02": "�2005 California Academy of Sciences",
    "PhotoCredit03": "�2006 Matt Below",
    "PhotoCredit04": "�2005 Jerry Murray"

