document.addEventListener('DOMContentLoaded', function(){
    let p2 = document.querySelector(".texto2");
    let p1 = document.querySelector(".texto1");
    let t1 = document.querySelector(".termo1");
    let coralSaudavel = document.querySelector(".coral-saudavel");
    let coralMorto = document.querySelector(".coral-morto");

    
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
           coralSaudavel.style.opacity = "0";
            coralMorto.style.opacity = "0";
        }else if(this.window.scrollY >= this.window.innerHeight * 0.3){
            p1.style.transform = "translateX(-100%)";
            p2.style.transform = "translateX(0)";
            p1.style.opacity = "0";
            p2.style.opacity = "1";
            t1.style.opacity = "1";
            p2.style.transition= "1s"; 
        }
    });

    let showCoralSaudavel = false;

    function alternarCoral() {
        if (showCoralSaudavel) {
            coralSaudavel.style.transition = "2s";
            coralSaudavel.style.opacity = "1";
            coralMorto.style.transition = "2s";
            coralMorto.style.opacity = "0";
        } else {
            coralSaudavel.style.transition = "2s";
            coralSaudavel.style.opacity = "0";
            coralMorto.style.transition = "2s";
            coralMorto.style.opacity = "1";
        }
        showCoralSaudavel = !showCoralSaudavel; 
    }
    setInterval(alternarCoral, 5000);

    function scrollSuave(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    }

  
    const links = document.querySelectorAll('a.link-areas-main');
    links.forEach(link => {
        link.addEventListener('click',scrollSuave);
    });

});



