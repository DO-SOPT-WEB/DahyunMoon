import React from "react";
import styled from "styled-components";
import theme from "../style/theme";
import { NavigateButton } from "../style/commonStyle";

const Header = ({ header, restartPage0, showPage }) => {
  return (
    <St.Header>
      <St.Text>{header} </St.Text>{" "}
      {showPage !== 0 && (
        <NavigateButton onClick={restartPage0}>처음으로</NavigateButton>
      )}
    </St.Header>
  );
};

export default Header;

const St = {
  Header: styled.div`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.darkBlue};
    margin: 3rem 0;
    border-radius: 0.5rem;
    font-size: 2rem;
    height: 4rem;
    line-height: 4rem;
    font-weight: bold;
    width: 80vw;
  `,
  Text: styled.span`
    margin-right: 1rem;
  `,
};
