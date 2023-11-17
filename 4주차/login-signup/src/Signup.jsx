import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import {
  MainBox,
  Header,
  Section,
  Sections,
  SectionInput,
  SectionTitle,
} from "./style";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [isExist, setIsExist] = useState(false);

  const [isNotFull, setIsNotFull] = useState(true);

  const [buttonColor, setButtonColor] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
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
        alert("회원가입 성공");
        navigate("../login");
      })
      .catch((error) => {
        console.log("An error occurred");
      });
  };

  const handleIdisExist = () => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "/api/v1/members/check", {
        params: { username: username },
      })
      .then((response) => {
        setIsExist(response.data.isExist);
        if (response.data.isExist) setButtonColor("red");
        else setButtonColor("green");
        console.log("d");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setButtonColor("black");
    console.log(buttonColor);
  }, [username]);

  useEffect(() => {
    if (
      !isExist &&
      password != "" &&
      password === passwordAgain &&
      nickname != ""
    ) {
      setIsNotFull(false);
    } else {
      setIsNotFull(true);
    }
  }, [isExist, password, passwordAgain, nickname]);

  return (
    <MainBox>
      <Header>Sign Up</Header>
      <Sections>
        <Section>
          <SectionTitle>ID</SectionTitle>
          <SectionInputId
            type="text"
            value={username}
            placeholder="아이디를 입력해주세요"
            onChange={handleUsername}
          />
          <SectionInputExistButton
            onClick={() => {
              handleIdisExist();
            }}
            style={{ backgroundColor: `${buttonColor} ` }}
          >
            중복체크
          </SectionInputExistButton>
        </Section>
        <Section>
          <SectionTitle>비밀번호</SectionTitle>
          <SectionInput
            type="text"
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호를 입력해주세요"
          />
        </Section>
        <Section>
          <SectionTitle>비밀번호 확인</SectionTitle>
          <SectionInput
            type="text"
            value={passwordAgain}
            onChange={handlePasswordAgain}
            placeholder="비밀번호를 다시 한 번 입력해주세요"
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

      <Button type="submit" disabled={isNotFull} onClick={() => handleSignup()}>
        회원가입
      </Button>
    </MainBox>
  );
}

const SectionInputId = styled.input`
  width: 50%;
`;

const SectionInputExistButton = styled.button`
  margin-left: 0.5rem;
  width: 20%;
  font-size: 0.9rem;
  background-color: black;
  color: white;
`;

const Button = styled.button`
  width: 80%;
  height: 3rem;

  width: 80%;
  height: 3rem;

  margin: 0.5rem auto;
  border: 1px solid black;

  background-color: ${(props) => (props.disabled ? "#ccc" : "black")};
  color: ${(props) => (props.disabled ? "#666" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
