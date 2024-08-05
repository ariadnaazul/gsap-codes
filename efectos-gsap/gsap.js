gsap.registerPlugin(ScrollTrigger)


const h1 = document.querySelector('h1')

gsap.from(h1, { yPercent: 100, opacity: 0, duration: .6, delay: .5 })

let allH2 = document.querySelectorAll('h2')

console.log(allH2)
allH2.forEach(h2 => {
    let splitH2 = new SplitType(h2)

    let chars = h2.querySelectorAll('.char')
    gsap.set(chars, { yPercent: 100 })

    ScrollTrigger.create({
        trigger: h2,
        start: '20% center',
        onEnter: () => gsap.to(chars, { yPercent: 0, duration: .6, stagger: .006 })
    });
});

gsap.registerPlugin(ScrollTrigger);

const listAppear = document.querySelectorAll('.list-appear');

listAppear.forEach(section => {
    gsap.fromTo(section.querySelectorAll('.card'), 
        { opacity: 0, scale: 0.4 }, 
        { opacity: 1, scale: 1, duration: 2, stagger: 0.2, ease: "elastic.out(1,1)", scrollTrigger: {
            trigger: section,
            start: '20% center'
        }
    });
});


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



const expands = document.querySelectorAll('.expand');

expands.forEach(expand => {
    gsap.fromTo(expand, 
        { opacity: 0, scale: 0.4 }, 
        { opacity: 1, scale: 1, duration: 2, stagger: 0.2, ease: "elastic.out(1,1)", scrollTrigger: {
            trigger: expand,
            start: '20% center'
        }
    });
});