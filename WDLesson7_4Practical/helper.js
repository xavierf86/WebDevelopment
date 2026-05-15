// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lat, lon){
  //alert(location);
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}

// card() accepts JSON of one complaint and returns a card for the complaint
function card( collisions ){ 

  let location = [collisions.latitude || 0, collisions.longitude || 0];
  let build = `<div class="card fitted">
              <h3>${collisions.crash_date}</h3>
              <h5>${collisions.borough}</h5>
              <p>${collisions.zip_code}</p>
              <p>${collisions.contributing_factor_vehicle_1}</p><hr>
              <p>${collisions.number_of_person_injured}</p>
              <input type="button" onclick="showMap( ${location} )" value="Map">
        </div>`;
  return build;
}