import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MyPage() {
  let { userId } = useParams();
  console.log(userId);
  return <MainBox>{userId}</MainBox>;
}

const MainBox = styled.main`
  width: 50vw;
  height: 50vh;
  border-radius: 1rem;
  background-color: #fbecfb;

  position: relative;

  padding: 1rem 2rem;
`;
