import { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <MainBox>
      <Header>Login</Header>
      <Sections>
        <Section>
          <SectionTitle>ID</SectionTitle>
          <SectionInput type="text" placeholder="아이디를 입력해주세요" />
        </Section>
        <Section>
          <SectionTitle>PASSWORD</SectionTitle>
          <SectionInput type="text" placeholder="비밀번호를 입력해주세요" />
        </Section>
      </Sections>

      <Button>로그인</Button>
      <Button>회원가입</Button>
    </MainBox>
  );
}

export default App;

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
