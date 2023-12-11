import { useState, useEffect } from "react";
import styled from "styled-components";
import TextBox from "../components/common/TextBox";
import Group from "../components/common/Group";

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
    setCountdown(3); // 다시하기 버튼을 누를 때 카운트를 초기화합니다.
  };

  return (
    <div>
      {countdown > 0 ? (
        <Group>{countdown}</Group>
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

const NavigateButton = styled.button`
  background-color: white;
  &:hover {
    background-color: #6495ed;
  }
  &:disabled {
    background-color: gray;
  }
`;

const AnimalPic = styled.img`
  margin-top: 1rem;
  width: 70%;
  height: 70%;
  object-fit: cover;
`;
