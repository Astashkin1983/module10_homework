var today = prompt("Какой сейчас год", "");
var birthday = prompt("В каком году вы родились?", "");
var age = today - birthday;
alert(typeof age);
if (typeof age === "number") {
  alert(age + ' принадлежит к множеству "Number"');
} else {
  alert("Упс, кажется вы ошиблись!");
}
if (isNaN(age % 2)) {
  alert("Ошибка, введено НЕ ЧИСЛО");
} else if (age % 2 === 0) {
  alert(
    "В " +
      today +
      " году Вам исполняется чётное количество лет, а именно - " +
      age +
      " лет"
  );
} else {
  alert(
    "В " +
      today +
      " году Вам исполняется нечётное количество лет, а именно - " +
      age +
      " лет"
  );
}
