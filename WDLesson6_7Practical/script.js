let data;
async function init(){
  
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${collision.contributing_factor_vehicle_1}</h3>
                 <hr>
                 <p>${collision.borough}</p>
                 <p>${collision.zip_code}</p>
                 <p>${collision.on_street_name}</p>
                 <hr>
                 <p>${collision.crash_date}</p>
                 <hr>
                 <p></p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.descriptor}</p>
                    <hr>
                    <p>${complaint.created_date}</p>
                    <hr>
                    <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByZip(){
  let output = document.getElementById("output");
  let zip = document.getElementById("zip");
  let result = document.getElementById("result");
  
  let build = "";
  for(let i = 0; i < data.length; i +=1){
    let complaint = data[i]
    if(complaint.incident_zip == zip.value){
      build = `<div class = "fitted card">
                      <h3>${complaint.complaint_type}</h3>
                      <hr>
                      <p>${complaint.borough}</p>
                      <p>${complaint.incident_zip}</p>
                      <p>${complaint.descriptor}</p>
                      <hr>
                      <p>${complaint.created_date}</p>
                      <hr
                      <p>${complaint.agency}</p>
                </div>`
                
    }
  }
  output.innerHTML = build;
}