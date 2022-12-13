import logo from '../logo.svg';
import './App.css';
import RadarComponent from "./RadarComponent";
import RadarController from "./RadarController";

function App() {


  return (
    <div className="App">
      <header className="App-header">
          <RadarController></RadarController>
      </header>
    </div>
  );
}

export default App;
