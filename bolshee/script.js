let x, y, z, res;

x = +prompt("Введите число X");
y = +prompt("Введите число Y");
z = +prompt("Введите число Z");

if (isNaN(x && y && z)) {
    res = "Ошибка! Вы ввели недопустимое значение!"
}

else if (y < x && z < x) {
    res = "Наибольшее число - " + x;
} else if (z < x) {
    res = "Наибольшее число - " + y;
} else {
    res = "Наибольшее число - " + z;
}

alert(res);