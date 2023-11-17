import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import {
  MainBox,
  Header,
  Section,
  Sections,
  SectionInput,
  SectionTitle,
} from "./style";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post(import.meta.env.VITE_BASE_URL + "/api/v1/members/sign-in", {
        username: username,
        password: password,
      })
      .then((response) => {
        navigate(`/mypage/${response.data.id}`);
      })
      .catch((error) => {
        setToastMessage(error.response.data.message);
        setShowToast(true);
      });
  };

  useEffect(() => {
    // 3초 후 사라짐
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const toastElement = showToast ? (
    <ToastContainer>{toastMessage}</ToastContainer>
  ) : null;

  return (
    <MainBox>
      <Header>Login</Header>
      <Sections>
        <Section>
          <SectionTitle>ID</SectionTitle>
          <SectionInput
            value={username}
            onChange={handleUserName}
            placeholder="아이디를 입력해주세요"
          />
        </Section>
        <Section>
          <SectionTitle>PASSWORD</SectionTitle>
          <SectionInput
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호를 입력해주세요"
          />
        </Section>
      </Sections>

      <Button
        type="submit"
        onClick={() => {
          handleLogin();
        }}
      >
        로그인
      </Button>
      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
      {createPortal(toastElement, document.body)}
    </MainBox>
  );
}

const Button = styled.button`
  width: 80%;
  height: 3rem;

  margin: 0.5rem auto;
  border: 1px solid black;
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 15rem;
  left: 50%;
  transform: translateX(-50%);

  padding: 1rem;

  background-color: gray;
  color: white;
  border-radius: 0.5rem;
`;
