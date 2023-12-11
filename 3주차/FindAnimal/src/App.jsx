import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import RenderPage from "./components/RenderPage";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {RenderPage()}
    </ThemeProvider>
  );
}

export default App;
