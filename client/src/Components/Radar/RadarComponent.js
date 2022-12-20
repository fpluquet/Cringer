import styles from "./RadarComponent.module.css"

const RadarComponent = (props) => {
  const { profile, currentUser } = props
  const { onMatchClick, onPassClick, onLogoutClick } = props

  var hint = undefined;
  if(profile.likesMe && profile.liked) {
    hint = <h3>It's a match !</h3>
  } else if(profile.likesMe) {
    hint = <h3>She likes you !</h3>
  } else if(profile.liked) {
    hint = <h3>You like her!</h3>
  }

  return (
    <div>
      <div className={"App-header"}>
        <a onClick={onLogoutClick}>Logout</a>
        <img src={currentUser.img} />
      </div>
      <div  class={"App-body"}>
        <img src={profile.img} className={styles.radarImg}/>
        <h2>{profile.name}</h2>
        {hint}
        <div>
          <a className={styles.Button + " " + styles.MatchButton} onClick={onMatchClick}><span>MATCH !</span></a>
          <span className={styles.OrSpan}>or</span>
          <a className={styles.Button + " " + styles.PassButton}  onClick={onPassClick}><span>Pass !</span></a>
        </div>
        <div className={styles.Description}>
          {profile.description}
        </div>
      </div>
    </div>
  );
}

export default RadarComponent;
