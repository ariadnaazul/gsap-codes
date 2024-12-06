gsap.registerPlugin(ScrollTrigger)

// Appear Effect: Block Text
const blockTexts = document.querySelectorAll('.block-text')

blockTexts.forEach(blockText => {
    ScrollTrigger.create({
        trigger: blockText,
        start: '50% center',
        onEnter: () => gsap.from(blockText, { yPercent: 100, opacity: 1, duration: .6, delay: -0.5 })
    });

});


// Appear Effect: Wave Text
let waveTexts = document.querySelectorAll('.wave-text')

waveTexts.forEach(waveText => {
    let splitText = new SplitType(waveText)

    let chars = waveText.querySelectorAll('.char')
    gsap.set(chars, { yPercent: 100 })

    ScrollTrigger.create({
        trigger: waveText,
        start: '20% center',
        onEnter: () => gsap.to(chars, { yPercent: 0, duration: .6, stagger: .006 })
    });
});


//Appear Effect: Listed Elements
const listAppear = document.querySelectorAll('.list-appear');

listAppear.forEach(section => {
    gsap.fromTo(section.querySelectorAll('.card'),
        { opacity: 0, scale: 0.4 },
        {
            opacity: 1, scale: 1, duration: 2, stagger: 0.2, ease: "elastic.out(1,1)", scrollTrigger: {
                trigger: section,
                start: '20% center'
            }
        });
});


//Appear Effect: Section down and up
const sectionsToAppear = document.querySelectorAll('.appear-from-down')

sectionsToAppear && sectionsToAppear.forEach((pregunta, index) => {
    gsap.set(pregunta, { y: 40, opacity: 0 });

    ScrollTrigger.create({
        trigger: pregunta,
        start: "top 80%", // Comienza la animación cuando el 80% superior del encabezado entra en el viewport
        end: "top 70%", // Revierte la animación cuando el 30% superior del encabezado sale del viewport

        onEnter: () => {
            gsap.to(pregunta, { y: 0, opacity: 1, duration: .4, ease: 'cubic-bezier(0.25, 1, 0.5, 1)', stagger: .2 }); // Muestra el encabezado cuando entra en el viewport
        },
        onLeaveBack: () => {
            gsap.to(pregunta, { y: 40, opacity: 0, duration: .4, ease: 'cubic-bezier(0.25, 1, 0.5, 1)', stagger: .2 }); // Oculta el encabezado cuando sale del viewport
        }
    });
});


//Appear Effect: Expandable Element
const expands = document.querySelectorAll('.expand');

expands.forEach(expand => {
    gsap.fromTo(expand,
        { opacity: 0, scale: 0.4 },
        {
            opacity: 1, scale: 1, duration: 2, stagger: 0.2, ease: "elastic.out(1,1)", scrollTrigger: {
                trigger: expand,
                start: '20% center'
            }
        });
});


//Rotate Effect: Travel to Right
const rotateBoxes = document.querySelectorAll('.rotate-box')

rotateBoxes.forEach(box => {
    ScrollTrigger.create({
        trigger: box,
        start: '20% center',
        onEnter: () => gsap.to(box, { rotation: 360, x: 500, duration: 1 })
    });

});

let nav = document.querySelector('.path')

let tween = gsap.to(".travel-box", {
  duration: 1, 
  x: () => nav.offsetWidth, // animate by the px width of the nav
  xPercent: -100, 
  ease: "none", 
  paused: true
});

// Controladores para los eventos de mouse
document.querySelector(".travel-box-container").addEventListener('mouseenter', () => tween.play());
document.querySelector(".travel-box-container").addEventListener('mouseleave', () => tween.reverse());