const topButton = document.querySelector(".top-button");

// 페이지를 스크롤할 때 이벤트를 수신하여 Top 버튼의 불투명도를 조절합니다.
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const opacity = Math.min(1, scrollPosition / 300); // 스크롤 위치에 따라 불투명도를 조절
  topButton.style.opacity = opacity.toString();
});

// Top 버튼을 클릭할 때 페이지 상단으로 스크롤합니다.
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const allEachElements = document.querySelectorAll(".each");

allEachElements.forEach((each) => {
  const hoverText = each.querySelector(".hover-text");

  hoverText.style.opacity = "0";
  each.addEventListener("mouseenter", () => {
    hoverText.style.opacity = "1";
  });

  each.addEventListener("mouseleave", () => {
    hoverText.style.opacity = "0";
  });
});
//each안에 호버
//호버안에 더보기

// 선택자를 사용하여 모든 더보기 버튼을 가져옵니다.
const moreButtons = document.querySelectorAll(".more-button");

// 모든 더보기 버튼에 대한 이벤트 핸들러를 등록합니다.
moreButtons.forEach((moreButton) => {
  moreButton.addEventListener("click", function () {
    // 현재 클릭된 더보기 버튼의 부모 요소를 찾습니다.
    const parent = this.parentElement;

    // 부모 요소에서 해당 p 요소를 찾습니다.
    const textElement = parent.querySelector("p:nth-child(2)");

    // 말줄임표를 제거하고 전체 텍스트를 표시합니다.
    textElement.style.overflow = "initial";
    textElement.style.whiteSpace = "initial";
    textElement.style.textOverflow = "initial";
    textElement.style.webkitLineClamp = "initial";
    textElement.style.wordBreak = "initial";

    // 더보기 버튼을 숨깁니다.
    this.style.display = "none";
  });
});

const imgPreview = document.querySelector(".img-preview");
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");

// 스크롤 왼쪽 버튼을 클릭했을 때 실행되는 함수
scrollLeft.addEventListener("click", () => {
  // 가장 왼쪽 이미지로 스크롤
  imgPreview.scrollLeft = 0;
});

// 스크롤 오른쪽 버튼을 클릭했을 때 실행되는 함수
scrollRight.addEventListener("click", () => {
  // 가장 오른쪽 이미지로 스크롤
  imgPreview.scrollLeft = imgPreview.scrollWidth;
});
