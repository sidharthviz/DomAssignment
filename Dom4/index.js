
// let color = ["#EDC126", "#E03B8B", "#E07C24", "#3DBE29", "#12B0E8"];


// let show = document.querySelectorAll(".clearfix");
//  show.forEach((ele) => { 
//         ele.style.backgroundColor = "#EDC126", "#EDC126", "#E03B8B", "#E07C24", "#3DBE29", "#12B0E8";
//  })

let col1 = document.querySelectorAll(".wrapper-barbarian div")
col1[5].style.backgroundColor = "#EDC126";


let change = document.querySelectorAll(".wrapper-archer div")
change[3].innerText = "The Archer";

let show = document.querySelectorAll(".wrapper-archer div")
show[5].style.backgroundColor = "#E03B8B";


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