import { useState } from "react";
import {
  AnswerButton,
  TextBox,
  Group,
  QuestionBox,
  NavigateButton,
} from "../style/commonStyle";

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
      <Group>
        <TextBox>귀엽다는 말 들어본 적 있어?</TextBox>
        <QuestionBox>
          <AnswerButton
            answer="응!!"
            onClick={() => handleOptionChange("웅!")}
          />
          <AnswerButton
            answer="아니."
            onClick={() => handleOptionChange("아니ㅠ")}
          />
        </QuestionBox>
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
