import styled from "styled-components";

const AnswerButton = ({ answer, onClick, active }) => {
  return (
    <St.Button onClick={onClick} active={active}>
      {answer}
    </St.Button>
  );
};

export default AnswerButton;

const St = {
  Button: styled.button`
    width: 15rem;
    height: 15rem;
    border-radius: 3rem;
    margin: 3rem 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
      background-color: #6495ed;
    }
  `,
};
