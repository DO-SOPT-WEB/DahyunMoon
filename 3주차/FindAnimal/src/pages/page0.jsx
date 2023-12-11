import { useState } from "react";
import AnswerButton from "../components/common/AnswerButton";
import styled from "styled-components";
import Group from "../components/common/Group";

function Page0({ startGame }) {
  const [isButton1Active, setIsButton1Active] = useState(false);
  const [isButton2Active, setIsButton2Active] = useState(false);

  const handleButton1Click = () => {
    setIsButton1Active(true);
    setIsButton2Active(false);
    console.log("hi");
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
    <Group>
      <div className="question-box">
        <AnswerButton
          answer="취향대로 추천"
          onClick={handleButton1Click}
          active={isButton1Active}
        />
        <AnswerButton
          answer="랜덤으로 추천"
          onClick={handleButton2Click}
          active={isButton2Active}
        />
      </div>
      <ClickButton onClick={handleStartGame}>시작하기</ClickButton>
    </Group>
  );
}

export default Page0;

const ClickButton = styled.button`
  background-color: #6495ed;
  color: white;
  margin: 0 1rem;
  width: 8rem;
  height: 3rem;
  font-weight: bold;
`;
