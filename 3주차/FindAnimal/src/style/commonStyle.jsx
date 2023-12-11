import styled from "styled-components";
import theme from "./theme";

export const AnswerButton = ({ answer, onClick, active }) => {
  return (
    <St.Button onClick={onClick} active={active}>
      {answer}
    </St.Button>
  );
};

export const Group = styled.div`
  background-color: #a7ddf3;
  width: 80vw;
  height: 60vh;
  border-radius: 0.5rem;
`;

export const QuestionBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const TextBox = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const NavigateButton = styled.button`
  width: 6rem;
  height: 2rem;
  border-radius: 3rem;
  background-color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
  &:disabled {
    background-color: ${theme.colors.gray};
  }
`;

const St = {
  Button: styled.button`
    width: 15rem;
    height: 15rem;
    border-radius: 3rem;
    margin: 3rem 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.darkBlue};
    }
  `,
};
