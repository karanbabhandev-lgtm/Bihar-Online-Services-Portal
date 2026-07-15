// Back To Top

const topBtn = document.getElementById("topBtn");

if(topBtn){
    topBtn.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
}

// Search Services

const search = document.getElementById("searchBox");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

let text=card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

}
// ================= IMAGE SLIDER =================

let slideIndex = 0;
showSlides();

function showSlides(){

let slides = document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){
    slides[i].style.display="none";
}

slideIndex++;

if(slideIndex>slides.length){
    slideIndex=1;
}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}