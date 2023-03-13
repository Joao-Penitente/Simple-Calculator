var numberKeys = document.querySelectorAll('.number-key');
var operationKey = document.querySelectorAll('.operation-key');
var equalKey = document.querySelector('.equal-key');
var display = document.querySelector('.display p');
var clearKey = document.querySelector('.clear-key');
var inversionKey = document.querySelector('.inversion-key');

var signal = false
var decimal = false 

numberKeys.forEach( (element) => {
    element.addEventListener('click', (e) => {
        signal = false;
        
        if(e.target.innerHTML == ','){
            if(!decimal){
                decimal = true;
                if(display.innerHTML == '0'){
                    display.innerHTML = '0,'
                }else{
                    display.innerHTML += e.target.innerHTML;

                }
                
            }
        }else{
            if(display.innerHTML == '0'){
                display.innerHTML = ''
            }
            display.innerHTML += e.target.innerHTML;
        }
    })
})

operationKey.forEach( (element) => {
    element.addEventListener('click', (e) => {
        if (!signal) {
            signal = true;
            if(display.innerHTML == '0'){
                display.innerHTML = ''
            }
            if(e.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }
            else if (e.target.textContent == '÷'){
                display.innerHTML += '/'
            }
            else{
                display.innerHTML += e.target.innerHTML
            }
        }
        if(signal){
            display.innerHTML = display.innerHTML.slice(0, -1)
            if(e.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }
            else if (e.target.textContent == '÷'){
                display.innerHTML += '/'
            }
            else{
                display.innerHTML += e.target.innerHTML
            }
        }
    })
})

clearKey.addEventListener('click', () => {
    display.innerHTML = '0';
    signal = false;
    decimal = false;
})

inversionKey.addEventListener('click', () => {
    var value = eval(display.innerHTML)
    display.innerHTML = value
    if(!signal){
        display.innerHTML = display.innerHTML * -1; 
    }
    
})

equalKey.addEventListener('click', () => {
    signal = false;
    decimal = false;
    var value = eval(display.innerHTML)
    display.innerHTML = value
})