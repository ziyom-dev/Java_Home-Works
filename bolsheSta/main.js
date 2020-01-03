let x;

do {
    x = prompt("Введите число большее 100", 0);
} while (x <= 100 || isNaN(x));

alert("вы ввели число -> " + x);