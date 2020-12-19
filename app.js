var tl =new TimelineMax({onUpdate:showPercentage});
var controller= new ScrollMagic.Controller();

var tls=gsap.timeline({
    scrollTrigger:{
        target:'.section-s'
    }
});

tl.from(".topsection-img", 2 , {opacity:0,x:200});
tls.from(".second-s-content-wrapper",{ opacity:0,y:100,duration:4,});
tls.from(".onion", 2, {
    opacity:0.3,
    x:-100,
    rotate:-180,
    delay:0.4,
    // scrollTrigger:".section-s",
});

// var scene =new ScrollMagic.Scene({
//     triggerElement:".second-s",
//     triggerHook:"onLeave",
//     duration:"100%"
// })

// .setPin('.second-s')
// .setTween(tl2)
// .addTo(controller);


function showPercentage(){
    tl.progress();
    console.log();
}
gsap.from(".tomato",{
    opacity:0.6,
    x:200,
    scrollTrigger:".section-third",
});

 gsap.from(".service-box",4,{
    opacity:0,
    y:50,
    scrollTrigger:".section-third",
});
// var gsap= gsap.from(".service-box",{
//     opacity:0,
//     delay:2,
//     scrollTrigger:".section-third-two",
// });