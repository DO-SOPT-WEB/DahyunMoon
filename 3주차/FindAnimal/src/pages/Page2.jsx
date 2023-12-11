import { useState } from "react";
import {
  AnswerButton,
  TextBox,
  Group,
  QuestionBox,
  NavigateButton,
} from "../style/commonStyle";

function Page2({ goBack, goForward }) {
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
        <TextBox>물놀이 좋아해??</TextBox>
        <QuestionBox>
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
        </QuestionBox>
        <div>
          <span>
            <NavigateButton onClick={goBack}>back</NavigateButton>
          </span>
          <span>
            <NavigateButton onClick={handleGoForward} disabled={!buttonActive}>
              next
            </NavigateButton>
          </span>
        </div>
      </Group>
    </div>
  );
}

export default Page2;
