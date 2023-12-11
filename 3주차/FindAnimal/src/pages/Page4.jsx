import styled from "styled-components";
import { TextBox, Group, NavigateButton } from "../style/commonStyle";

function Page4({ selectedOptions, animalData, restartPage }) {
  function getMatchingAnimal(selectedOptions) {
    const matchingAnimalData = animalData.find(
      (data) =>
        data.answer.length === selectedOptions.length &&
        data.answer.toString() === selectedOptions.toString()
    );

    return matchingAnimalData || "알 수 없음";
  }
  const handleRestart = () => {
    restartPage(1);
  };
  const matchingAnimal = getMatchingAnimal(selectedOptions).animal;
  const matchingAnimalPic = getMatchingAnimal(selectedOptions).imgUrl;

  console.log(selectedOptions);

  return (
    <div>
      <Group>
        <TextBox>너랑 닮은 동물은.. {matchingAnimal}(이)야!!</TextBox>
        <AnimalPic src={matchingAnimalPic}></AnimalPic>
        <div>
          <NavigateButton onClick={handleRestart}>다시하기</NavigateButton>
        </div>
      </Group>
    </div>
  );
}

export default Page4;

const AnimalPic = styled.img`
  margin-top: 1rem;
  width: 70%;
  height: 70%;
  object-fit: cover;
`;
