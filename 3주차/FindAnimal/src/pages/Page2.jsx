import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import AnswerButton from "../components/AnswerButton";

function Page2({ goBack, goForward }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonActive(option != null);
  };

  const handleGoForward = () => {
    // 다음 페이지로 이동할 때 선택한 옵션을 전달
    goForward(selectedOption);
  };

  return (
    <div>
      <Header header="나와 닮은 동물은?" />
      <Group>
        <TextBox>물놀이 좋아해??</TextBox>
        <div className="question-box">
          <AnswerButton
            answer="웅!!"
            onClick={() => handleOptionChange("웅!")}
          />
          <AnswerButton
            answer="반반"
            onClick={() => handleOptionChange("반반")}
          />
          <AnswerButton
            answer="아니ㅠ"
            onClick={() => handleOptionChange("아니ㅠ")}
          />
        </div>
        <div>
          <span>
            <NavigateButton onClick={goBack}>back</NavigateButton>{" "}
          </span>
          <span>
            <NavigateButton onClick={handleGoForward} disabled={!buttonActive}>
              next
            </NavigateButton>{" "}
          </span>
        </div>
      </Group>
    </div>
  );
}

export default Page2;

const Group = styled.div`
  background-color: #d1eaf0;
  width: 80vw;
  height: 60vh;
  border-radius: 0.5rem;
`;

const TextBox = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
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
