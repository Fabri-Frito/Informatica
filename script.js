const dropdawn = document.querySelectorAll('nav');

dropdawn.forEach(dropdawn => {
    const boton = dropdawn.querySelector('.boton');
    const menu = dropdawn.querySelector('.menu');
    const options = dropdawn.querySelectorAll('.menu li');

    const boton2 = dropdawn.querySelector('.boton2');
    const menu2 = dropdawn.querySelector('.menu2');
    const options2 = dropdawn.querySelectorAll('.menu2 li');

    const boton3 = dropdawn.querySelector('.boton3');
    const menu3 = dropdawn.querySelector('.menu3');
    const options3 = dropdawn.querySelectorAll('.menu3 li');

    /*---------------------------------------
      ----------- PRINCIPAL -----------------
      ---------------------------------------*/
    boton.addEventListener('click', () => {
        boton.classList.toggle('boton-clieked');

        menu.classList.toggle('menu-open');

        menu2.classList.remove('menu2-open');

        menu3.classList.remove('menu3-open');
    });

    options.forEach(option => {
        
        option.addEventListener('click', () => {

            boton.classList.remove('boton-clicked');

            menu2.classList.remove('menu2-open');

            menu3.classList.remove('menu3-open');

            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });


    /*----------------------------------------
      ---------------- RAMAS -----------------
      ----------------------------------------*/
    boton2.addEventListener('click', () => {
        boton2.classList.toggle('boton2-clieked');

        menu2.classList.toggle('menu2-open');

        menu3.classList.remove('menu3-open');
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
    boton3.addEventListener('click', () => {
        boton3.classList.toggle('boton3-clieked');

        menu3.classList.toggle('menu3-open');

        menu2.classList.remove('menu2-open');
    });
    
    options3.forEach(option3 => {
        
        option3.addEventListener('click', () => {

            options3.forEach(option3 => {
                option3.classList.remove('active3');
            });

            option3.classList.add('active3');
        });
    });
});


