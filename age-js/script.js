let year = +prompt('Введите свой возраст');
let age;

if (isNaN(year)){
    age = 'Нужно ввести цифрами! Перезагрузите страницу!';
}

else if (0 >= year){
    age = 'Загрузка: подождите пока родитесь!';
}

else if (year <= 10){
    age = 'Привет малой!';
}
else if (year <= 18){
    age = 'Здарова братан!';
}
else if (year <= 50){
    age = 'Дядя напиши мне сайт';
}
else if (year <= 80){
    age = 'Вам пора в пенсию';
}
else if (year <= 110){
    age = 'Вы еще живы?';
}
else{
    age = 'Помним и вспоминаем :('
}

alert(age);




