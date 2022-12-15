const counterValue = document.querySelector("#value");
let valueEl = 0;

const decrementBtnRaf = document.querySelector('[data-action="decrement"]');
const incrementBtnRaf = document.querySelector('[data-action="increment"]');

decrementBtnRaf.addEventListener("click", onClickDecrement);
incrementBtnRaf.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  valueEl -= 1;
  counterValue.textContent = valueEl;
}

function onClickIncrement() {
  valueEl += 1;
  counterValue.textContent = valueEl;
}

decrementBtnRaf.style.backgroundColor = "#e88989";
incrementBtnRaf.style.backgroundColor = "#89e897";

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
