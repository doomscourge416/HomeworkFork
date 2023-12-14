const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    maleJobJson: `{
        "count": 9,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Блогер",
            "id_3": "Сантехник",
            "id_4": "Инженер",
            "id_5": "Минер",
            "id_6": "Шахтер",
            "id_7": "Военный",
            "id_8": "Налоговый эксперт",
            "id_9": "Таксист"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Светлана",
            "id_3": "Александра",
            "id_4": "Виолетта",
            "id_5": "Татьяна",
            "id_6": "Елена",
            "id_7": "София",
            "id_8": "Юлия",
            "id_9": "Диана",
            "id_10": "Анастасия"
        }
    }`,
    femaleJobJson: `{
        "count": 9,
        "list": {     
            "id_1": "Хирург",
            "id_2": "Блогер",
            "id_3": "Фитнес-тренер",
            "id_4": "Менеджер",
            "id_5": "Программист",
            "id_6": "Проектировщик",
            "id_7": "Финансист",
            "id_8": "Аудитор",
            "id_9": "Продавец"
        }
    }`,
    /*patronymicJson: `{
        "count": 9,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Павлов",
            "id_7": "Михайлов",
            "id_8": "Даниилов",
            "id_9": "Андреев"
        }
    }`,*/
    months:`{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря" 
        }
    }`,
    days:`{
        "count": 31,
        "list": {
            "id_1": "Первого",
            "id_2": "Второго",
            "id_3": "Третьго",
            "id_4": "Четвертого",
            "id_5": "Пятого",
            "id_6": "Шестого",
            "id_7": "Седьмого",
            "id_8": "Восьмого",
            "id_9": "Девятого",
            "id_10": "Десятого" ,
            "id_11": "Одинадцатого",
            "id_12": "Двенадцатого",
            "id_13": "Тринадцатого",
            "id_14": "Четырнадцатого",
            "id_15": "Пятнадцатого",
            "id_16": "Шеснадцатого",
            "id_17": "Семнадцатого",
            "id_18": "Восемнадцатого",
            "id_19": "Девятнадцатого",
            "id_20": "Двадцатого",
            "id_21": "Двадцать Первого",
            "id_22": "Двадцать Второго",
            "id_23": "Двадцать Третьего",
            "id_24": "Двадцать Четвертого",
            "id_25": "Двадцать Пятого",
            "id_26": "Двадцать Шестого",
            "id_27": "Двадцать Седьмого",
            "id_28": "Двадцать Восьмого",
            "id_29": "Двадцать Девятого",
            "id_30": "Тридцатого",
            "id_31": "Тридцать Первого"
        }
    }`,


    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstNameMale: function() {

        return this.randomValue(this.firstNameMaleJson);

    },


    randomFirstNameFemale: function(){

        return this.randomValue(this.firstNameFemaleJson);

    },


    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },


    /*randomPatronymic: function(){

        return this.randomValue(this.patronymicJson);

    },*/


    randomGender: function(){

        var abc = Math.round(Math.random())
        if ( abc === 1 ){
            return this.GENDER_MALE
        } else {
            return this.GENDER_FEMALE
        }

    },


    randomYear: function(){

        let age11 = Math.floor(Math.random() * (2023 - 1970)) + 1970
        return age11

    },


    randomMonth: function(){

        return this.randomValue(this.months)

    },


    randomDay: function(){

        return this.randomValue(this.days)

    },


    randomMaleJob: function(){

        return this.randomValue(this.maleJobJson)

    },


    randomFemaleJob: function(){

        return this.randomValue(this.femaleJobJson)

    },


    


    getPerson: function () {
        this.person = {};

        this.person.gender = this.randomGender();
        
        // this.person.day = this.randomDay();
        this.person.year = this.randomYear();
        this.person.month = this.randomMonth();

        let dateDefault = this.randomIntNumber(31, 1);
        this.person.day = dateDefault;


        if (this.person.month === "Февраля" ){ dateDefault = this.randomIntNumber(28, 1) };
        if (this.person.month === "Апреля" || "Июня" || "Сентября" || "Ноября"){ dateDefault = this.randomIntNumber(30, 1) };
        

        if (this.person.gender === this.GENDER_FEMALE){

            this.person.surname = this.randomSurname() + "а";
            let randomPatronymic = this.randomFirstNameMale();

            if (randomPatronymic.slice(-2) === "ий"){

                this.person.patronymic = randomPatronymic.replace("ий", "иевна")

            } else if (randomPatronymic.slice(-2) === "ей"){

                this.person.patronymic = randomPatronymic.replace("ей", "еевна")

            } else if (randomPatronymic.slice(-2) === "ил"){

                this.person.patronymic = randomPatronymic.replace("ил", "иловна")

            } else if (randomPatronymic.slice(-3) === "ита"){

                this.person.patronymic = randomPatronymic.replace("ита", "итична")

            } else {

                this.person.patronymic = randomPatronymic + "овна";

            };

            this.person.firstName = this.randomFirstNameFemale();
            this.person.job = this.randomFemaleJob();
            

        } else {

            this.person.surname = this.randomSurname();
            this.person.firstName = this.randomFirstNameMale();
            let randomPatronymic = this.randomFirstNameMale();

            if (randomPatronymic.slice(-2) === "ий"){

                this.person.patronymic = randomPatronymic.replace("ий", "иевич")

            } else if (randomPatronymic.slice(-2) === "ей"){

                this.person.patronymic = randomPatronymic.replace("ей", "еевич")

            } else if (randomPatronymic.slice(-3) === "ита"){

                this.person.patronymic = randomPatronymic.replace("ита", "итич")

            } else {

                this.person.patronymic = randomPatronymic + "ович";
                
            };

            this.person.job = this.randomMaleJob();
        
        
        }
    

        return this.person;
    },
    
}
