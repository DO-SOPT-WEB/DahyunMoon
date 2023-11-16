import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleSignup = () => {
    axios
      .post(import.meta.env.VITE_BASE_URL + "/api/v1/members", {
        username: username,
        password: password,
        nickname: nickname,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <MainBox>
      <Header>Sign Up</Header>
      <Sections>
        <Section>
          <SectionTitle>ID</SectionTitle>
          <SectionInput
            type="text"
            value={username}
            placeholder="아이디를 입력해주세요"
            onChange={handleUsername}
          />
        </Section>
        <Section>
          <SectionTitle>PASSWORD</SectionTitle>
          <SectionInput
            type="text"
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호를 입력해주세요"
          />
        </Section>
        <Section>
          <SectionTitle>NICKNAME</SectionTitle>
          <SectionInput
            type="text"
            value={nickname}
            onChange={handleNickname}
            placeholder="닉네임을 입력해주세요"
          />
        </Section>
      </Sections>

      <Button type="submit" onClick={() => handleSignup()}>
        회원가입
      </Button>
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

const Sections = styled.section`
  width: auto;
  height: auto;

  margin: 2rem auto;
`;

const Section = styled.section`
  width: 80%;
  height: 3rem;

  display: flex;

  margin: 1rem auto;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  width: 30%;
  height: 3rem;
  text-align: left;
  padding: 0 1rem;

  line-height: 3rem;
`;

const SectionInput = styled.input`
  width: 70%;
`;

const Button = styled.button`
  width: 80%;
  height: 3rem;

  width: 80%;
  height: 3rem;

  margin: 0.5rem auto;
  border: 1px solid black;
`;
