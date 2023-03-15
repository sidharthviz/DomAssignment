// let watch = document.querySelectorAll(".accordian h3");
// watch.forEach((element) => {
//     element.addEventListener("click", () => {
//         let para = element.nextElementSibling;
//         if(para.style.display === "block"){
//             para.style.display = "none";
//         } else {
//             para.style.display = "block";
//         }
//     });
// });

// output 1 assignment second

let para = document.querySelectorAll(".accordian p");
 para.forEach((element) => {
    element.style.backgroundColor = "#eeeeff";
 })

 let head = document.querySelectorAll(".accordian h3");
 head.forEach((element) => {
    element.style.backgroundColor = "#dadaf8";
 })

//  output2 ass2

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
 


