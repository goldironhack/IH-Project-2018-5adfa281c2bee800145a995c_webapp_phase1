const NY_NEIGH_NAME_URL = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";

const NY_GEOSHAPES_URL = "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";

const NY_CRIMES_URL = "https://data.cityofnewyork.us/api/views/qgea-i56i/rows.json?accessType=DOWNLOAD";

const NY_HOUSING_URL = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";

var map;

/**
https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD

https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson

https://data.cityofnewyork.us/api/views/qgea-i56i/rows.json?accessType=DOWNLOAD

https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD
**/

function initMap() {
        var stern  = {lat: 40.7291, lng: -73.9965};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: stern
        });
        var marker = new google.maps.Marker({
          position: stern,
          map: map
        });
      }

var marker = new google.maps.Marker({
  position: stern,
  map: map
});

function getData(){
    var data = $.get(NY_HOUSING_URL,function(){})
.done(function(){
    /**
    console.log(data.responseJSON.data);
    //var dataROW = data.responseJSON.data;
    for(var i=0; i<data.responseJSON.data.length; i++ ){
        infoRows.push([dataROW[i][8],dataROW[i][13],dataROW[i][9]]);
    }
    var tableReference = $("#tableBody")[0];
    var newrow,state,deaths,year;
    for(var j=0; j<infoRows.length; j++){
    	newrow = tableReference.insertRow(tableReference.rows.length);
    	state = newrow.insertCell();
    	deaths = newrow.insertCell();
    	year = newrow.insertCell();
    	state.innerHTML = infoRows[j][0];
    	deaths.innerHTML = infoRows[j][1];
        year.innerHTML = infoRows[j][2];
    }
    **/
    //console.log(infoRows);
    console.log(data);
})
.fail(function(error){
    
    console.log(error);
})
}


$("document").ready(function(){
    $("#getData").on("click",getData)
/**
    $("#exportData").click(function(){

  //$("table").tableToCSV();

}

);
**/
})
