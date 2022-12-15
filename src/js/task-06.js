// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const textInputRaf = document.querySelector("#validation-input");
const textLengthRaf = Number(textInputRaf.getAttribute("data-length"));

textInputRaf.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === textLengthRaf) {
    textInputRaf.classList.add("valid");
    textInputRaf.classList.remove("invalid");
  } else {
    textInputRaf.classList.add("invalid");
    textInputRaf.classList.remove("valid");
  }
}
