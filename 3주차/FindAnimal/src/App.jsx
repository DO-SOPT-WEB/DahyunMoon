import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [showPage0, setShowPage0] = useState(true);
  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [showPage4, setShowPage4] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const startGame = () => {
    setShowPage0(false);
    setShowPage1(true);
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

  return (
    <>
      {showPage0 && <Page0 startGame={startGame} />}
      {showPage1 && <Page1 goPage1={goPage1} />}
      {showPage2 && <Page2 goPage2={goPage2} />}
      {showPage3 && <Page3 goPage3={goPage3} />}
      {showPage4 && <Page4 selectedOptions={selectedOptions} />}
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
        <ClickButton onClick={startGame}>시작하기</ClickButton>
      </Group>
    </>
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
          <Question>
            <input
              type="radio"
              name="answer"
              value="응!!"
              onChange={() => handleOptionChange("응!!")}
            />{" "}
            응!!
          </Question>
          <Question>
            <input
              type="radio"
              name="answer"
              value="반반"
              onChange={() => handleOptionChange("반반")}
            />{" "}
            반반
          </Question>
          <Question>
            <input
              type="radio"
              name="answer"
              value="밖에 나가!!"
              onChange={() => handleOptionChange("밖에 나가!!")}
            />{" "}
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
          <Question>
            <input
              type="radio"
              name="answer"
              value="응!!"
              onChange={() => handleOptionChange("응!!")}
            />{" "}
            응!!
          </Question>
          <Question>
            <input
              type="radio"
              name="answer"
              value="반반"
              onChange={() => handleOptionChange("반반")}
            />{" "}
            반반
          </Question>
          <Question>
            <input
              type="radio"
              name="answer"
              value="아니ㅠ"
              onChange={() => handleOptionChange("아니ㅠ")}
            />{" "}
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
          <Question>
            <input
              type="radio"
              name="answer"
              value="응!!"
              onChange={() => handleOptionChange("응!!")}
            />{" "}
            응!!
          </Question>
          <Question>
            <input
              type="radio"
              name="answer"
              value="반반"
              onChange={() => handleOptionChange("반반")}
            />{" "}
            반반
          </Question>
          <Question>
            <input
              type="radio"
              name="answer"
              value="아니."
              onChange={() => handleOptionChange("아니.")}
            />{" "}
            아니.
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

function Page4({ selectedOptions }) {
  console.log(selectedOptions);
  return <div>끝!</div>;
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
