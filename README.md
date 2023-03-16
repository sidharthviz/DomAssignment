# DomAssignment
 
## Dom 1
##  output 1.


![task1Output](https://user-images.githubusercontent.com/74046564/225619167-752f4f69-e131-4579-b4ea-4cb5c28c33e6.png)




Solution:  
```
let element = document.createElement("li");
 element.innerHTML = "<li>Hire Me</li>";  

let show = document.querySelector("header nav ul");
show.appendChild(element); 
```



##  output 2.

![task2Output](https://user-images.githubusercontent.com/74046564/225619276-f53d0c93-6bb0-4c17-8a08-783e86d17a44.png)



solution: 

```
let dipslay = document.querySelector(".search-field input");
 dipslay.placeholder = "Search My Project";
```


##  output 3.


![task3Output](https://user-images.githubusercontent.com/74046564/225619344-4f23af78-3755-4c4e-9ca4-40e774d03507.png)


solutions: 
```
let change = document.querySelectorAll(".hero-left-section p span");
 change[1].innerText = "An Employee";
 change[2].innerText = "Inueron Intelligence pvt Ltd"
```


##  output 4.


![task4Output](https://user-images.githubusercontent.com/74046564/225619365-eeaaaec5-066c-4bf7-8a8f-942ae6fd610e.png)



solutions: 
```
let picture = document.querySelector('.hero-right-section img');
 picture.src = 'https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg';

```

##  output 5.

![task5Output](https://user-images.githubusercontent.com/74046564/225619390-05ae54f0-b04d-4f46-9584-6f9dd1fe0b52.png)


solutions: 

```
let button = document.createElement('button');
 button.innerText = "Support Me";
 document.querySelector('.hero-right-section-btns').appendChild(button);
```

# Assignment 2


##  output 1.

![task1Output](https://user-images.githubusercontent.com/74046564/225619512-24a6755d-1150-48e4-9e8b-8921d14517cf.png)


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

![task2Output](https://user-images.githubusercontent.com/74046564/225619538-f0ca5312-9e3c-4575-8c88-aa41f0ad141c.png)


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


![task1Output](https://user-images.githubusercontent.com/74046564/225619614-11c393e3-41e6-47b8-9d99-0c728558aea9.png)

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


 ![DOM P1 SS](https://user-images.githubusercontent.com/74046564/225619925-4be6b9ef-21d2-4ab2-9624-cafa3d75d7e6.png)


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


 ![DOM P2 SS](https://user-images.githubusercontent.com/74046564/225620002-db3a2a6e-de3e-437a-906d-9ff68607baac.png)


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

## output 1.

![DOM P3 SS-1](https://user-images.githubusercontent.com/74046564/225620285-02f8119d-ba20-409f-9495-e48e0b4f231a.png)


solutions: 

```
const banner = document.querySelector(".logo")
banner.src = "./assets/ineuron-logo.png"


## output 2.
![DOM P3 SS-2](https://user-images.githubusercontent.com/74046564/225620320-0c38ce7a-dbf8-4a82-b940-799c1355b6a9.png)


const price  = document.querySelector(".app_price span");
price.innerText = "$10";
```



# Dom 7


 ![ass7 1-after](https://user-images.githubusercontent.com/74046564/225620435-784f9497-6bcd-473f-89ee-d4b1f3fccdcd.png)


solutions: 

```
const show = document.querySelectorAll(".main__languages a");
show[1].remove(); 
show[3].remove(); 
show[5].remove(); 
show[7].remove(); 
show[9].remove(); 


## output 2.

![ass7 2-after](https://user-images.githubusercontent.com/74046564/225620591-315ff9b4-f8da-4c11-b859-0b07aaff3d98.png)


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

## Before 

![ass8 1-before](https://user-images.githubusercontent.com/74046564/225620777-9fed25c6-ebb2-4908-bc9c-165b62e6b3c9.png)


## After
<img width="770" alt="ass8 1-after" src="https://user-images.githubusercontent.com/74046564/225620652-bedd10dc-b8e7-4eaf-9820-8899210337f3.png">


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

## before

![ass8 2-before](https://user-images.githubusercontent.com/74046564/225620935-17915b51-01a7-441b-bf02-a5c4471c8159.png)


## after
![ass8 2-after](https://user-images.githubusercontent.com/74046564/225620949-88e0901b-b401-4091-b813-f277dada287f.png)


 

solutions: 
```
const bg = document.querySelector(".container-fluid");
 bg.style.backgroundColor = "white";
```


## output3

## before 

![ass8 3-before](https://user-images.githubusercontent.com/74046564/225621077-897ef2a4-2240-4d2f-8456-b26e0fe8552a.png)

## after

 ![ass8 3-after](https://user-images.githubusercontent.com/74046564/225621088-6da42475-bf9a-4765-935c-7fdf3712fcc3.png)


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

## before 
![ass9 1-before](https://user-images.githubusercontent.com/74046564/225621214-e38df702-e6bf-4e1e-a1b4-57137dbe9616.png)


## after
![ass9 1-after](https://user-images.githubusercontent.com/74046564/225621250-67c4508c-affa-4749-8018-29c7dde26c2a.png)



## output 1.

 

solutions: 

```
let change = document.querySelector(".caption h1")
 change.style.color = "red";
```

## output 2.

## before
![ass9 2-before](https://user-images.githubusercontent.com/74046564/225621331-8f04cd49-e647-4a09-bfbc-101eba1736fb.png)


## after
![ass9 2-after](https://user-images.githubusercontent.com/74046564/225621342-89ca9d1c-7be5-4367-9b86-80e0ba413e2d.png)



solutions: 

```
 let change2 = document.querySelector(".add-to-cart");
 change2.style.backgroundColor  = "red";
```



