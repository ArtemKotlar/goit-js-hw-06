// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInputRaf = document.querySelector("#name-input");
const nameOutputRaf = document.querySelector("#name-output");

nameInputRaf.addEventListener("input", (event) => {
  const nameValue = event.currentTarget.value;
  nameOutputRaf.textContent = nameValue;
  if (nameValue === "") {
    nameOutputRaf.textContent = "Anonymous";
  }
});
