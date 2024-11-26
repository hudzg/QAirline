import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routers from "./Routers/Routers";
import { getUser } from "./State/Authentication/Action";
import { lightTheme } from "./Theme/LightTheme";

function App() {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getUser(auth.jwt || jwt));
    }
  }, [auth.jwt]);
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
