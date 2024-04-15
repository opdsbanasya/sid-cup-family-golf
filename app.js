let crsr = document.querySelector("#cursor");
let crsrBlr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    crsrBlr.style.left=dets.x - 250 +"px";
    crsrBlr.style.top=dets.y - 250 +"px";
})

let h4All = document.querySelectorAll("nav h4");
h4All.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale = 1;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "#9BD924";
    })
})

gsap.to("nav",{
    backgroundColor:"#000",
    duration:0.5,
    height: "80px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top 11%",
        scrub:1
    }
})

gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top -30",
        end:"top -80%",
        scrub:2
    }
})
gsap.from("#about img, #about-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger :0.4,
    scrollTrigger:{
        trigger:"about",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:3
    }

})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger :0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:2
    }

})
gsap.from("#colun1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2,
    }
})
gsap.from("#colun2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2,
    }
})
gsap.from("#page4>h2",{
    y:70,
    scrollTrigger:{
        trigger:"#page4>h2",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
})