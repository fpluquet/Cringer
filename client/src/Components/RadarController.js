import RadarComponent from "./RadarComponent";
import {useEffect, useState} from "react";

const RadarController = (props) => {
  var {profiles} = props

  var profile = profiles[0]

  var [currentProfile, setProfile] = useState(profile)
  var [currentProfiles, setProfiles] = useState(profiles)
  var [userMatches, setUserMatches] = useState([])

  var matches = userMatches.filter(p => p.match)

  const onMatchClick = () => {
    setUserMatches([...userMatches, currentProfile])
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
      <div>
        <p>Nombre de matches : {matches.length}</p>
        <p>No more profiles...</p>
      </div>
    );
  return (
    <div>
      <p>Nombre de matches : {matches.length}</p>
      <RadarComponent
        profile={currentProfile}
        onMatchClick={onMatchClick}
        onPassClick={onPassClick}>

      </RadarComponent>
    </div>
  );
}

export default RadarController;
