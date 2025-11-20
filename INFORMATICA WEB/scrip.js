/*  --------------------------------------------
    --------------------------------------------
    ----------- DISPOSITIVOS GRANDES ----------
    --------------------------------------------
    --------------------------------------------  */

const dropdawn = document.querySelectorAll('.container2');

dropdawn.forEach(dropdawn => {
    const boton1 = dropdawn.querySelector('.boton1')
    const menu2 = dropdawn.querySelector('.menu-secundario')
    const options2 = dropdawn.querySelectorAll('.menu-secundario li');

    const boton2 = dropdawn.querySelector('.boton2')
    const menu3 = dropdawn.querySelector('.menu-terciario')
    const options3 = dropdawn.querySelectorAll('.menu-terciario li');

    const boton3 = dropdawn.querySelector('.boton3')
    const menu4 = dropdawn.querySelector('.menu-terciario-uno')
    const options4 = dropdawn.querySelectorAll('.menu-terciario-uno li');

    const boton4 = dropdawn.querySelector('.boton4')
    const menu5 = dropdawn.querySelector('.menu-terciario-dos')
    const options5 = dropdawn.querySelectorAll('.menu-terciario-dos li');

    
    /*----------------------------------------
      ---------------- RAMAS -----------------
      ----------------------------------------*/
    boton1.addEventListener('click', () => {
        boton1.classList.toggle('boton1-clieked');

        menu2.classList.toggle('menu-secundario-open');

        menu3.classList.remove('menu-terciario-open');
    });
    
    options2.forEach(option2 => {
        
        option2.addEventListener('click', () => {

            options2.forEach(option2 => {
                option2.classList.remove('active2');
            });

            option2.classList.add('active2');
        });
    });


    /*----------------------------------------
      ------------- ESTUDIOS -----------------
      ----------------------------------------*/
    boton2.addEventListener('click', () => {
        boton2.classList.toggle('boton2-clieked');
        menu3.classList.toggle('menu-terciario-open');
        menu2.classList.remove('menu-secundario-open');
    });

    // ✔️ Estos listeners VAN AFUERA
    boton3.addEventListener('click', (e) => {
        e.stopPropagation(); 
        boton3.classList.toggle('boton3-clieked');
        menu4.classList.toggle('menu-terciario-uno-open');
        menu5.classList.remove('menu-terciario-dos-open');
    });

    boton4.addEventListener('click', (e) => {
        e.stopPropagation(); 
        boton4.classList.toggle('boton4-clieked');
        menu5.classList.toggle('menu-terciario-dos-open');
        menu4.classList.remove('menu-terciario-uno-open');
    });


    options3.forEach(option3 => {
        
        option3.addEventListener('click', (e) => {
             e.stopPropagation();

            option3.forEach(option3 => {
                option3.classList.remove('active3');
            });

            option3.classList.add('active3');
        });
    });

    options4.forEach(option4 => {
        
        option4.addEventListener('click', (e) => {
            e.stopPropagation(); 

            options4.forEach(option4 => {
                option4.classList.remove('active4');
            });

            option4.classList.add('active4');
        });
    });

    options5.forEach(option5 => {
        
        option5.addEventListener('click', (e) => {
            e.stopPropagation(); 

            options5.forEach(option5 => {
                option5.classList.remove('active5');
            });

            option5.classList.add('active5');
        });
    });
});





/*  --------------------------------------------
    --------------------------------------------
    ----------- DISPOSITIVOS PEQUEÑOS ----------
    --------------------------------------------
    --------------------------------------------  */
const dropdawn2 = document.querySelectorAll('.container');
dropdawn2.forEach(dropdawn2 => { 
    
    const botonmoviles = dropdawn2.querySelector('.boton');
    const menumoviles = dropdawn2.querySelector('.menu-moviles-container');


    const botonmoviles2 = dropdawn2.querySelector('.boton2-moviles');
    const menumoviles2 = dropdawn2.querySelector('.menu-moviles-secundario');

    const botonmoviles3 = dropdawn2.querySelector('.boton3-moviles');
    const menumoviles3 = dropdawn2.querySelector('.menu-moviles-terciario');

    const botonmoviles4 = dropdawn2.querySelector('.boton4-moviles');
    const menumoviles4 = dropdawn2.querySelector('.menu-moviles-terciario-uno');

    const botonmoviles5 = dropdawn2.querySelector('.boton5-moviles');
    const menumoviles5 = dropdawn2.querySelector('.menu-moviles-terciario-dos');


    /*  --------------------------------------------
        ---------------- PRINCIPAL -----------------
        --------------------------------------------  */
    botonmoviles.addEventListener('click', () => {
        botonmoviles.classList.toggle('boton-clieked');

        menumoviles.classList.toggle('menu-moviles-container-open');
    });


    /*  ----------------------------------------
        ---------------- RAMAS -----------------
        ----------------------------------------  */
    botonmoviles2.addEventListener('click', () => {
        botonmoviles2.classList.toggle('boton2-moviles-clieked');

        menumoviles2.classList.toggle('menu-moviles-secundario-open');
    });


    /*  ----------------------------------------
        ------------- ESTUDIOS -----------------
        ----------------------------------------  */
    botonmoviles3.addEventListener('click', () => {
        botonmoviles3.classList.toggle('boton3-moviles-clieked');

        menumoviles3.classList.toggle('menu-moviles-terciario-open');

        botonmoviles4.addEventListener('click', () => {
            botonmoviles4.classList.toggle('boton4-moviles-clieked');

            menumoviles4.classList.toggle('menu-moviles-terciario-uno-open');
        });

        botonmoviles5.addEventListener('click', () => {
            botonmoviles5.classList.toggle('boton5-moviles-clieked');

            menumoviles5.classList.toggle('menu-moviles-terciario-dos-open');
        });
    });

});