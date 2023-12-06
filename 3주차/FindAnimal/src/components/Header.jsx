import React from "react";
import styled from "styled-components";

const Header = ({ header }) => {
  return <St.Header>{header}</St.Header>;
};

export default Header;

const St = {
  Header: styled.header`
    background-color: #6495ed;
    color: white;
    margin: 3rem 0;
    border-radius: 0.5rem;
    font-size: 2rem;
    height: 4rem;
    line-height: 4rem;
    font-weight: bold;
    width: 80vw;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 2rem;
  `,
};
