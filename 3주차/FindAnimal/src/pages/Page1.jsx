import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import AnswerButton from "../components/AnswerButton";

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
            <NavigateButton onClick={handleGoPage1}>back</NavigateButton>{" "}
          </span>
          <span>
            <NavigateButton onClick={handleGoPage2} disabled={!buttonActive}>
              next
            </NavigateButton>{" "}
          </span>
        </div>
      </Group>
    </>
  );
}

export default Page1;

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
