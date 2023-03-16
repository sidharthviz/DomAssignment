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


