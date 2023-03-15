let botton = document.querySelector(".button");
let show = document.createElement("a")
show.classList.add("btn");
show.textContent = "Pro Subscription";

botton.appendChild(show);



let newcard = document.querySelector(".recipe-gallery")
let ncard = document.createElement("div")
ncard.classList.add("card");

let ele = document.createElement("a");
ele.classList.add("recipe-text");


let head = document.createElement("h3");
let para = document.createElement("p")

head.textContent = "Litti Chokha"
para.textContent = "prep: 30min | Cook: 50min"

ele.appendChild(head)
ele.appendChild(para)
ncard.appendChild(ele)
newcard.appendChild(ncard);