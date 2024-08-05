import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'


const leftContentImg = document.querySelector('#quienes-somos .left-content img')

gsap.fromTo(leftContentImg, {opacity:0 ,scale: .4},{opacity:1, scale: 1, duration: 2, stagger: .2,ease: "elastic.out(1,1)", scrollTrigger:{
  trigger: leftContentImg,
  start: '20% center'
}})

const rightContentImg = document.querySelector('#quienes-somos picture img')

gsap.fromTo(rightContentImg, {opacity:0 ,scale: .8},{opacity:1, scale: 1, duration: 1.7, ease: "elastic.out(1,1)",delay: .5, scrollTrigger:{
  trigger: rightContentImg,
  start: '20% center'
}})

const objetivosImg = document.querySelectorAll('#objetivos .swiper img')
const objetivosSwiper = document.querySelector('#objetivos .swiper')

gsap.fromTo(objetivosImg, {opacity:0 ,scale: .4},{opacity:1, scale: 1, duration: 2, stagger: .2,ease: "elastic.out(1,1)", scrollTrigger:{
  trigger: objetivosSwiper,
  start: '20% center'
}})

const historiaCard = document.querySelector('#historia .card-content')
const historiaBlueContent = document.querySelector('.blob-content')

gsap.fromTo(historiaCard, {yPercent: 30, opacity:0},{opacity:1 , yPercent: 0, duration:1, scrollTrigger:{
trigger: historiaCard
}})

gsap.fromTo(historiaBlueContent, {yPercent: 30, opacity:0},{opacity:1 , yPercent: 0, duration:1, scrollTrigger:{
trigger: historiaBlueContent
}})

const direccionesTodas = document.querySelectorAll('.direccion')

// Crea una instancia de IntersectionObserver con una función de devolución de llamada
const direccionesObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  // Si el elemento es visible
  if (entry.isIntersecting) {
    // Agrega la clase "active" al elemento
    entry.target.classList.add('observed');
    // Deja de observar una vez que se ha activado
    observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Puedes ajustar el valor de umbral según tus necesidades

direccionesTodas.forEach(direccion => {
direccionesObserver.observe(direccion)
});


// MAPA INTERACTIVO
// Guardo los elementos del SVG para animar
const direccionesMapa = [
  document.querySelector('#tijuana'),
  document.querySelector('#mexicali'),
  document.querySelector('#chihuahua'),
  document.querySelector('#guadalajara'),
  document.querySelector('#oxaca'),
  document.querySelector('#yucatan'),
  document.querySelector('#cancun')
]

// TODAS LAS CAJAS CLICKEABLES DE DIRECCIONES
const cajasDirecciones = document.querySelectorAll('.direccion');

console.log(`direcciones en el mapa:`, direccionesMapa);

cajasDirecciones.forEach((caja, i) => {
  caja.addEventListener('mouseover', () =>{    
    cajasDirecciones.forEach(e => {
      e.classList.remove('active')
    });
    
    direccionesMapa[i].classList.add('active')
  })

  caja.addEventListener('mouseout', () => {
    direccionesMapa.forEach(e => {
      e.classList.remove('active')
    });
  })
});



var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    990: {
      navigation: false,
      slidesPerView:1,
      navigation: false
    }
  }
});


// Animaciones con gsap
