import './App.css';
import RadarController from "./RadarController";
import {useEffect, useState} from "react";

async function loadProfiles() {
  var response = await fetch("http://localhost:3001/api/profiles")
  return await response.json()
}
function App() {

  var [profiles, setProfiles] = useState(undefined)

  useEffect(() => {
    loadProfiles().then((data) => {
      console.log("Chargement des profiles")
      setProfiles(data)
    })
  }, [])

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
