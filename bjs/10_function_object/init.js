
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
         
        document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
        document.querySelector('#surnameOutput').innerText = initPerson.surname;
        document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
        document.querySelector('#genderOutput').innerText = initPerson.gender;
        document.querySelector('#birthDayOutput').innerText = initPerson.day;
        document.querySelector('#birthMonthOutput').innerText = initPerson.month;
        document.querySelector('#birthYearOutput').innerText = initPerson.year + ' года';
        document.querySelector('#jobOutput').innerText = initPerson.job;


    
};

document.querySelector("#buttonGenerate").addEventListener('click', function(){

    initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDayOutput').innerText = initPerson.day;
    document.querySelector('#birthMonthOutput').innerText = initPerson.month;
    document.querySelector('#birthYearOutput').innerText = initPerson.year + ' года';
    document.querySelector('#jobOutput').innerText = initPerson.job;
    console.log(initPerson.firstName);
});


document.querySelector("#buttonClear").addEventListener('click',function(){

    initPerson = personGenerator.getPerson();
    /*delete personGenerator.getPerson.firstName;
    cosole.log(initPerson.firstName);*/
    document.querySelector('#firstNameOutput').innerText = "Генерация фамилии";
    document.querySelector('#surnameOutput').innerText = "Генерация имени";
    document.querySelector('#patronymicOutput').innerText = "Генерация отчества";
    document.querySelector('#genderOutput').innerText = "Генерация пола";
    document.querySelector('#birthDayOutput').innerText = "Генерация дня,";
    document.querySelector('#birthMonthOutput').innerText = "Генерация месяца,";
    document.querySelector('#birthYearOutput').innerText = "Генерация года,";
    document.querySelector('#jobOutput').innerText = "Генерация профессии";

});

