const INIT_BALANCE = 0;
const HISTORY_LIST = [
  { category: "보험", content: "농협손보지급", price: 103400 },
  { category: "교통", content: "신한체크쿄통", price: -29300 },
  { category: "출금", content: "산하 후드티", price: -77000 },
  { category: "입금", content: "꼰떼넨떼더광교", price: 277056 },
];

const incomeButton = document.querySelector(
  "input[type=checkbox][value='income']"
);
const outcomeButton = document.querySelector(
  "input[type=checkbox][value='outcome']"
);

const submitButton = document.querySelector(".submitButton");
const newPrice = document.querySelector(".new_price");
const newContent = document.querySelector(".new_content");
const YesCancel = document.querySelector(".cancel_yes");
const NoCancel = document.querySelector(".cancel_no");

// newPrice.addEventListener("input", function () {
//   // 쉼표를 추가한 형식으로 값을 업데이트합니다.
//   if (!isNaN(newPrice.value) || newPrice.value == "") {
//     let inputValue = newPrice.value;
//     inputValue = parseInt(inputValue.replace(/,/g, ""));
//     newPrice.value = formatWithCommas(inputValue);
//   } else {
//     newPrice.value = "";
//   }
// });

newPrice.addEventListener("input", function () {
  // 현재 입력 값을 가져옴
  let inputValue = newPrice.value;

  // 숫자에서 쉼표를 제거
  inputValue = inputValue.replace(/,/g, "");

  // 숫자가 유효한지 확인
  if (!isNaN(inputValue)) {
    // 숫자를 다시 포맷팅
    newPrice.value = formatWithCommas(inputValue);
  } else {
    // 유효하지 않은 숫자인 경우 입력 필드를 비움
    newPrice.value = "";
  }
});

// 쉼표를 추가하는 함수를 정의합니다.
function formatWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

submitButton.addEventListener("click", function () {
  if (categorySelect.value == "pin") {
    transaction.category = "용돈";
    transaction.price = parseFloat(newPrice.replace(/,/g, ""));
  }
  if (categorySelect.value == "salary") {
    transaction.category = "월급";
    transaction.price = parseFloat(newPrice.replace(/,/g, ""));
  }
  if (categorySelect.value == "shopping") {
    transaction.category = "쇼핑";
    transaction.price = parseFloat(newPrice.replace(/,/g, ""));
  }
  if (categorySelect.value == "food") {
    transaction.category = "식비";
    transaction.price = parseFloat(newPrice.replace(/,/g, ""));
  }

  transaction.content = newContent.value;

  console.log(transaction);
  if (typeof transaction.price !== "number" || isNaN(transaction.price)) {
    alert("금액을 숫자로 입력해주세요!");
  } else if (
    transaction.content === "" ||
    transaction.category === "" ||
    transaction.price === ""
  ) {
    alert("입력하지 않은 항목이 있습니다!");
  } else {
    HISTORY_LIST.push(transaction);
    filter_history();
    total_money = total_income + total_outcome;
    total.textContent = `${total_money.toLocaleString()}원`;
    income.textContent = `+${total_income.toLocaleString()}`;
    outcome.textContent = `${total_outcome.toLocaleString()}`;
    console.log(total_income, total_outcome.toLocaleString());
    alert("등록 성공!");
  }
});

const initial_list = document.querySelector(".list-real");
const addModal = document.querySelector(".add_modal");
let transactions = [];
let transaction = { category: "", content: "", price: null };
transactions.push(transaction);
const addButton = document.querySelector(".add_list");
addButton.addEventListener("click", function () {
  addModal.style.transform = "translateY(-85%)";
  addModal.style.display = "block";
});
const closeButton = document.querySelector(".closeModal");
closeButton.addEventListener("click", function () {
  addModal.style.transform = "translateY(15%)";
  addModal.style.display = "block";
});
const incomeModalButton = document.querySelector(".incomeModalButton");
const outcomeModalButton = document.querySelector(".outcomeModalButton");
const categorySelect = document.querySelector(".category_option");
incomeModalButton.addEventListener("click", modal_income_button);
outcomeModalButton.addEventListener("click", modal_outcome_button);
function modal_income_button() {
  incomeModalButton.style.background = "salmon";
  outcomeModalButton.style.background = "white";
  categorySelect.innerHTML = `      <option value="pin">용돈</option>
  <option value="salary">월급</option>`;
}
function modal_outcome_button() {
  incomeModalButton.style.background = "white";
  outcomeModalButton.style.background = "salmon";
  categorySelect.innerHTML = `      <option value="shopping">쇼핑</option>
  <option value="food">식비</option>`;
}

function filter_history() {
  const show_income = incomeButton.checked;
  const show_outcome = outcomeButton.checked;

  const filtered_list = filter_item(show_income, show_outcome);
  show_list(filtered_list);
}

function filter_item(show_income, show_outcome) {
  return HISTORY_LIST.filter((item) => {
    //return 없으면 반환안함
    if (show_income && show_outcome) {
      return true;
    }
    if (show_income) return item.price > 0;
    if (show_outcome) return item.price < 0;
    return false;
  });
}

const cancel_modal = document.querySelector(".cancel_modal");

incomeButton.addEventListener("change", filter_history);
outcomeButton.addEventListener("change", filter_history);

let total_income = 0;
let total_outcome = 0;
let total_money = null;
const total = document.querySelector(".total");
const income = document.querySelector(".income");
const outcome = document.querySelector(".outcome");
function show_list(history_list) {
  initial_list.innerHTML = ""; // 이전 내역 지우기
  total_money = null;
  total_income = 0;
  total_outcome = 0;
  const list_real = document.querySelector(".list-real");

  history_list.forEach((item) => {
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("x");
    cancelButton.textContent = "x";
    cancelButton.addEventListener("click", function () {
      cancel_modal.style.display = "block";
      const listItem = this.parentNode;
      YesCancel.addEventListener("click", function handler() {
        console.log(listItem);
        const removeItem = history_list.find((x) => x.content == item.content);
        console.log(removeItem);
        if (removeItem.price > 0) {
          total_income -= removeItem.price;
        }
        if (removeItem.price < 0) {
          total_outcome -= removeItem.price;
        }

        total_money = total_income - total_outcome;
        total.textContent = `${total_money.toLocaleString()}원`;
        income.textContent = `+${total_income.toLocaleString()}`;
        outcome.textContent = `${total_outcome.toLocaleString()}`;
        console.log(listItem, "cn");
        listItem.remove();
        cancel_modal.style.display = "none";
        YesCancel.removeEventListener("click", handler); //중복 제거
      });
      NoCancel.addEventListener("click", function () {
        cancel_modal.style.display = "none";
      });
    });
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
      item.price < 0
        ? `${item.price.toLocaleString()}원`
        : `+${item.price.toLocaleString()}원`;
    if (item.price < 0) {
      price_li.style.color = "blue";
      total_outcome += item.price;
      // console.log(item.price, "가격");
    } else {
      price_li.style.color = "red";
      total_income += item.price;
    }

    list_real.appendChild(ul);
    ul.appendChild(cancelButton);
    ul.appendChild(category_li);
    ul.appendChild(content_li);
    ul.appendChild(price_li);
  });
  if (!total_money) {
    //필터링에 따라 값 바뀜 방지
    total_money = total_income - total_outcome;
    total.textContent = `${total_money.toLocaleString()}원`;
    income.textContent = `+${total_income.toLocaleString()}`;
    outcome.textContent = `${total_outcome.toLocaleString()}`;
  }
}

filter_history();
