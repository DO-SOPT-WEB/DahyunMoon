import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [showPage0, setShowPage0] = useState(true);
  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [showPage4, setShowPage4] = useState(false);
  const [showPageRandom, setShowPageRandom] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const startGame = (page) => {
    // 인자에 따라 페이지 이동 처리
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

  const goPage0 = (option) => {
    setShowPage0(true);
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
  };

  const goPage1 = (option) => {
    setShowPage0(false);
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
    setSelectedOptions([...selectedOptions, option]);
  };

  const goPage2 = (option) => {
    setShowPage0(false);
    setShowPage1(false);
    setShowPage2(true);
    setShowPage4(false);
    setShowPage3(false);
    setSelectedOptions([...selectedOptions, option]);
  };

  const goPage3 = (option) => {
    setShowPage0(false);
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
    setShowPage4(false);
    setSelectedOptions([...selectedOptions, option]);
  };

  const goPage4 = (option) => {
    setShowPage0(false);
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(true);
    setSelectedOptions([...selectedOptions, option]);
  };
  const A = "웅!";
  const C = "반반";
  const B = "아니ㅠ";
  const animalData = [
    { answer: [A, A, A], animal: "고양이" },
    { answer: [A, A, B], animal: "강아지" },
    { answer: [A, B, A], animal: "오랑우탄" },
    { answer: [A, B, B], animal: "쿼카" },
    { answer: [A, C, A], animal: "토끼" },
    { answer: [A, C, B], animal: "붕어" },
    { answer: [B, A, A], animal: "팬더" },
    { answer: [B, A, B], animal: "비버" },
    { answer: [B, B, A], animal: "얼룩말" },
    { answer: [B, B, B], animal: "돌고래" },
    { answer: [B, C, A], animal: "쥐" },
    { answer: [B, C, B], animal: "미어캣" },
    { answer: [C, A, A], animal: "용" },
    { answer: [C, A, B], animal: "기린" },
    { answer: [C, B, A], animal: "곰" },
    { answer: [C, B, B], animal: "펭귄" },
    { answer: [C, C, A], animal: "사자" },
    { answer: [C, C, B], animal: "오리" },
  ];

  return (
    <>
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

function Page0({ startGame }) {
  const [isButton1Active, setIsButton1Active] = useState(false);
  const [isButton2Active, setIsButton2Active] = useState(false);

  const handleButton1Click = () => {
    setIsButton1Active(true);
    setIsButton2Active(false);
  };

  const handleButton2Click = () => {
    setIsButton1Active(false);
    setIsButton2Active(true);
  };

  const handleStartGame = () => {
    if (isButton1Active) {
      startGame("page1");
    } else if (isButton2Active) {
      startGame("pageRandom");
    } else {
      alert("게임을 시작하려면 옵션을 선택해주세요.");
    }
  };

  return (
    <>
      <Header>나와 닮은 동물은?</Header>
      <Group>
        <div className="question-box">
          <Question onClick={handleButton1Click} active={isButton1Active}>
            취향대로 추천
          </Question>
          <Question onClick={handleButton2Click} active={isButton2Active}>
            랜덤으로 추천
          </Question>
        </div>
        <ClickButton onClick={handleStartGame}>시작하기</ClickButton>
      </Group>
    </>
  );
}

function PageRandom({ animalData }) {
  const [displayAnimal, setDisplayAnimal] = useState(null);
  const [countdown, setCountdown] = useState(3); // 초기 카운트다운 값

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
        const randomAnimalIndex = Math.floor(Math.random() * 18);
        setDisplayAnimal(animalData[randomAnimalIndex].animal);
      }
    }, 1000);

    // 컴포넌트가 언마운트되면 타이머를 정리합니다.
    return () => clearInterval(timer);
  }, [countdown, animalData]);

  const handleRetry = () => {
    setDisplayAnimal(null);
    setCountdown(3); // 다시하기 버튼을 누를 때 카운트를 초기화합니다.
  };

  return (
    <div>
      {countdown > 0 ? (
        <Group>{countdown}</Group>
      ) : (
        <Group>{displayAnimal}</Group>
      )}
      <NavigateButton onClick={handleRetry}>다시하기</NavigateButton>
    </div>
  );
}

function Page1({ goPage2, goPage0 }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonActive(option !== null);
  };

  const handleGoPage2 = () => {
    if (selectedOption !== null) {
      goPage2(selectedOption);
    }
  };

  const handleGoPage1 = () => {
    goPage0();
  };

  console.log(selectedOption);
  return (
    <div>
      <Header>나와 닮은 동물은?</Header>
      <Group>
        보통 쉬는 날 집에 있어??
        <div className="question-box">
          <Question
            onClick={() => {
              handleOptionChange("웅!");
            }}
          >
            {" "}
            응!!
          </Question>
          <Question onClick={() => handleOptionChange("반반")}> 반반</Question>
          <Question onClick={() => handleOptionChange("아니ㅠ")}>
            {" "}
            밖에 나가!!
          </Question>
        </div>
        <div>
          <span>
            <NavigateButton onClick={handleGoPage1}>back</NavigateButton>{" "}
          </span>
          <span>
            <NavigateButton onClick={handleGoPage2} disabled={!buttonActive}>
              next
            </NavigateButton>{" "}
          </span>
        </div>
      </Group>
    </div>
  );
}

function Page2({ goPage3, goPage1 }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonActive(option != null);
  };

  const handleGoPage1 = () => {
    goPage1();
  };

  const handleGoPage3 = () => {
    if (selectedOption !== null) {
      goPage3(selectedOption);
    } else {
      alert("동물을 선택해주세요.");
    }
  };
  console.log(selectedOption);
  return (
    <div>
      <Header>나와 닮은 동물은?</Header>
      <Group>
        물놀이 좋아해??
        <div className="question-box">
          <Question onClick={() => handleOptionChange("웅!")}> 웅!!</Question>
          <Question onClick={() => handleOptionChange("반반")}> 반반</Question>
          <Question onClick={() => handleOptionChange("아니ㅠ")}>
            {" "}
            아니ㅠ
          </Question>
        </div>
        <div>
          <span>
            <NavigateButton onClick={handleGoPage1}>back</NavigateButton>{" "}
          </span>
          <span>
            <NavigateButton onClick={handleGoPage3} disabled={!buttonActive}>
              next
            </NavigateButton>{" "}
          </span>
        </div>
      </Group>
    </div>
  );
}

function Page3({ goPage4, goPage2 }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonActive(option != null);
  };

  const handleGoPage2 = () => {
    goPage2();
  };
  const handleGoPage4 = () => {
    if (selectedOption !== null) {
      goPage4(selectedOption);
    } else {
      alert("동물을 선택해주세요.");
    }
  };
  console.log(selectedOption);
  return (
    <div>
      <Header>나와 닮은 동물은?</Header>
      <Group>
        귀엽다는 말 들어본 적 있어?
        <div className="question-box">
          <Question onClick={() => handleOptionChange("웅!")}> 응!!</Question>
          <Question onClick={() => handleOptionChange("아니ㅠ")}>
            {" "}
            아니.
          </Question>
        </div>
        <div>
          <span>
            <NavigateButton onClick={handleGoPage2}>back</NavigateButton>{" "}
          </span>
          <span>
            <NavigateButton onClick={handleGoPage4} disabled={!buttonActive}>
              결과보기
            </NavigateButton>{" "}
          </span>
        </div>
      </Group>
    </div>
  );
}

function Page4({ selectedOptions, animalData, restartPage1 }) {
  function getMatchingAnimal(selectedOptions) {
    const matchingAnimalData = animalData.find(
      (data) =>
        data.answer.length === selectedOptions.length &&
        data.answer.toString() === selectedOptions.toString()
    );

    console.log("matchingAnimalData:", matchingAnimalData);

    return matchingAnimalData ? matchingAnimalData.animal : "알 수 없음";
  }
  const handleRestart = () => {
    restartPage1();
  };
  const matchingAnimal = getMatchingAnimal(selectedOptions);
  console.log(selectedOptions);

  return (
    <div>
      끝!
      <Group>
        <p>선택한 동물: {matchingAnimal}</p>
        <NavigateButton onClick={handleRestart}>다시하기</NavigateButton>
      </Group>
    </div>
  );
}

export default App;

const Header = styled.header`
  background-color: #6495ed;
  color: white;
  margin: 3rem 0;
  border-radius: 0.5rem;
  font-size: 2rem;
  height: 4rem;
  line-height: 4rem;
  font-weight: bold;
  width: 80vw;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 2rem;
`;

const Question = styled.button`
  width: 15rem;
  height: 15rem;
  border-radius: 3rem;
  margin: 3rem 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "#6495ed" : "initial")};
  color: ${(props) => (props.active ? "white" : "initial")};
  &:hover {
    background-color: #6495ed;
  }
`;

const Group = styled.div`
  background-color: #d1eaf0;
  width: 80vw;
  height: 60vh;
  border-radius: 0.5rem;
`;

const ClickButton = styled.button`
  background-color: #6495ed;
  color: white;
  margin: 0 1rem;
  width: 8rem;
  height: 3rem;
  font-weight: bold;
`;

const NavigateButton = styled.button`
  background-color: white;
  &:hover {
    background-color: #6495ed;
  }
  &:disabled {
    background-color: gray;
  }
`;
