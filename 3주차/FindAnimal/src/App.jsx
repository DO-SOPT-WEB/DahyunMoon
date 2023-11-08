import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showPage0, setShowPage0] = useState(true);
  const [showPage1, setShowPage1] = useState(false);

  const startGame = () => {
    setShowPage0(false);
    setShowPage1(true);
  };
  return (
    <>
      {showPage0 && <Page0 startGame={startGame} />}
      {showPage1 && <Page1 />}
    </>
  );
}

function Page0({ startGame }) {
  return (
    <>
      <header>나와 닮은 동물은?</header>
      <button onClick={startGame}>시작하기</button>
    </>
  );
}
function Page1() {
  return (
    <div>
      <h2></h2>
    </div>
  );
}
export default App;
