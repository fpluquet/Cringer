import RadarComponent from "./RadarComponent";
import {useEffect, useState} from "react";

const RadarController = (props) => {
  var {profiles, currentUser, onLogoutClick} = props

  var profile = profiles[0]

  var [currentProfile, setProfile] = useState(profile)
  var [currentProfiles, setProfiles] = useState(profiles)

  const onMatchClick = () => {
    fetch("http://localhost:3001/api/match/" + currentProfile.id, {
      "method": "POST"
    })
    setNext()
  }

  async function setNext()  {
    var newProfiles = currentProfiles.filter(p => currentProfile.id != p.id)
    profile = newProfiles[Math.floor(Math.random() * newProfiles.length)]
    setProfile(profile)
    setProfiles(newProfiles)
  }

  const onPassClick = () => {
    fetch("http://localhost:3001/api/pass/" + currentProfile.id, {
      "method": "POST"
    })
    setNext();
  }
  if (currentProfiles.length == 0)
    return (
      <div class={"App-body"}>
        <p>No more profiles...</p>
      </div>
    );
  return (
    <div>
      <RadarComponent
        profile={currentProfile}
        currentUser={currentUser}
        onMatchClick={onMatchClick}
        onPassClick={onPassClick}
        onLogoutClick={onLogoutClick}>

      </RadarComponent>
    </div>
  );
}

export default RadarController;
