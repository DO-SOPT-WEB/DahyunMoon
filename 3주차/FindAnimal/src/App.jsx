import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const [showPage0, setShowPage0] = useState(true);
  const [showPage1, setShowPage1] = useState(false);

  const startGame = () => {
    setShowPage0(false);
    setShowPage1(true);
  };

  return (
    <>
      {showPage0 && <Page0 startGame={startGame} />}
      {showPage1 && <Page1 />}
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
        <div>
          <span>
            <button>back</button>{" "}
          </span>
          <span>
            {" "}
            <button>next</button>{" "}
          </span>
        </div>
      </Group>
    </>
  );
}

function Page1() {
  return (
    <div>
      <h2></h2>
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
