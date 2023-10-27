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
  let inputValue = newPrice.value;
  inputValue = inputValue.replace(/,/g, "");

  if (!isNaN(inputValue)) {
    newPrice.value = formatWithCommas(inputValue);
  } else {
    newPrice.value = "";
  }
});

// 쉼표를 추가하는 함수를 정의합니다.
function formatWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

submitButton.addEventListener("click", function () {
  let category = categorySelect.value;
  let price = newPrice.value.replace(/,/g, "");
  let content = newContent.value;

  if (price === "" || content === "") {
    alert("입력하지 않은 항목이 있습니다!");
  } else {
    let transaction = {
      category: category,
      price: parseInt(price),
      content: content,
    };
    console.log(transaction);
    HISTORY_LIST.push(transaction);
    filter_history();

    total_income = // Calculate total income
      total_outcome = // Calculate total outcome
      total_money =
        total_income + total_outcome;
    total.textContent = `${total_money.toLocaleString()}원`;
    income.textContent = `+${total_income.toLocaleString()}`;
    outcome.textContent = `${total_outcome.toLocaleString()}`;

    alert("등록 성공!");
  }
});

const initial_list = document.querySelector(".list-real");
const addModal = document.querySelector(".add_modal");
let transactions = [];
let transaction = { category: "", content: "", price: null };
transactions.push(transaction);

const modalBackground = document.createElement("div");
modalBackground.classList.add("modal-background");

const addButton = document.querySelector(".add_list");
addButton.addEventListener("click", function () {
  addModal.style.transform = "translateY(-80%)";
  modalBackground.style.display = "block";
  document.body.appendChild(modalBackground);
  const categories = JSON.parse(localStorage.getItem("categories"));
  const incomeCategories = categories.income;
  // 기존의 옵션을 모두 제거합니다.
  while (categorySelect.firstChild) {
    categorySelect.removeChild(categorySelect.firstChild);
  }
  incomeCategories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.text = category;
    categorySelect.appendChild(newOption);
  });

  const outcomeCategories = categories.outcome;
  outcomeCategories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.text = category;
    categorySelect.appendChild(newOption);
  });
});

const closeButton = document.querySelector(".closeModal");
closeButton.addEventListener("click", function () {
  addModal.style.transform = "translateY(100%)";
  // addModal.style.display = "none";
  modalBackground.style.display = "none";
});
const incomeModalButton = document.querySelector(".incomeModalButton");
const outcomeModalButton = document.querySelector(".outcomeModalButton");
const categorySelect = document.querySelector(".category_option");
incomeModalButton.addEventListener("click", modal_income_button);
outcomeModalButton.addEventListener("click", modal_outcome_button);
function modal_income_button() {
  incomeModalButton.style.background = "salmon";
  outcomeModalButton.style.background = "white";
  // 로컬 스토리지에서 수입 카테고리를 읽어옵니다.
  const categories = JSON.parse(localStorage.getItem("categories"));
  const incomeCategories = categories ? categories.income : [];
  categorySelect.innerHTML = "";

  // 드롭다운을 업데이트합니다.
  categorySelect.innerHTML = incomeCategories
    .map(
      (category) => `
    <option value="${category}">${category}</option>
  `
    )
    .join("");

  console.log(categorySelect);
}
function modal_outcome_button() {
  incomeModalButton.style.background = "white";
  outcomeModalButton.style.background = "salmon";
  const categories = JSON.parse(localStorage.getItem("categories"));
  const outcomeCategories = categories ? categories.outcome : [];
  categorySelect.innerHTML = "";

  // 드롭다운을 업데이트합니다.
  categorySelect.innerHTML = outcomeCategories
    .map(
      (category) => `
    <option value="${category}">${category}</option>
  `
    )
    .join("");
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
const home = document.querySelector(".home");
const categoryButton = document.querySelector(".category_list");
const returnHomeButton = document.querySelector(".return_home");
const categoryPage = document.querySelector(".category_page");
categoryButton.addEventListener("click", function () {
  home.style.display = "none";
  returnHomeButton.style.display = "block";
  categoryPage.style.display = "block";
  addButton.style.display = "none";
  addModal.style.display = "none";
});
returnHomeButton.addEventListener("click", function () {
  home.style.display = "block";
  returnHomeButton.style.display = "none";
  categoryPage.style.display = "none";
  addButton.style.display = "block";
  addModal.style.display = "block";
});

const INITIAL_CATEGORIES = {
  income: ["용돈", "월급"],
  outcome: ["쇼핑", "식비"],
};

// 이 초기 카테고리를 localStorage에 저장합니다.
if (!localStorage.getItem("categories")) {
  // 초기 카테고리 데이터를 로컬 스토리지에 설정
  localStorage.setItem("categories", JSON.stringify(INITIAL_CATEGORIES));
}
const initialCategories = JSON.parse(localStorage.getItem("categories"));

// 페이지 렌더링 시 카테고리를 표시합니다.
displayCategories(initialCategories.income, "incomeCategories");
displayCategories(initialCategories.outcome, "outcomeCategories");

// 새 카테고리를 추가하는 함수
function addCategory(newCategory, categoryType) {
  // localStorage에서 현재 카테고리 목록을 가져옵니다.
  const categories = JSON.parse(localStorage.getItem("categories"));

  // 새 카테고리를 추가합니다.
  categories[categoryType].push(newCategory);

  // localStorage를 업데이트합니다.
  localStorage.setItem("categories", JSON.stringify(categories));

  // 입력 필드 초기화
  newCategoryInput.value = "";

  // 카테고리 다시 표시
  displayCategories(categories.income, "incomeCategories");
  displayCategories(categories.outcome, "outcomeCategories");

  const newOption = document.createElement("option");
  newOption.value = newCategory;
  newOption.text = newCategory;
  categorySelect.appendChild(newOption);
}

// 카테고리를 표시하는 함수
function displayCategories(categories, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("category_ul");
  categories.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add("category_li");
    li.textContent = category;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

// "새 카테고리 입력" 필드에 이벤트 리스너 추가
const newCategoryInput = document.getElementById("newCategoryInput");
newCategoryInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && newCategoryInput.value.trim() !== "") {
    const newCategory = newCategoryInput.value;
    const categoryType = "income"; // 필요에 따라 설정
    addCategory(newCategory, categoryType);
  }
});

// "새 카테고리 출력" 필드에 이벤트 리스너 추가
const newCategoryOutput = document.getElementById("newCategoryOutput");
newCategoryOutput.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && newCategoryOutput.value.trim() !== "") {
    const newCategory = newCategoryOutput.value;
    const categoryType = "outcome"; // 필요에 따라 설정
    addCategory(newCategory, categoryType);
  }
});

function removeCategory(categoryToRemove, categoryType) {
  // localStorage에서 현재 카테고리 목록을 가져옵니다.
  const categories = JSON.parse(localStorage.getItem("categories"));

  // 특정 카테고리 배열에서 항목 삭제
  const index = categories[categoryType].indexOf(categoryToRemove);
  if (index !== -1) {
    categories[categoryType].splice(index, 1);
  }

  // localStorage를 업데이트합니다.
  localStorage.setItem("categories", JSON.stringify(categories));
}
removeCategory("산하", "income");

console.log(localStorage.getItem("categories"));
