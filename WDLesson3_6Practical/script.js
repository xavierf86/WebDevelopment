// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function average(){
    let g1 = parseFloat(document.getElementById("g1").value);
    let g2 = parseFloat(document.getElementById("g2").value);
    let g3 = parseFloat(document.getElementById("g3").value);
    let output = document.getElementById("average");
    let average = (g1 + g2 + g3)/3

    output.innerHTML=average;
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function slope(){
    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let output = document.getElementById("slope");
    let slope = (y2 - y1)/(x2 - x1) 

    output.innerHTML = slope;
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function bmi(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let output = document.getElementById("bmi");
    let bmi = (weight/(height * height))*703

    output.innerHTML = bmi;
}