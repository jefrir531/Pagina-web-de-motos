(function(){

    const sliders = [...document.querySelectorAll('.testimonio__cuerpo')];
    const botonNext = document.querySelector('#next');
    const botonBefore = document.querySelector('#before');
    let value;

    botonNext.addEventListener('click',()=>{
        changePosition(1);
    });

    botonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition=(add)=>{
        const testimonio__actual=document.querySelector('.testimonio__cuerpo--show').dataset.id;
        value=Number(testimonio__actual);
        value+=add;

        sliders[Number(testimonio__actual)-1].classList.remove('testimonio__cuerpo--show');
        if(value===sliders.length+1 || value===0){
            value=value ===0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimonio__cuerpo--show');
       
    }

})();