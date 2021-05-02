

const tl = gsap.timeline({defaults:{ease:Power1.out}});
tl.to('.intro-mobile',{y:"100%", duration:0.6 ,delay:0.5});
tl.to('.slider-mobile',{y:"-100%", duration:0.8 },"-=0.4");

let darkflag = localStorage.getItem("darkflag");

console.log(darkflag);
if(darkflag=='enabled'){
    document.body.classList.add("dark");
}
else{
    document.body.classList.remove("dark");
}

anime({
    targets:'.close',
    opacity:1,
    duration:1000,
    easing:'easeInSine',
    delay:anime.stagger(200,{start:1000})
})

anime({
    targets:'.navigation-bar-mobile a',
    opacity:1,
    duration:1000,
    easing:'easeInSine',
    delay:anime.stagger(200,{start:1000})
})