const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i <= 5; i++) {                   //create variable i with value 1, keep looping over it until it is equal to 5
const newImage = document.createElement('IMG');     //Create an Image Object with document.createElement('IMG'), store it in newImage
newImage.setAttribute('src', 'images/pic' + i + '.jpg'); //element.setAttribute() changes the html's "src" attribute value to "images/pic" + i + ".jpg". This loops through the entire thing with pic1-pic5.
thumbBar.appendChild(newImage);                                  //append the newImage variable to thumbbar.
newImage.addEventListener('click', function(){                      //Attach a click event to a <button> element.
    displayedImage['src'] = newImage['src']                             //Whenever the click event occurs, replace the displayed image value with clicked image.
    })
}


/* Wiring up the Darken/Lighten button */

btn.onclick = function(){                         //create a button with the following function when click....
    let buttonAttribute = btn.getAttribute("class");          //when click, first, use getAttribute() to return the value of the btn "class" and store it in att variable. Meaning, if it is currently lighten, and you click the button, your value is lighten.
    if(buttonAttribute == "dark"){                               
        btn.setAttribute("class", "light");       //if att is equal to dark, from the class attribute, change its value to light
        btn.textContent = "Lighten";              //change the text content of the button element to "Lighten"
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"; //access overlay's style and adjust background colour to be lighter
    }
    else{
        btn.setAttribute("class","dark");         //since buttonAttribute is not equal to dark because of line 21, from the class attribute, change its value to dark
        btn.textContent = "Darken";               //change the text content of the button element to "Darken"
        overlay.style.backgroundColor = "rgba(0,0,0,0)"; //access overlay's style and adjust background colour to be lighter
    }
}
