var rand1= Math.floor(Math.random()*6) + 1;
var rand2= Math.floor(Math.random()*6) + 1;

var images1= "images/dice" + rand1 + ".png";
var images2= "images/dice" + rand2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if (rand1===rand2){
  document.querySelector(".container h1").innerHTML="Draw!";
} 
else if (rand1>rand2){
    document.querySelector(".container h1").innerHTML="🚩Player 1 wins!";
}
else if (rand1<rand2){
    document.querySelector(".container h1").innerHTML="🚩 Player 2 wins!"
}








        