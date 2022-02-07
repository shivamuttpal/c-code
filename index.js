var randomnumber1 = Math.floor(Math.random() * 6)+1;
var randomnumber2 = Math.floor(Math.random() * 6)+1;
var randomdiceimage1 = "dice-" + randomnumber1 + ".png";
var randomdiceimage2 = "dice-" + randomnumber2 + ".png";

var randomimagesource1 ="dice images/" + randomdiceimage1;
var randomimagesource2 ="dice images/" + randomdiceimage2;

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];


image1.setAttribute("src" , randomimagesource1); 
image2.setAttribute("src" , randomimagesource2); 
if(randomnumber1>randomnumber2){
    document.querySelector(".heading").innerHTML = "player 1 wins";
}
else if(randomnumber2>randomnumber1){
    document.querySelector(".heading").innerHTML ="player 2 wins";
}
else{
    document.querySelector(".heading").innerHTML ="Draw";
}