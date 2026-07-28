const menuBtn=document.querySelector(".menu-btn");
const navlinks=document.querySelector(".nav-links");


menuBtn?.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {
    
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",() =>{

    if(window.scrollY>30){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

const scrollTopBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",() =>{

    if(window.scrollY>300){
        scrollTopBtn.style.display="flex";
    } else{
        scrollTopBtn.style.display="none";

    }

});

scrollTopBtn?.addEventListener("click",() =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

if(navbar) {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 30 ) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

const hiddenElements = document.querySelectorAll(
    "section, .glass-card, .project-card, .skill-card, .tool, .learning-card"
);

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
         if(entry.isItersecting){
            entry.target.classList.add("show");
         }
      }

    );
}

);

hiddenElements.forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});