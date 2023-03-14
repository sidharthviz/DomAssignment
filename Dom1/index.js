
//output1

let element = document.createElement("li");
element.innerHTML = "<li>Hire Me</li>";

let show = document.querySelector("header nav ul");
show.appendChild(element);

 //output2
 
 let dipslay = document.querySelector(".search-field input");
 dipslay.placeholder = "Search My Project";

 //output3

 let change = document.querySelectorAll(".hero-left-section p span");
 change[1].innerText = "An Employee";
 change[2].innerText = "Inueron Intelligence pvt Ltd"


 //output4

 let picture = document.querySelector('.hero-right-section img');
 picture.src = 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg';

 // output5

 let button = document.createElement('button');
 button.innerText = "Support Me";
 document.querySelector('.hero-right-section-btns').appendChild(button);

//----------------------------SECOND--------------

//output1

let accor = document.querySelector('accordion-wrapper');



