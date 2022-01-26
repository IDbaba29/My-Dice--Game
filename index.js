var randomNumber1 = Math.floor(Math.random() * 6) + 1; // gives random number between 1 and 6  

// create path to images using random number generated

var randomDiceImage = "Images/" + "dice" + randomNumber1 + ".png"; // this creates a name similar to image storage name i.e dice1.png


var image1 = document.querySelectorAll("img")[0]; // this targets the img tag in the document,which are 2, then targets the first one on position zero[0]

image1.setAttribute("src", randomDiceImage);

// CODE FOR SECOND DICE

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // gives random number between 1 and 6    

// create path to images using 2nd random number generated

var randomDiceImage2 =   "Images/" + "dice" + randomNumber2 + ".png"; // this creates a name similar to image storage name i.e dice1.png


// target and change the image using generated number

var image2 = document.querySelectorAll("img")[1]; // this targets the img tag in the document,which are 2, then targets the second one on position zero[0]

image2.setAttribute("src", randomDiceImage2);

// CHANGE THE INNER HTML OF TILE DEPENDING ON THE RESULT OF THE DICE THROW
 if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = " Player 1 wins"
 }
 else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " Player 2 wins"
}
else {
    document.querySelector("h1").innerHTML = " Its a Draw!!!!!"
}

