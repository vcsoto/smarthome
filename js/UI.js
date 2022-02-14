import GetModule from './datos.js';
import Interactive from './scripts.js'
const getModule = new GetModule();
const int = new Interactive();

class UI {
    async renderProducts() {
        const product = await getModule.getProducts();
        //Selecciono el Scope
        const scope = document.querySelector('.gp-productos');

        //Selecciono los contenedores
        const tabmenu = scope.querySelector('.tabs');

        //seleccion propiedad objeto
        const section = product['section'];

        for (let i = 0; i < section.length; i++) {

            let item = section[i]['seccion'];
            let widgetProduct = section[i]['producto'];

            //Create Elements
            let mya = document.createElement("a");
            let mydiv = document.createElement("div");
            let mydivmain = document.createElement("div");

            //Inscrustar contenido en navegacion
            mya.textContent = `${item}`;


            //set attribute
            mya.className = "tablinks";
            mya.setAttribute("href", "#");
            mya.setAttribute("id", `${item}`);
            mydiv.className = "tabcontent";
            mydiv.setAttribute("id", `${item}`);
            mydivmain.className = "main-w";

            //Assignar
            tabmenu.appendChild(mya);
            scope.appendChild(mydiv);
            mydiv.appendChild(mydivmain);

            //Inscrustar contenido de productos
            widgetProduct.forEach((book) => {
                let myw = document.createElement('a');
                myw.className = 'widget drop';
                myw.setAttribute("href", `${book.nombre}`);
                myw.innerHTML = `<img src="${book.imagen}">
                        <h1>${book.nombre}</h1>
                        <i class="fas fa-chevron-down"></i>
                        <div class="cont">
                            <p>${book.descripcion}</p>
                        </div>`;
                mydivmain.appendChild(myw);
            });
        }

        let active = document.getElementById('Todo');
        active.classList.add('active');

        //inicializar la interaccion

        int.navtabs();
        int.tabs();
        int.mouseAnimation();
    }
}

export default UI;