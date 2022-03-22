



const imgs1 = document.getElementById("img");
const img1 = document.querySelectorAll("#img img");

let idx1 = 0;

function carrossel (){
  idx1++

  if(idx1 > img1.length - 1){
    idx1 = 0;
  }

  imgs1.style.transform = `translateX(${-idx1 * 580}px)`;

}

setInterval(carrossel, 7000);

///////////////////////////////////////////////////////

const imgs2 = document.getElementById("imag");
const img2 = document.querySelectorAll("#imag img");

let idx2 = 0;

function carrosseu (){
  idx2++

  if(idx2 > img2.length - 1){
    idx2 = 0;
  }

  imgs2.style.transform = `translateX(${-idx2 * 735}px)` ;

}

setInterval(carrosseu, 7000);

///////////////////////////////////////////////////////

const imgs3 = document.getElementById("image");
const img3 = document.querySelectorAll("#image img");

let idx3 = 0;

function carroseu (){
  idx3++

  if(idx3 > img3.length - 1){
    idx3 = 0;
  }

  imgs3.style.transform = `translateX(${-idx3 * 800}px)` ;

}

setInterval(carroseu, 7000);