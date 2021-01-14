

var tl =new TimelineMax();
tl.from('.topside-1',1.5,{opacity:0,x:-250});
tl.from(".topsection-img", 2 , {opacity:0,x:200,delay:0.2});


// section 2
var tlsectionS=gsap.timeline({
    scrollTrigger:{
        target:'.section-s',
    }
});
tlsectionS.from(".second-s-content-wrapper",1,{ opacity:0,y:200,delay:0.7});
tlsectionS.from(".onion", 2, {
    opacity:0.3,
    x:-100,
    rotate:-180,
    delay:0.4,
},"-=1");



// section 3

var tlsection3=gsap.timeline({
    scrollTrigger:{
        target:'.section-third',
    }
});
var serviceboxes=document.querySelectorAll(".service-box");
var sb_length=serviceboxes.length;
for(var i=0; i<sb_length;i++){
    tlsection3.from(serviceboxes[i],1,{
        opacity:0,
        y:50,
        delay:function() {
            return Math.random() * 1;
          }
    });
}
gsap.from(".tomato",{
    opacity:0.6,
    x:200,
    scrollTrigger:".section-third",
});


// section 4
gsap.from(".fourth-s-content-wrapper",1,{opacity:0,y:200,delay:0.8,scrollTrigger:'.fourth-s'});
gsap.from(".chilies", 2, {
    opacity:0.3,
    x:100,
 scrollTrigger:".fourth-s"
});

// dishes section

var tlfoodz=gsap.timeline({
    scrollTrigger:{
        target:'.recipies-section',
        start:"top top",
        endtrigger:15
    }
});
var foodboxes=document.querySelectorAll(".food-box");
var fb_length=foodboxes.length;
for(var i=0; i<fb_length;i++){
    tlfoodz.from(foodboxes[i],2,{
        opacity:0,
        y:50,
        delay:function() {
            return Math.random() * 1;
          }
    });
}


// footer
gsap.from(".footer-leaf", 2, {
    opacity:0.3,
    x:100,
 scrollTrigger:".footer"
});


// test code scroll magic it works.

// var controller= new ScrollMagic.Controller();
// var scene =new ScrollMagic.Scene({
//     triggerElement:".second-s",
//     triggerHook:"onLeave",
//     duration:"100%"
// })

// .setPin('.second-s')
// .setTween(tl2)
// .addTo(controller);


// function showPercentage(){
//     tl.progress();
//     console.log();
// }


