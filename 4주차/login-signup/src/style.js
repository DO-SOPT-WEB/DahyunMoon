import styled from "styled-components";

export const MainBox = styled.main`
  width: 50vw;
  height: 50vh;
  border-radius: 1rem;
  background-color: #fbecfb;

  position: relative;

  padding: 1rem 2rem;
`;

export const Header = styled.header`
  font-size: 2rem;
  font-weight: bold;

  margin: 1rem auto;
`;

export const Sections = styled.section`
  width: auto;
  height: auto;

  margin: 2rem auto;
`;

export const Section = styled.section`
  width: 80%;
  height: 3rem;

  display: flex;

  margin: 1rem auto;
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  width: 20%;
  height: 3rem;
  text-align: left;
  padding: 0 1rem;

  line-height: 3rem;
`;

export const SectionInput = styled.input`
  width: 70%;
`;
