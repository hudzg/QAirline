import { CssBaseline, ThemeProvider } from "@mui/material";
import Routers from "./Routers/Routers";
import { lightTheme } from "./Theme/LightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
