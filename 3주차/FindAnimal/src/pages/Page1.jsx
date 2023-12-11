import { useState } from "react";
import Header from "../components/common/Header";
import styled from "styled-components";
import AnswerButton from "../components/common/AnswerButton";
import TextBox from "../components/common/TextBox";
import Group from "../components/common/Group";

function Page1({ goBack, goForward }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonActive(option !== null);
  };

  console.log(selectedOption);

  return (
    <>
      <Header header="나와 닮은 동물은?" />
      <Group>
        <TextBox>보통 쉬는 날 집에 있어??</TextBox>
        <div className="question-box">
          <AnswerButton
            answer="응!!"
            onClick={() => {
              handleOptionChange("웅!");
            }}
          />
          <AnswerButton
            answer="반반"
            onClick={() => handleOptionChange("반반")}
          />
          <AnswerButton
            answer="밖에 나가!!"
            onClick={() => handleOptionChange("아니ㅠ")}
          />
        </div>
        <div>
          <span>
            <NavigateButton onClick={goBack}>back</NavigateButton>
          </span>
          <span>
            <NavigateButton
              onClick={() => goForward(selectedOption)}
              disabled={!buttonActive}
            >
              next
            </NavigateButton>
          </span>
        </div>
      </Group>
    </>
  );
}

export default Page1;

const NavigateButton = styled.button`
  background-color: white;
  &:hover {
    background-color: #6495ed;
  }
  &:disabled {
    background-color: gray;
  }
`;
