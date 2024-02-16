/**
 * objective: get bsae, height of triangle and find area by the formula and display the area
 * step 1: get base value(html file e kuja) onclick="calTriangle()
 * step 2: added an id in base html input field
 * step 3: use getElementById to access the input field
 * step 4: get value from the input field(value is string now)
 * step 5: convert the value to a number using parseFloat()
 * 
 * 
 */
function calTriangle(){
    console.log('from triange')
    // getting triangle base

    // step 3: use getElementById to access the input field
    const triangleBaseInput = document.getElementById('triangleBase');
    // step 4: get value from the input field(value is string now)
    const triangleBaseText = triangleBaseInput.value;
    // step 5: convert the value to a number using parseFloat()
    const base = parseFloat(triangleBaseText);//to convert string to float number
    console.log(base); //to check if
    
    // getting triangle height

    const triangleHeightInput = document.getElementById("triangleHeight");
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    document.getElementById('triangle-area').innerText = area;
}