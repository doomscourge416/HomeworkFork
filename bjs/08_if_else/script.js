
// let minValue
// let maxValue
// let otpavitCifri = document.querySelector('#minMaxSubmit')

// // otpavitCifri.addEventListener('click',function(){
    
// //     gameRun = true
// // } )


let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

if(isNaN(minValue)) minValue = 0 ;
if(isNaN(maxValue)) maxValue = 100 ;


(minValue <= -1000) ? minValue = -999 : '';
(maxValue >= 1000) ? maxValue = 999 : '';



alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);





function numberToText(number) {
    const decimals = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let result = ' ';

    if(number < 0){
        number = Math.abs(number);
    
        if(number < 20) {

            result = decimals[number];
    
        } else if(number < 100) {
    
            result = tens[Math.floor(number / 10)];
    
            if(number % 10 !== 0) {
    
                result += ' ' + decimals[number % 10];
            }
        } else if (number < 1000) {
    
            result = hundreds [Math.floor(number / 100)];
    
            if (number % 100 !== 0) {
    
                result += ' ' + numberToText(number % 100);
            }
        }
        result = `Минус ` + result;
    }

    else if(number < 20) {

        result = decimals[number];
    
    } else if(number < 100) {
    
        result = tens[Math.floor(number / 10)];
    
        if(number % 10 !== 0) {
    
            result += ' ' + decimals[number % 10];
        }
        } else if (number < 1000) {
    
        result = hundreds [Math.floor(number / 100)];
    
        if (number % 100 !== 0) {
    
            result += ' ' + numberToText(number % 100);
        }
    }
    
    
    
    

    
    return result
}

let answerNumberToText




// if(minValue <= -1000) {
//     minValue = -999;
// }



// if(maxValue >= 1000) {
//     maxValue = 999;-100000
// }


let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerNumberToText = numberToText(answerNumber);
answerField.innerText = `Вы загадали число ${answerNumberToText }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = true;
    // minValue.number = document.querySelector('#inputMin').value
    // maxValue = document.querySelector('#inputMax').value
    
    minValue = parseInt(prompt('Минимальное знание числа для новой игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для новой игры','100'));
    if(isNaN(minValue)) minValue = 0 ;
    if(isNaN(maxValue)) maxValue = 100 ;   
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerNumberToText = numberToText(answerNumber);
    answerField.innerText = `Вы загадали число ${answerNumberToText }?`;

    
})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (answerNumber <= minValue){
            const phraseRandom = Math.round( Math.random() * 3);

            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            (phraseRandom === 2) ? `Я сдаюсь..\n\u{1F92F}` :
            (phraseRandom === 3) ? `Что-то тут не так..\n\u{1F92F}` :
            `А вы точно не врёте?...\n\u{1F92F}` ;

            answerField.innerText = answerPhrase;

            gameRun = false;
            
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerNumberToText = numberToText(answerNumber);
            // Здесь продолжить...
            answerField.innerText = `Вы загадали число ${answerNumberToText }?`;
        }
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            (phraseRandom === 2) ? `Я сдаюсь..\n\u{1F92F}` :
            (phraseRandom === 3) ? `Что-то тут не так..\n\u{1F92F}` :
            `А вы точно не врёте?...\n\u{1F92F}` ;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerNumberToText = numberToText(answerNumber);
            answerField.innerText = `Вы загадали число ${answerNumberToText }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerRandom = Math.round( Math.random() * 3);
        const randomEnding = (answerRandom === 1) ?
        `Я всегда угадываю\n\u{1F60E}` :
        (answerRandom === 2) ? `Я так и знал!\n\u{1F929}` :
        (answerRandom === 3) ? `Это было просто!\n\u{1F601}` :
        `Легче простого!\n\u{1F61B}` ;
        answerField.innerText = randomEnding

        gameRun = false;
    }
})

