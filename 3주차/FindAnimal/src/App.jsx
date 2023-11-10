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

  const goPage1 = (option) => {
    setShowPage1(false);
    setShowPage2(true);
    setSelectedOptions([...selectedOptions, option]);
  };

  const goPage2 = (option) => {
    setShowPage2(false);
    setShowPage3(true);
    setSelectedOptions([...selectedOptions, option]);
  };

  const goPage3 = (option) => {
    setShowPage3(false);
    setShowPage4(true);
    setSelectedOptions([...selectedOptions, option]);
  };
  const A = "웅!";
  const B = "반반";
  const C = "아니ㅠ";
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
      {showPage1 && <Page1 goPage1={goPage1} />}
      {showPage2 && <Page2 goPage2={goPage2} />}
      {showPage3 && <Page3 goPage3={goPage3} />}
      {showPage4 && (
        <Page4 selectedOptions={selectedOptions} animalData={animalData} />
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
  const [countdown, setCountdown] = useState(3);
  const [displayAnimal, setDisplayAnimal] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      const randomAnimalIndex = Math.floor(Math.random() * animalData.length);
      setDisplayAnimal(animalData[randomAnimalIndex].animal);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [animalData]);

  return (
    <Group>
      {displayAnimal !== null ? (
        <p>{displayAnimal}</p>
      ) : (
        <p>{countdown > 0 ? countdown : "랜덤 동물이 표시됩니다..."}</p>
      )}
    </Group>
  );
}

function Page1({ goPage1 }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePage2 = () => {
    if (selectedOption !== null) {
      goPage1(selectedOption);
    } else {
      alert("동물을 선택해주세요.");
    }
  };

  return (
    <div>
      <Header>나와 닮은 동물은?</Header>
      <Group>
        보통 쉬는 날 집에 있어??
        <div className="question-box">
          <Question onClick={() => handleOptionChange("웅!")}> 응!!</Question>
          <Question onClick={() => handleOptionChange("반반")}> 반반</Question>
          <Question onClick={() => handleOptionChange("아니ㅠ")}>
            {" "}
            밖에 나가!!
          </Question>
        </div>
        <div>
          <span>
            <button>back</button>{" "}
          </span>
          <span>
            <button onClick={handlePage2}>next</button>{" "}
          </span>
        </div>
      </Group>
    </div>
  );
}

function Page2({ goPage2 }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePage3 = () => {
    if (selectedOption !== null) {
      goPage2(selectedOption);
    } else {
      alert("동물을 선택해주세요.");
    }
  };

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
            <button>back</button>{" "}
          </span>
          <span>
            <button onClick={handlePage3}>next</button>{" "}
          </span>
        </div>
      </Group>
    </div>
  );
}

function Page3({ goPage3 }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePage3 = () => {
    if (selectedOption !== null) {
      goPage3(selectedOption);
    } else {
      alert("동물을 선택해주세요.");
    }
  };

  return (
    <div>
      <Header>나와 닮은 동물은?</Header>
      <Group>
        귀엽다는 말 들어본 적 있어?
        <div className="question-box">
          <Question onClick={() => handleOptionChange("웅!")}> 응!!</Question>
          <Question onClick={() => handleOptionChange("반반")}> 반반</Question>
          <Question onClick={() => handleOptionChange("아니ㅠ")}>
            {" "}
            아니.
          </Question>
        </div>
        <div>
          <span>
            <button>back</button>{" "}
          </span>
          <span>
            <button onClick={handlePage3}>결과보기</button>{" "}
          </span>
        </div>
      </Group>
    </div>
  );
}

function Page4({ selectedOptions, animalData }) {
  function getMatchingAnimal(selectedOptions) {
    // 선택한 옵션 배열과 일치하는 동물 데이터 찾기
    const matchingAnimalData = animalData.find((data) =>
      data.answer.every((option) => selectedOptions.includes(option))
    );

    return matchingAnimalData ? matchingAnimalData.animal : "알 수 없음";
  }
  const matchingAnimal = getMatchingAnimal(selectedOptions);
  console.log(selectedOptions);
  return (
    <div>
      끝!
      <Group>
        <p>선택한 동물: {matchingAnimal}</p>
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
