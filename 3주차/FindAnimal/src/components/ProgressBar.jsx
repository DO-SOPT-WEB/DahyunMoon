import React from "react";
import styled from "styled-components";
import theme from "../style/theme";

const ProgressBar = ({ currentPage, totalPages }) => {
  const progress = (currentPage / (totalPages - 1)) * 100;

  return (
    (progress === 25 || progress === 50 || progress === 75) && (
      <St.Bar progress={progress} />
    )
  );
};

export default ProgressBar;

const St = {
  Bar: styled.hr`
    background-color: ${theme.colors.darkBlue};
    margin: 2rem 0;
    border-radius: 0.5rem;
    width: ${(props) => props.progress}%;
    height: 1.5rem;
  `,
};
