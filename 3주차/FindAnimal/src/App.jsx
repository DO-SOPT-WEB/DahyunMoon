import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/common/Header";
import theme from "./style/theme";
import RenderPage from "./components/RenderPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header header="나와 닮은 동물은?" />
      {RenderPage()}
    </ThemeProvider>
  );
}

export default App;
