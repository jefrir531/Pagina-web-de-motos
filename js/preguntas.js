(function(){
    const preguntas__title=[...document.querySelectorAll('.preguntas__title')];
    console.log(preguntas__title)

    preguntas__title.forEach(preguntas =>{
        preguntas.addEventListener('click', ()=>{
            let height=0;
            let respuestas=preguntas.nextElementSibling;
            let addPadding=preguntas.parentElement.parentElement;

            addPadding.classList.toggle('preguntas__padding--add');
            preguntas.children[0].classList.toggle('preguntas__flecha--rotate');

            if(respuestas.clientHeight===0){
                height=respuestas.scrollHeight;
            }

            respuestas.style.height=`${height}px`;

        });


    });



})();