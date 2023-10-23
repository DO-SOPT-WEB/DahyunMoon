const INIT_BALANCE = 0;
const HISTORY_LIST = [
  { category: "보험", content: "농협손보지급", price: 103400 },
  { category: "교통", content: "신한체크쿄통", price: -29300 },
  { category: "출금", content: "산하 후드티", price: -77000 },
  { category: "입금", content: "꼰떼넨떼더광교", price: 277056 },
];

const list_real = document.querySelector(".list-real");
const income = document.querySelector(".income");
const outcome = document.querySelector(".outcome");
const total = document.querySelector(".total");

let total_income = 0;
let total_outcome = 0;

HISTORY_LIST.forEach((item) => {
  const ul = document.createElement("ul");
  ul.classList.add("list-indiv");

  const category_li = document.createElement("li");
  category_li.classList.add("category");
  category_li.textContent = item.category;

  const content_li = document.createElement("li");
  content_li.classList.add("content");
  content_li.textContent = item.content;

  const price_li = document.createElement("li");
  price_li.classList.add("price");
  price_li.textContent =
    item.price < 0 ? `${item.price}원` : `+${item.price}원`;
  if (item.price < 0) {
    price_li.style.color = "blue";
    total_outcome += item.price;
  } else {
    price_li.style.color = "red";
    total_income += item.price;
  }

  list_real.appendChild(ul);
  ul.appendChild(category_li);
  ul.appendChild(content_li);
  ul.appendChild(price_li);
});
total.textContent = `${total_income - total_outcome}원`;
income.textContent = `+${total_income}`;
outcome.textContent = `${total_outcome}`;
