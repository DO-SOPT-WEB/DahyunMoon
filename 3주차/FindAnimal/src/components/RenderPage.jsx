import { useState } from "react";
import Page0 from "../pages/page0";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import PageRandom from "../pages/PageRandom";
import { ANIMAL_DATA } from "../constants/data";
import ProgressBar from "./ProgressBar";

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

  const totalPages = 5;

  return (
    <div>
      {showPage === 0 && <Page0 startGame={startGame} />}
      {showPage === 1 && (
        <Page1
          goBack={() => {
            setSelectedOptions((prevOptions) => prevOptions.slice(0, -1));
            setShowPage(0);
          }}
          goForward={(option) => {
            handleOptionSelect(option);
            setShowPage(2);
          }}
        />
      )}
      {showPage === 2 && (
        <Page2
          goBack={() => {
            setSelectedOptions((prevOptions) => prevOptions.slice(0, -1));
            setShowPage(1);
          }}
          goForward={(option) => {
            handleOptionSelect(option);
            setShowPage(3);
          }}
        />
      )}
      {showPage === 3 && (
        <Page3
          goBack={() => {
            setSelectedOptions((prevOptions) => prevOptions.slice(0, -1));
            setShowPage(2);
          }}
          goForward={(option) => {
            handleOptionSelect(option);
            setShowPage(4);
          }}
        />
      )}
      {showPage === 4 && (
        <Page4
          selectedOptions={selectedOptions}
          animalData={ANIMAL_DATA}
          restartPage1={restartPage1}
        />
      )}
      {showPage === 5 && (
        <PageRandom
          selectedOptions={selectedOptions}
          animalData={ANIMAL_DATA}
          onOptionSelect={handleOptionSelect}
        />
      )}
      <ProgressBar currentPage={showPage} totalPages={totalPages} />
    </div>
  );
};

export default RenderPage;
