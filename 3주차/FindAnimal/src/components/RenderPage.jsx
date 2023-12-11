import { useState } from "react";
import Page0 from "../pages/page0";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import PageRandom from "../pages/PageRandom";
import { ANIMAL_DATA } from "../constants/data";

const RenderPage = () => {
  const [showPage, setShowPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const startGame = (page) => {
    if (page === "page1") {
      setShowPage(1);
    } else if (page === "pageRandom") {
      setShowPage(5);
    }
  };

  const restartPage1 = () => {
    setShowPage(1);
    setSelectedOptions([]);
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
  };

  switch (showPage) {
    case 0:
      return <Page0 startGame={startGame} />;
    case 1:
      return (
        <Page1
          goBack={() => setShowPage(0)}
          goForward={(option) => {
            handleOptionSelect(option);
            setShowPage(2);
          }}
        />
      );
    case 2:
      return (
        <Page2
          goBack={() => setShowPage(1)}
          goForward={(option) => {
            handleOptionSelect(option);
            setShowPage(3);
          }}
        />
      );
    case 3:
      return (
        <Page3
          goBack={() => setShowPage(2)}
          goForward={(option) => {
            handleOptionSelect(option);
            setShowPage(4);
          }}
        />
      );
    case 4:
      return (
        <Page4
          selectedOptions={selectedOptions}
          animalData={ANIMAL_DATA}
          restartPage1={restartPage1}
        />
      );
    case 5:
      return (
        <PageRandom
          selectedOptions={selectedOptions}
          animalData={ANIMAL_DATA}
          onOptionSelect={handleOptionSelect}
        />
      );
    default:
      return null;
  }
};

export default RenderPage;
