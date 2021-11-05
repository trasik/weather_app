import { CssBaseline } from "@mui/material";
import Topbar from "./components/Topbar";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(/Background.jpg)',
      backgroundSize: "cover",
      height: "100vh",
      transition: "0.4 ease out"
    }}>
      <CssBaseline />
      <Topbar />
      <Weather/>
    </div>
  );
}

export default App;
