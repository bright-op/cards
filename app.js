const BTN_ON_OFF = document.querySelector('.btn-on-off');
const ON_OFF = document.querySelector('.on-off');

// prices change
const PRICES1 = document.querySelectorAll('.price');
const PRICES2 = document.querySelectorAll('.price2');

// buttons-events
BTN_ON_OFF.addEventListener("click", onOff);


function onOff(){

    ON_OFF.classList.toggle('on-off-button');
    
    PRICES2.forEach(show=>{
        show.classList.toggle('price-show');
    })
    PRICES1.forEach(hide=>{
      hide.classList.toggle('price-hide');
    })
}



