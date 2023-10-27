let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

// Кнопки цифр:


document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})


document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})


document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})


document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})


document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})


document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})


document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})


document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})


document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})


document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})



// Кнопка "C":


document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})


//Кнопки математических вычислений:


document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
    
})


document.querySelector('#btn_subt').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'subt';
    inputWindow.value = '';
    
})


document.querySelector('#btn_mult').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
})


document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})


// Кнопка "РАВНО":

document.querySelector('#btn_eql').addEventListener('click', function () {
    if (operation === 'sum'){
        const result =  lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'subt'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'mult'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'div'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null
        lastOperand = 0;
        inputWindow.value = result;
    }
})