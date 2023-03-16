# DomAssignment
 
## Dom 1
##  output 1.

img





Solution:  
```
let element = document.createElement("li");
 element.innerHTML = "<li>Hire Me</li>";  

let show = document.querySelector("header nav ul");
show.appendChild(element); 
```



##  output 2.

img


solution: 

```
let dipslay = document.querySelector(".search-field input");
 dipslay.placeholder = "Search My Project";
```


##  output 3.

img


solutions: 
```
let change = document.querySelectorAll(".hero-left-section p span");
 change[1].innerText = "An Employee";
 change[2].innerText = "Inueron Intelligence pvt Ltd"
```


##  output 4.

img



solutions: 
```
let picture = document.querySelector('.hero-right-section img');
 picture.src = 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg';

```

##  output 5.

img

solutions: 

```
let button = document.createElement('button');
 button.innerText = "Support Me";
 document.querySelector('.hero-right-section-btns').appendChild(button);
```

# Assignment 2


##  output 1.

img

solutions:
```
let para = document.querySelectorAll(".accordian p");
 para.forEach((element) => {
    element.style.backgroundColor = "#eeeeff";
 })

 let head = document.querySelectorAll(".accordian h3");
 head.forEach((element) => {
    element.style.backgroundColor = "#dadaf8";
 })

```


##  output 2.

img

solutions: 

```
let parents = document.querySelector(".accordian-wrapper");
 let ele = document.createElement("div");
 ele.classList.add("accordian")
 let heading = document.createElement("h3");
 let praag = document.createElement("p");

 heading.innerText = "Skills"
 praag.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be sen in my work over the Github."
praag.style.display = "block"

 ele.appendChild(heading);
 ele.appendChild(praag);
 parents.appendChild(ele);


 let show = document.querySelectorAll(".accordian h3");
 show.forEach((element) => {
    element.addEventListener("click", ()=> {
        let para = element.nextElementSibling;
        if(para.style.display === "block"){
            para.style.display = "none";
        } else {
            para.style.display = "block";
        }
    })
 })

 let change = document.querySelectorAll(".accordian h3");
 change.forEach((ele) => {ele.style.backgroundColor = "#dadaf8"});
 let under = document.querySelectorAll(".accordian p");
 under.forEach((element) => {element.style.backgroundColor = "#eeeeff"})
 

```

# Assignment 3

## output 1.

img

solutions: 

```
let dom = document.querySelector(".enterName")
dom.placeholder = "FSJS 2.0";
let email = document.querySelector(".enterMail") 
email.placeholder = "fsjs@inueron.ai"
let msg = document.querySelector(".enterMessage")
msg.placeholder = "Hello World";

```



## output 2.

img

solutions: 

```
let mod = document.querySelector(".userName")
mod.placeholder = "FSJS 2.0";

let usermail = document.querySelector(".userEmail") 
usermail.placeholder = "fsjs@inueron.ai"

let usermsg = document.querySelector(".userMessage")
usermsg.placeholder = "Hello World";
```

# Dom 4


img 

solutions: 

```
let gian = document.querySelectorAll(".wrapper-gian div")
gian[5].style.backgroundColor = "#E07C24";

let goblin = document.querySelectorAll(".wrapper-goblin div")
goblin[5].style.backgroundColor = "#3DBE29";

let goblinName = document.querySelectorAll(".wrapper-goblin div");
goblinName[3].innerText = "The Goblin"

let wizard = document.querySelectorAll(".wrapper-wizard div")
wizard[5].style.backgroundColor = "#12B0E8";


let feat = document.querySelectorAll(".one-third")
feat.forEach((ele) => {ele.style.color = "white"});

```

# Dom 5


img 

solutions: 

```
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
```



# Dom 6


img 

solutions: 

```
const banner = document.querySelector(".logo")
banner.src = "./assets/ineuron-logo.png"


const price  = document.querySelector(".app_price span");
price.innerText = "$10";
```



# Dom 7


img 

solutions: 

```
const show = document.querySelectorAll(".main__languages a");
show[1].remove(); 
show[3].remove(); 
show[5].remove(); 
show[7].remove(); 
show[9].remove(); 



let txt = document.querySelector(".main__form-input");
txt.disabled  = false;
txt.value = "Open source projects"



let btn = document.querySelector(".main__form-btn");
btn.disabled = false;
btn.addEventListener("submit", (show)=> {
    show.preventDefault();
})
```



# Dom 8

## output1

img 

solutions: 
```
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
```


## output2

img 

solutions: 
```
const bg = document.querySelector(".container-fluid");
 bg.style.backgroundColor = "white";
```


## output3

img 

solutions: 
```
let btn = document.querySelector(".navbar-toggler");
  btn.addEventListener("click", () => {
 let x = document.getElementById("navbarTogglerDemo01");
 if(x.style.display === "none"){
    x.style.display = "block";
 } else {
    x.style.display = "none";
 }
})

```


# Dom 9

## output 1.

img 

solutions: 

```
let change = document.querySelector(".caption h1")
 change.style.color = "red";
```

## output 2.

img 

solutions: 

```
 let change2 = document.querySelector(".add-to-cart");
 change2.style.backgroundColor  = "red";
```



