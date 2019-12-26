let week = +prompt('Введите число от 1 до 7');
let res;
let error = "Ошибка! Нужно ввести цифру от 1 до 7! Перезапустите программу!";

if (isNaN(week)){
    res = error;
}

else if (week == "1") {
    res = "Понедельник"
}
else if (week == "2") {
    res = "Вторник"
}
else if (week == "3") {
    res = "Среда"
}
else if (week == "4") {
    res = "Четверг"
}
else if (week == "5") {
    res = "Пятница"
}
else if (week == "6") {
    res = "Субота"
}
else if (week == "7") {
    res = "Воскресенье"
}

else{
    res = error;
}

alert(res);