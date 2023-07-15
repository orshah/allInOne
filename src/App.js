import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./components/mainApp/MainApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
