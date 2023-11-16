import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MyPage() {
  let { userId } = useParams();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  console.log(userId);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + `/api/v1/members/${userId}`
        );
        console.log("response-data", response.data);
        setUsername(response.data.username);
        setNickname(response.data.nickname);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserInfo();
  });
  return (
    <MainBox>
      <Header>MY PAGE</Header>
      <Info>ID : {username}</Info>
      <Info>NICKNAME : {nickname}</Info>
    </MainBox>
  );
}

const MainBox = styled.main`
  width: 50vw;
  height: 50vh;
  border-radius: 1rem;
  background-color: #fbecfb;

  position: relative;

  padding: 1rem 2rem;
`;

const Header = styled.header`
  font-size: 2rem;
  font-weight: bold;

  margin: 1rem auto;
`;

const Info = styled.div`
  font-weight: bold;
  height: 3rem;
  padding: 0 1rem;

  line-height: 3rem;
`;
