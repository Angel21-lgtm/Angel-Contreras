"use strict";


const main = () => {
    // Cursor
    const cursor = document.querySelector("#cursor");
    const body = document.querySelector("body");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        body.style.backgroundPositionX = e.pageX + "px";
        body.style.backgroundPositionY = e.pageY + "px"

        let element = document.createElement("div");
        element.className = "element";
        body.prepend(element);

        element.style.left = e.pageX + "px";
        element.style.top = e.pageY + "px";

        const binartio = () => {
            const numerosBinarios = ("01").split("");
            return numerosBinarios[Math.floor(Math.random() * numerosBinarios.length)];
        }


        setTimeout(function() {

            let directionY = Math.random() < 0.5 ? -1 : 1;
            let directionX = Math.random() < 0.5 ? -1 : 1;

            element.style.top = parseInt(element.style.top) - (directionY * (Math.random() * 200)) + "px";
            element.style.left = parseInt(element.style.left) - (directionX * (Math.random() * 200)) + "px";
            element.style.transform = "scale(0.25)";
            element.innerHTML = binartio();
            element.style.opacity = 0;

            setTimeout(function() {
                element.remove();
            }, 1000);

        }, 10);
    });

    // scroll
    const scroll = () => {
        const elementos = document.querySelectorAll(".animacion-scroll-left");

        window.addEventListener("scroll", () => {
            elementos.forEach(elemento => {
                const propiedades = elemento.getBoundingClientRect();
                if(!(propiedades.top < window.innerHeight)) {
                    elemento.classList.remove("translate-y-opacity-left");
                } else {
                    elemento.classList.add("translate-y-opacity-left");
                }
            });
        });
    }

    scroll();
}

main();