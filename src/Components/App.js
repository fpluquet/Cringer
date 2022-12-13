import logo from '../logo.svg';
import './App.css';
import RadarComponent from "./RadarComponent";

function App() {
  var profile = {
    img: "https://randomuser.me/api/portraits/women/43.jpg",
    name: "Béatrice Chow",
    description: "Hello, j'aime les ballades en forêt en pleine nuit et je dors les yeux ouverts.\nN'aie pas peur, clique sur Match !"
  }

  return (
    <div className="App">
      <header className="App-header">
          <RadarComponent profile={profile}></RadarComponent>
      </header>
    </div>
  );
}

export default App;
