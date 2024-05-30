document.addEventListener('DOMContentLoaded', function(){
    let p2 = document.querySelector(".texto2");
    let p1 = document.querySelector(".texto1");
    let t1 = document.querySelector(".termo1");

    t1.style.opacity = "0";
    p2.style.opacity = "0";
    p1.style.transform = "translateX(-100%)";
    p1.style.opacity = "0";

    setTimeout(() => {
        p1.style.transform = "translateX(0)";
        p1.style.transition = "transform 1s, opacity 1s"
        t1.style.transition = "opacity 1s";
        p1.style.opacity = "1";
    },500);


    window.addEventListener('scroll',function(){
        if(this.window.scrollY <= this.window.innerHeight * 0.3){
           p1.style.transform = "translateX(0)";
           p1.style.opacity = "1";
           p2.style.opacity = "0";
           p2.style.transform= "translateX(110%)";
           p1.style.transition = "1s";
           t1.style.opacity = "0";
        }else if(this.window.scrollY >= this.window.innerHeight * 0.3){
            p1.style.transform = "translateX(-100%)";
            p2.style.transform = "translateX(0)";
            p1.style.opacity = "0";
            p2.style.opacity = "1";
            t1.style.opacity = "1";
            p2.style.transition= "1s";
        }else if(this.window.scrollY >= this.window.innerHeight * 0.7){
            this.window.scrollTo({
                top: this.scrollY + 20,
                behavior: "smooth"
            });
        }
    });
});


