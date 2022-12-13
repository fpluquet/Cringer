import logo from '../logo.svg';
import './App.css';
import RadarComponent from "./RadarComponent";
import RadarController from "./RadarController";
import {useState} from "react";

async function loadProfiles() {
  var response = await fetch("http://localhost:3001/api/profiles")
  return await response.json()
}
const loadProfilesPromise = loadProfiles()
function App() {

  var [profiles, setProfiles] = useState(undefined)

  loadProfilesPromise.then((data) => {
    setProfiles(data)
  })

  if(profiles == undefined) {
    return (
      <div className="App">
        <header className="App-header">
          Chargement...
        </header>
      </div>
    );
  }else {
    return (
      <div className="App">
        <header className="App-header">
          <RadarController profiles={profiles}></RadarController>
        </header>
      </div>
    );
  }
}

export default App;
