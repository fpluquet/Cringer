import './App.css';
import RadarController from "./Radar/RadarController";
import {useEffect, useState} from "react";
import SelectUserComponent from "./SelectUser/SelectUserComponent";

async function loadProfiles() {
  var response = await fetch("http://localhost:3001/api/profiles")
  return await response.json()
}
function App() {

  var [profiles, setProfiles] = useState(undefined)
  var [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    loadProfiles().then((data) => {
      console.log("Chargement des profiles")
      setProfiles(data)
    })
  }, [])

  if(profiles == undefined) {
    return (
      <div className="App">
        <header className="App-body">
          Chargement...
        </header>
      </div>
    );
  }else {
    if (currentUser == undefined) {
      return (<div className="App">
          <SelectUserComponent
            profiles={profiles}
            setSelectedUser={(user) => setCurrentUser(user) }></SelectUserComponent>
      </div>);
    }
    return (
      <div className="App">
          <RadarController
            profiles={profiles}
            currentUser={currentUser}
            onLogoutClick={() => setCurrentUser(undefined)}></RadarController>
      </div>
    );
  }
}

export default App;
