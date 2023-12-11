import { useState, useCallback } from "react";
import Header from "./Header";
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

  const restartPage = (page) => {
    setShowPage(page);
    setSelectedOptions([]);
  };

  const handleOptionSelect = useCallback(
    (option) => {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    },
    [setSelectedOptions]
  );

  const totalPages = 5;

  const allPage = [Page0, Page1, Page2, Page3, Page4, PageRandom];

  const navigateProps = {
    goBack: () => {
      setSelectedOptions((prevOptions) => prevOptions.slice(0, -1));
      setShowPage(showPage - 1);
    },
    goForward: (option) => {
      handleOptionSelect(option);
      setShowPage(showPage + 1);
    },
  };

  const showCurrentPage = (props) => {
    const PageComponent = allPage[showPage];
    return <PageComponent {...props} />;
  };

  return (
    <div>
      <Header
        header="나와 닮은 동물은?"
        restartPage0={restartPage}
        showPage={showPage}
      />
      {showPage === 0 && <Page0 startGame={startGame} />}

      {showPage === 1 && showCurrentPage(navigateProps)}
      {showPage === 2 && showCurrentPage(navigateProps)}
      {showPage === 3 && showCurrentPage(navigateProps)}

      {showPage === 4 && (
        <Page4
          selectedOptions={selectedOptions}
          animalData={ANIMAL_DATA}
          restartPage1={restartPage}
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
