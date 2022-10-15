import { StyledThemeProvider } from "definitions/styled-components";
import "./i18n";

import Home from "pages";

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <div className="App">
        <Home />
      </div>
    </StyledThemeProvider>
  );
}

export default App;
