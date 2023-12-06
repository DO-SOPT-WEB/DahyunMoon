import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import AnswerButton from "../components/AnswerButton";

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

export default Page3;

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
