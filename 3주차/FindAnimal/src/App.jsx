import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import theme from "./style/theme";
import RenderPage from "./components/RenderPage";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header header="나와 닮은 동물은?" />
      {RenderPage()}
    </ThemeProvider>
  );
}

export default App;
