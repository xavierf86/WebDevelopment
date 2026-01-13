/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let length1=document.getElementById("length1");
      let width1=document.getElementById("width1");
      let output= document.getElementById("output")
      let area=parseFloat(length1.value) * parseFloat(width1.value);

      output.innerHTML=area;
}

function recPerimeter(){
      let length2=document.getElementById("length2");
      let width2=document.getElementById("width2");
      let output=document.getElementById("output");
      let perimeter=2*(parseFloat(length2.value) + parseFloat(width2.value));

      output.innerHTML=perimeter;

}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){

}

function cirPerimeter(){

}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}