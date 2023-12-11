import "./App.css";
import Header from "./components/Header";
import RenderPage from "./components/RenderPage";

function App() {
  return (
    <>
      <Header header="나와 닮은 동물은?" />
      {RenderPage()}
    </>
  );
}

export default App;
