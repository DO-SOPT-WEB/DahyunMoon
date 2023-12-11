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
    margin: 2rem 0;
    border-radius: 0.5rem;
    width: ${(props) => props.progress}%;
  `,
};
