import RadarComponent from "./RadarComponent";
import {useState} from "react";

const RadarController = (props) => {
  var {profiles} = props
  var profile = profiles[0]

  var [currentProfile, setProfile] = useState(profile)
  var [userMatches, setUserMatches] = useState([])

  var matches = userMatches.filter(p => p.match)

  const onMatchClick = () => {
    setUserMatches([...userMatches, currentProfile])
    setNext()
  }

  function setNext() {
    profiles = profiles.filter(p => currentProfile != p)
    profile = profiles[Math.floor(Math.random() * profiles.length)]
    setProfile(profile)
  }

  const onPassClick = () => {
    setNext();
  }

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
