import { CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Topbar />
      <Weather/>
    </div>
  );
}

export default App;
