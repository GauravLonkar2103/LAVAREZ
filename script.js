function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function loader(){

    var tl=gsap.timeline()

tl.from(".page1",{
   transform:"scaleX(0.7) scaleY(0.2)",
   opcaity:0,
    delay:1,
    duration:2,
    borderRadius:"25px",
    ease:"expo.out"

})
tl.from([".page1 p",".page1 h1",".page1 .something",".page1 .mov"],{
    opacity:0,
    stagger:0.2,
    duration:0.5,
    y:25,
    duration:0.2,
    stagger:0.3
})
tl.from(".page1 span",{
    opacity:0,
    scale:0,
    duration:0.5
})

}


function navAnimation(){
    let nav=document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
    let tl=gsap.timeline()
    tl.to(".nav-bottom",{
        height:"28vh",
        duration:0.3
    })
    tl.to("nav h6",{
        display:"block",
        duration:0.1
    })
    tl.from(".nav-2 h6 span",{
        y:25,
        delay:0,
        duration:0.2,
        stagger:{
            amount:0.1
        }
    })
})
nav.addEventListener("mouseleave",function(){
    let tl=gsap.timeline()
    tl.to(".nav-2 h6 span",{
        y:0,
        delay:0,
        duration:0.1,
        stagger:{
            amount:0.1
        }
    })
    tl.to("nav h6",{
        display:"none",
        duration:0.1
    })
    tl.to(".nav-bottom",{
        height:"0vh",
        duration:0.1
    })
    
})
}

function page2Animation(){
    var rtele=document.querySelectorAll(".rtele");

rtele.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        gsap.to(ele.childNodes[4],{
            opacity:1,
            scale:1
        })
        
    })
    ele.addEventListener("mouseleave",function(){
        gsap.to(ele.childNodes[4],{
            opacity:0,
            scale:0
        })
        
    })
    ele.addEventListener("mousemove",function(dets){
        console.log(dets)
        gsap.to(ele.childNodes[4],{
            x:dets.clientX-ele.getBoundingClientRect().x-40,
            y:dets.clientY-ele.getBoundingClientRect().y-150
        })
    })
    

})


}

page2Animation()

function page3Animation(){
    var btn=document.querySelector(".center")
var video=document.querySelector(".page3 video")

btn.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,

    })
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.3) scaleY(0)",
        opacity:0,
        borderRadius:"30px"

    })
})
}


function page6Animation(){
    var pg6rt=document.querySelectorAll(".pg6rt")


pg6rt.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
    elem.childNodes[3].style.opacity=1
    elem.childNodes[3].play()
    elem.childNodes[1].style.opacity=0;
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].load()
        elem.childNodes[3].style.opacity=0;
        elem.childNodes[1].style.opacity=1;
    })
})

var pg6exp=document.querySelectorAll("#expand .vid")
var pg6vid=document.querySelectorAll("expand .vid video")

pg6exp.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity=1  
    elem.childNodes[3].play()
    elem.childNodes[1].style.opacity=0;
    //elem.style.transform="translateY(-15vw) scaleX(1) scaleY(2)"
    elem.style.height="24vw"
    //elem.childNodes[3].style.scale=2;
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0 
        elem.childNodes[3].load()
        elem.childNodes[1].style.opacity=1
        elem.style.height="50%"
        elem.style.transform="scaleX(1) scaleY(1)"
        })
})

}


function page8animation(){
    gsap.from(".btmelem",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".btmelem",
            scroller:"#main",
            start:"top 87%",
            end:"top 60%",
            scrub:true
    
        }
    })
}
locomotiveAnimation()
loader()
navAnimation()
page2Animation()
page3Animation()
page6Animation()
page8animation()
