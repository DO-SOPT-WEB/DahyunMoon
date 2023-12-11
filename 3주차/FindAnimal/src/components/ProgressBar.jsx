import React from "react";
import styled from "styled-components";
import theme from "../style/theme";

const ProgressBar = ({ currentPage, totalPages }) => {
  const progress = (currentPage / (totalPages - 1)) * 100;

  return <St.Bar progress={progress} />;
};

export default ProgressBar;

const St = {
  Bar: styled.div`
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    margin: 2rem 0;
    border-radius: 0.5rem;
    font-size: 2rem;
    height: 1.5rem;
    line-height: 4rem;
    font-weight: bold;
    width: ${(props) => props.progress}%;
  `,
};
