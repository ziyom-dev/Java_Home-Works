let x, y, z, res;

x = +prompt("Введите число X");
y = +prompt("Введите число Y");
z = +prompt("Введите число Z");

if (isNaN(x && y && z)) {
    res = "Ошибка! Вы ввели недопустимое значение!"
}

else if (y < x && z > x) {
    res = "Среднее из 3 введены это - " + x;
} else if (z < x) {
    res = "Среднее из 3 введены это - " + y;
} else {
    res = "Среднее из 3 введены это - " + z;
}

alert(res);