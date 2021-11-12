import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import AppRouter from "./misc/router";
import UserContextProvider from "./context/UserContext";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
