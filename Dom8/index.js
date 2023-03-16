const roll = document.querySelector(".col-lg-4");
roll.style.overflow = "scroll";

let head = document.createElement("h2");
let para = document.createElement("p");

head.classList.add("new-head");
para.classList.add("new-p");

head.textContent = "This is my custom heading"
para.textContent = "Web3 is the future but quite hard to get placed as a developer "

roll.appendChild(head);
roll.appendChild(para);


//output2

const bg = document.querySelector(".container-fluid");
 bg.style.backgroundColor = "white";

 //output 3

 let btn = document.querySelector(".navbar-toggler");
  btn.addEventListener("click", () => {
 let x = document.getElementById("navbarTogglerDemo01");
 if(x.style.display === "none"){
    x.style.display = "block";
 } else {
    x.style.display = "none";
 }
})


