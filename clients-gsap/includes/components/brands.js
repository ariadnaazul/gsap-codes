
import { watchPreferredMotion } from "../../utils/helpers/watchPreferredMotion.js";

function animateBrands() {
    const DOM = {
        columns: document.querySelectorAll(".brands__item"),
    };

    const column = {
        one: DOM.columns[0].innerHTML,
        two: DOM.columns[1].innerHTML,
        three: DOM.columns[2].innerHTML,
        four: DOM.columns[3].innerHTML,
        five: DOM.columns[4].innerHTML,
        six: DOM.columns[5].innerHTML,
    };

    createTimeline(DOM, column);
}

function createTimeline(DOM, column) {
    const mm = gsap.matchMedia();

    mm.add(
        {
            isMobile: "(max-width: 768px)",
            isDesktop: "(min-width: 769px) and (max-width: 1240px)",
            isLargeDesktop: "(min-width: 1241px)",
        },
        (context) => {
            let columnsLength;

            if (context.conditions.isMobile) {
                columnsLength = 3;
                DOM.columns[0].innerHTML = column.one + column.two;
                DOM.columns[1].innerHTML = column.three + column.four;
                DOM.columns[2].innerHTML = column.five + column.six;
            } else if (context.conditions.isDesktop) {
                columnsLength = 5;
                DOM.columns[0].innerHTML = column.one + column.two;
                DOM.columns[1].innerHTML = column.three;
                DOM.columns[2].innerHTML = column.four;
                DOM.columns[3].innerHTML = column.five;
                DOM.columns[4].innerHTML = column.six;
            } else if (context.conditions.isLargeDesktop) {
                columnsLength = 6;
                DOM.columns[0].innerHTML = column.one;
                DOM.columns[1].innerHTML = column.two;
                DOM.columns[2].innerHTML = column.three;
                DOM.columns[3].innerHTML = column.four;
                DOM.columns[4].innerHTML = column.five;
                DOM.columns[5].innerHTML = column.six;
            }

            watchPreferredMotion(() => {
                for (let i = 0; i < columnsLength; i++) {
                    const column = DOM.columns[i];
                    const logos = column.querySelectorAll("img");
                    const randomOffset = gsap.utils.random(["-200%", "200%"]);
                    const isEven = i % 2 === 0;

                    const tl = gsap.timeline({
                        repeat: -1,
                        delay: -columnsLength + i * 0.2,
                    });

                    logos.forEach((logo) => {
                        tl.to(logo, {
                            keyframes: [
                                {
                                    y: isEven ? randomOffset : 0,
                                    x: isEven ? 0 : randomOffset,
                                    duration: 0.3,
                                },
                                {
                                    autoAlpha: 1,
                                    x: 0,
                                    y: 0,
                                    duration: 0.5,
                                    ease: "power2.out",
                                },
                                {
                                    delay: 3,
                                    y: isEven ? 0 : randomOffset,
                                    x: isEven ? randomOffset : 0,
                                    duration: 0.3,
                                    ease: "power2.in",
                                },
                            ],
                        }).set(logo, {
                            autoAlpha: 0,
                        });
                    });
                }
            });
        }
    );
}

// Llama a la función animateBrands con el bloque que contiene las columnas de marcas
document.addEventListener("DOMContentLoaded", () => {
   
        animateBrands();
    
});
