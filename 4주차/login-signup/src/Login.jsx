import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

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

        console.log(response.data.id);
      })
      .catch((error) => {
        setToastMessage(error.response.data.message);
        setShowToast(true);
        console.log("An error occurred:", error.response);
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
      <Link to="/sign-up">
        <Button>회원가입</Button>
      </Link>
      {createPortal(toastElement, document.body)}
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

const ToastContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: gray;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;
