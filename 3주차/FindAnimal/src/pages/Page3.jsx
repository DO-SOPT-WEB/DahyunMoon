import { useState } from "react";
import Header from "../components/common/Header";
import styled from "styled-components";
import AnswerButton from "../components/common/AnswerButton";
import TextBox from "../components/common/TextBox";
import Group from "../components/common/Group";

function Page3({ goBack, goForward }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonActive(option != null);
  };

  const handleGoForward = () => {
    goForward(selectedOption);
  };

  return (
    <div>
      <Header header="나와 닮은 동물은?" />
      <Group>
        <TextBox>귀엽다는 말 들어본 적 있어?</TextBox>
        <div className="question-box">
          <AnswerButton
            answer="응!!"
            onClick={() => handleOptionChange("웅!")}
          />
          <AnswerButton
            answer="아니."
            onClick={() => handleOptionChange("아니ㅠ")}
          />
        </div>
        <div>
          <span>
            <NavigateButton onClick={goBack}>back</NavigateButton>{" "}
          </span>
          <span>
            <NavigateButton onClick={handleGoForward} disabled={!buttonActive}>
              결과보기
            </NavigateButton>
          </span>
        </div>
      </Group>
    </div>
  );
}

export default Page3;

const NavigateButton = styled.button`
  background-color: white;
  &:hover {
    background-color: #6495ed;
  }
  &:disabled {
    background-color: gray;
  }
`;
