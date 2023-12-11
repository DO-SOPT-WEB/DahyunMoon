import { useState, useEffect } from "react";
import styled from "styled-components";
import { TextBox, Group, NavigateButton } from "../style/commonStyle";

function PageRandom({ animalData }) {
  const [displayAnimal, setDisplayAnimal] = useState(null);
  const [countdown, setCountdown] = useState(3); // 초기 카운트다운 값
  const [displayPic, setDisplayPic] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
        const randomAnimalIndex = Math.floor(Math.random() * 18);
        setDisplayAnimal(animalData[randomAnimalIndex].animal);
        setDisplayPic(animalData[randomAnimalIndex].imgUrl);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, animalData]);

  const handleRetry = () => {
    setDisplayAnimal(null);
    setDisplayPic("");
    setCountdown(3);
  };

  return (
    <div>
      {countdown > 0 ? (
        <CountContainer>{countdown}</CountContainer>
      ) : (
        <Group>
          <AnimalPic src={displayPic} />
          <TextBox>너와 닮은 동물은..{displayAnimal}(이)야!!</TextBox>
          <NavigateButton onClick={handleRetry}>다시하기</NavigateButton>
        </Group>
      )}
    </div>
  );
}

export default PageRandom;

const AnimalPic = styled.img`
  margin-top: 1rem;
  width: 70%;
  height: 70%;
  object-fit: cover;
`;

const CountContainer = styled.div`
  display: inline-block;
  transform-origin: center;
  padding: 0 0.5rem;
  color: #2aff29;

  @keyframes animate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: animate 1s infinite;
`;
