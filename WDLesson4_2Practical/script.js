// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let area = length * width
  let output = document.getElementById("output");
  let msg = ""

  if(length <= 0||width <= 0){
    msg = "Inappropriate measurement"
  }
  else{
    msg = `Area is ${area}`;
  }

  output.innerHTML = msg;
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");
  let msg = ""

  if(animal == "Bear" && emotion == "Sad" ){
    msg = "sadBear.jpg"
  }

  if(animal == "Bear" && emotion == "Funny" ){
    msg = "funnyBear.jpg"
  }

  if(animal == "Dog" && emotion == "Sad" ){
    msg = "sadDog.jpg"
  }

  if(animal == "Dog" && emotion == "Funny" ){
    msg = "funnyDog.jpg"
  }

  if(animal == "Cat" && emotion == "Sad" ){
    msg = "sadCat.jpg"
  }

  if(animal == "Cat" && emotion == "Funny" ){
    msg = "funnyCat.jpg"
  }


  output.innerHTML = `<img src = "${msg}">`
}