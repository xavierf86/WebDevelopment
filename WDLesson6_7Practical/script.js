let data;
async function init(){
  
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "collision.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${collision.crash_date}</h3>
                 <hr>
                 <p>Crash Time: ${collision.crash_time}</p>
                 <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                 <p>Zip Code: ${collision.zip_code}</p>
                 <p>Street: ${collision.on_street_name}</p>
                 <P>Off Street: ${collision.off_street_name} </p>
                 <hr>
                 <p>People Injured: ${collision.number_of_persons_injured}</p>
                 <p>People Killed: ${collision.number_of_persons_killed}</p>
                 <hr>
                 <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                 <p>Collision ID: ${collision.collision_id} </p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterByTime(){
  let output = document.getElementById("output");
  let time = document.getElementById("time").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.crash_time == time){
      build += `<div class="fitted card">
                    <h3>${collision.crash_date}</h3>
                    <hr>
                    <p>Crash Time: ${collision.crash_time}</p>
                    <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                    <p>Zip Code: ${collision.zip_code}</p>
                    <p>Street: ${collision.on_street_name}</p>
                    <p>Off Street: ${collision.off_street_name} </p>
                    <hr>
                    <p>People Injured: ${collision.number_of_persons_injured}</p>
                    <p>People Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                    <p>Collision ID: ${collision.collision_id} </p>
                </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByInjured(){
  let output = document.getElementById("output");
  let injured = document.getElementById("injured").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.number_of_persons_injured == injured){
      build += `<div class="fitted card">
                    <h3>${collision.crash_date}</h3>
                    <hr>
                    <p>Crash Time: ${collision.crash_time}</p>
                    <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                    <p>Zip Code: ${collision.zip_code}</p>
                    <p>Street: ${collision.on_street_name}</p>
                    <p>Off Street: ${collision.off_street_name} </p>
                    <hr>
                    <p>People Injured: ${collision.number_of_persons_injured}</p>
                    <p>People Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                    <p>Collision ID: ${collision.collision_id} </p>
                </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByKilled(){
  let output = document.getElementById("output");
  let killed = document.getElementById("killed").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.number_of_persons_killed == killed){
      build += `<div class="fitted card">
                    <h3>${collision.crash_date}</h3>
                    <hr>
                    <p>Crash Time: ${collision.crash_time}</p>
                    <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                    <p>Zip Code: ${collision.zip_code}</p>
                    <p>Street: ${collision.on_street_name}</p>
                    <p>Off Street: ${collision.off_street_name} </p>
                    <hr>
                    <p>People Injured: ${collision.number_of_persons_injured}</p>
                    <p>People Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                    <p>Collision ID: ${collision.collision_id} </p>
                </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByZip(){
  let output = document.getElementById("output");
  let zip = document.getElementById("zip").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.zip_code == zip){
      build += `<div class="fitted card">
                    <h3>${collision.crash_date}</h3>
                    <hr>
                    <p>Crash Time: ${collision.crash_time}</p>
                    <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                    <p>Zip Code: ${collision.zip_code}</p>
                    <p>Street: ${collision.on_street_name}</p>
                    <p>Off Street: ${collision.off_street_name} </p>
                    <hr>
                    <p>People Injured: ${collision.number_of_persons_injured}</p>
                    <p>People Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                    <p>Collision ID: ${collision.collision_id} </p>
                </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByStreet(){
  let output = document.getElementById("output");
  let street = document.getElementById("street").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.on_street_name == street){
      build += `<div class="fitted card">
                    <h3>${collision.crash_date}</h3>
                    <hr>
                    <p>Crash Time: ${collision.crash_time}</p>
                    <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                    <p>Zip Code: ${collision.zip_code}</p>
                    <p>Street: ${collision.on_street_name}</p>
                    <p>Off Street: ${collision.off_street_name} </p>
                    <hr>
                    <p>People Injured: ${collision.number_of_persons_injured}</p>
                    <p>People Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                    <p>Collision ID: ${collision.collision_id} </p>
                </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByCause(){
  let output = document.getElementById("output");
  let cause = document.getElementById("cause").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.contributing_factor_vehicle_1 == cause){
      build += `<div class="fitted card">
                    <h3>${collision.crash_date}</h3>
                    <hr>
                    <p>Crash Time: ${collision.crash_time}</p>
                    <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                    <p>Zip Code: ${collision.zip_code}</p>
                    <p>Street: ${collision.on_street_name}</p>
                    <p>Off Street: ${collision.off_street_name} </p>
                    <hr>
                    <p>People Injured: ${collision.number_of_persons_injured}</p>
                    <p>People Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                    <p>Collision ID: ${collision.collision_id} </p>
                </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByVehicle(){
  let output = document.getElementById("output");
  let vehicle = document.getElementById("vehicle").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.vehicle_type_code1 == vehicle){
      build += `<div class="fitted card">
                    <h3>${collision.crash_date}</h3>
                    <hr>
                    <p>Crash Time: ${collision.crash_time}</p>
                    <p>Cause of Crash: ${collision.contributing_factor_vehicle_1}</p>
                    <p>Zip Code: ${collision.zip_code}</p>
                    <p>Street: ${collision.on_street_name}</p>
                    <p>Off Street: ${collision.off_street_name} </p>
                    <hr>
                    <p>People Injured: ${collision.number_of_persons_injured}</p>
                    <p>People Killed: ${collision.number_of_persons_killed}</p>
                    <hr>
                    <p>Vehicle Type: ${collision.vehicle_type_code1}</p>
                    <p>Collision ID: ${collision.collision_id} </p>
                </div>` 
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByAll(){
  let output = document.getElementById("output")
  let result = document.getElementById("result");

  let time = document.getElementById("time").value;
  let injured = document.getElementById("injured").value;
  let killed = document.getElementById("killed").value;
  let zip = document.getElementById("zip").value;
  let street = document.getElementById("street").value;
  let cause = document.getElementById("cause").value;
  let vehicle = document.getElementById("vehicle").value;

  let build = ""
  let ct = 0;

  for(let i = 0; i < data.length; i+= 1){
    let collision = data[i]

    if(time = "" || collision.crash_time == time){
      
    }
  }
}