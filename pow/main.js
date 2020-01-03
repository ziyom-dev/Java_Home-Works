var x = +prompt('введите число');
var pow = +prompt('в какой степени?');
var int = x;

if (isNaN(int)) {
    alert("Вы ввели не верное значение");
}
else {
    for (i = 0; i < pow; i++) {
        int = int * x;
    }
    alert(int);
}