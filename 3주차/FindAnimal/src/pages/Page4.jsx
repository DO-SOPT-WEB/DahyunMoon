import styled from "styled-components";
import TextBox from "../components/common/TextBox";
import Group from "../components/common/Group";

function Page4({ selectedOptions, animalData, restartPage1 }) {
  function getMatchingAnimal(selectedOptions) {
    const matchingAnimalData = animalData.find(
      (data) =>
        data.answer.length === selectedOptions.length &&
        data.answer.toString() === selectedOptions.toString()
    );

    return matchingAnimalData ? matchingAnimalData : "알 수 없음";
  }
  const handleRestart = () => {
    restartPage1();
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
          <ClickButton onClick={handleRestart}>다시하기</ClickButton>
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

const ClickButton = styled.button`
  background-color: #6495ed;
  color: white;
  margin: 0 1rem;
  width: 8rem;
  height: 3rem;
  font-weight: bold;
`;
