const topButton = document.querySelector('.top-button');

// 페이지를 스크롤할 때 이벤트를 수신하여 Top 버튼의 불투명도를 조절합니다.
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const opacity = Math.min(1, scrollPosition / 300); // 스크롤 위치에 따라 불투명도를 조절
    topButton.style.opacity = opacity.toString();
});

// Top 버튼을 클릭할 때 페이지 상단으로 스크롤합니다.
topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 부드러운 스크롤
});