let homescorecount=0;
let awayscorecount=0;

let hs = document.getElementById("home-score");
hs.innerText=homescorecount;
let as = document.getElementById("away-score");
as.innerText=homescorecount;
function plusoneH(){
    homescorecount=homescorecount+1;
    hs.innerText=homescorecount;
}
function plustwoH(){
    homescorecount=homescorecount+2;
    hs.innerText=homescorecount;
}
function plusthreeH(){
    homescorecount=homescorecount+3;
    hs.innerText=homescorecount;
}
function plusoneA(){
    awayscorecount=awayscorecount+1;
    as.innerText=awayscorecount;
}
function plustwoA(){
    awayscorecount=awayscorecount+2;
    as.innerText=awayscorecount;
}
function plusthreeA(){
    awayscorecount=awayscorecount+3;
    as.innerText=awayscorecount;
}