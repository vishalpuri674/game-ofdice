var n1 = Math.floor((Math.random())*6)  + 1 ;
var n2 =  Math.floor((Math.random())*6)  + 1 ;
var imgno1 = "./images/dice"+ n1 +".png"   ; 
var imgno2 = "./images/dice"+ n2 +".png"   ;

document.querySelector(".img1").setAttribute("src" , imgno1)  ;

document.querySelector(".img2").setAttribute("src" , imgno2)   ; 

if(n1 > n2) 
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!" ; 
}
else if( n2 > n1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩" ; 
   
}
else{
    document.querySelector("h1").innerHTML = "Draw!" ; 

}