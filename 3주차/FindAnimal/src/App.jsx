import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Page0 from "./pages/page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import PageRandom from "./pages/PageRandom";

function App() {
  const [showPage0, setShowPage0] = useState(true);
  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [showPage4, setShowPage4] = useState(false);
  const [showPageRandom, setShowPageRandom] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const goPage0 = (option) => goToPage(option, 0);
  const goPage1 = (option) => goToPage(option, 1);
  const goPage2 = (option) => goToPage(option, 2);
  const goPage3 = (option) => goToPage(option, 3);
  const goPage4 = (option) => goToPage(option, 4);

  const startGame = (page) => {
    if (page === "page1") {
      setShowPage0(false);
      setShowPage1(true);
    } else if (page === "pageRandom") {
      setShowPage0(false);
      setShowPageRandom(true);
    }
  };

  const restartPage1 = () => {
    setShowPage1(true);
    setShowPage0(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setSelectedOptions([]);
  };

  const goToPage = (option, page) => {
    setShowPage0(false);
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);

    switch (page) {
      case 0:
        setShowPage0(true);
        break;
      case 1:
        setShowPage1(true);
        break;
      case 2:
        setShowPage2(true);
        break;
      case 3:
        setShowPage3(true);
        break;
      case 4:
        setShowPage4(true);
        break;
    }

    setSelectedOptions([...selectedOptions, option]);
  };

  const A = "웅!";
  const C = "반반";
  const B = "아니ㅠ";
  const animalData = [
    { answer: [A, A, A], animal: "강아지", imgUrl: "/img/1.png" },
    { answer: [A, A, B], animal: "고양이", imgUrl: "/img/2.png" },
    { answer: [A, B, A], animal: "오랑우탄", imgUrl: "/img/3.png" },
    { answer: [A, B, B], animal: "쿼카", imgUrl: "./img/4.png" },
    { answer: [A, C, A], animal: "토끼", imgUrl: "./img/5.png" },
    { answer: [A, C, B], animal: "붕어", imgUrl: "./img/6.png" },
    { answer: [B, A, A], animal: "팬더", imgUrl: "./img/7.png" },
    { answer: [B, A, B], animal: "비버", imgUrl: "./img/8.png" },
    { answer: [B, B, A], animal: "얼룩말", imgUrl: "./img/9.png" },
    { answer: [B, B, B], animal: "돌고래", imgUrl: "./img/10.png" },
    { answer: [B, C, A], animal: "쥐", imgUrl: "./img/11.png" },
    { answer: [B, C, B], animal: "미어캣", imgUrl: "./img/12.png" },
    { answer: [C, A, A], animal: "용", imgUrl: "./img/13.png" },
    { answer: [C, A, B], animal: "기린", imgUrl: "./img/14.png" },
    { answer: [C, B, A], animal: "곰", imgUrl: "./img/15.png" },
    { answer: [C, B, B], animal: "펭귄", imgUrl: "./img/16.png" },
    { answer: [C, C, A], animal: "사자", imgUrl: "./img/17.png" },
    { answer: [C, C, B], animal: "오리", imgUrl: "./img/18.png" },
  ];

  return (
    <>
      <Header header="나와 닮은 동물은?" />
      {showPage0 && <Page0 startGame={startGame} />}
      {showPageRandom && <PageRandom animalData={animalData} />}
      {showPage1 && <Page1 goPage0={goPage0} goPage2={goPage2} />}
      {showPage2 && <Page2 goPage1={goPage1} goPage3={goPage3} />}
      {showPage3 && <Page3 goPage2={goPage2} goPage4={goPage4} />}
      {showPage4 && (
        <Page4
          selectedOptions={selectedOptions}
          animalData={animalData}
          restartPage1={restartPage1}
        />
      )}
    </>
  );
}

export default App;
