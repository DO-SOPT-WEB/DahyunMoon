import { useState } from "react";
import {
  AnswerButton,
  TextBox,
  Group,
  QuestionBox,
  NavigateButton,
} from "../style/commonStyle";

function Page1({ goBack, goForward }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonActive, setButtonActive] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonActive(option !== null);
  };

  return (
    <Group>
      <TextBox>보통 쉬는 날 집에 있어??</TextBox>
      <QuestionBox>
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
      </QuestionBox>
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
  );
}

export default Page1;
