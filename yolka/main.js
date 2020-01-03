var y = "*";
var kolVo = +prompt('введите высоту Ёлки (не меньше 5 и не больше 20)');

if (isNaN(kolVo) || (kolVo > 20 || kolVo < 5)) {
    alert("Вы ввели не верное значение")
}
else {
    for (i = 0; i < kolVo; i++) {
        console.log(y);
        y = y + "*";
    }
}