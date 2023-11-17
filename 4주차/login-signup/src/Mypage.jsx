import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { MainBox, Header } from "./style";

export default function MyPage() {
  let { userId } = useParams();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

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
      <Infos>
        <ProfileImg src="/profile.JPG" />
        <InfoText>
          <Info>ID : {username}</Info>
          <Info>NICKNAME : {nickname}</Info>
        </InfoText>
      </Infos>
      <Link to="../../login">
        <button>로그아웃</button>
      </Link>
    </MainBox>
  );
}

const Infos = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 1px solid black;
`;

const Info = styled.div`
  font-weight: bold;
  height: 3rem;
  width: 10rem;
  padding: 0 1rem;

  text-align: left;

  line-height: 3rem;
`;
