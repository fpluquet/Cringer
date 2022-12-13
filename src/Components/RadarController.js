import RadarComponent from "./RadarComponent";
import {useState} from "react";
import profiles from '../data.json'

profiles = profiles.map((p) => ({
  name: `${p.name.first}, ${p.name.last}`,
  description: `Bonjour de ${p.location.country} !`,
  img: p.picture.large
}))
const RadarController = (props) => {

  var profile = profiles[0]

  var [currentProfile, setProfile] = useState(profile)
  var [matches, setMatches] = useState([])

  const onMatchClick = () => {
    setMatches([...matches, currentProfile])
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
      <RadarComponent profile={currentProfile}
                      onMatchClick={onMatchClick}
      onPassClick={onPassClick}></RadarComponent>
    </div>
  );
}

export default RadarController;
