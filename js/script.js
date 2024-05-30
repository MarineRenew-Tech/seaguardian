document.addEventListener('DOMContentLoaded', function(){
    let p2 = document.querySelector(".texto2");
    let p1 = document.querySelector(".texto1");

  
    p1.style.transform = "translateX(-100%)";
    p1.style.opacity = "0";

    setTimeout(() => {
        p1.style.transform = "translateX(0)";
        p1.style.transition = "transform 1s, opacity 1s"
        p1.style.opacity = "1";
    },500);

    window.addEventListener('scroll',function(){
        if(this.window.scrollY <= this.window.innerHeight * 0.3){
           p1.style.transform = "translateX(0)";
           p1.style.opacity = "1";
           p2.style.opacity = "0";
           p2.style.transform= "translateX(110%)";
           p1.style.transition = "1s";
        }else{
            p1.style.transform = "translateX(-100%)";
            p2.style.transform = "translateX(0)";
            p1.style.opacity = "0";
            p2.style.opacity = "1";
            p2.style.transition= "1s";
        }
    });
});


