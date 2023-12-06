import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Page0 from "./pages/page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import PageRandom from "./pages/PageRandom";
import { ANIMAL_DATA } from "./constants/data";

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

  return (
    <>
      <Header header="나와 닮은 동물은?" />
      {showPage0 && <Page0 startGame={startGame} />}
      {showPageRandom && <PageRandom animalData={ANIMAL_DATA} />}
      {showPage1 && <Page1 goPage0={goPage0} goPage2={goPage2} />}
      {showPage2 && <Page2 goPage1={goPage1} goPage3={goPage3} />}
      {showPage3 && <Page3 goPage2={goPage2} goPage4={goPage4} />}
      {showPage4 && (
        <Page4
          selectedOptions={selectedOptions}
          animalData={ANIMAL_DATA}
          restartPage1={restartPage1}
        />
      )}
    </>
  );
}

export default App;
