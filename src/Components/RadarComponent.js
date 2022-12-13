import styles from "./RadarComponent.module.css"

const RadarComponent = (props) => {
  const { profile } = props
  return (
    <div >
      <img src={profile.img} className={styles.radarImg}/>
      <h2>{profile.name}</h2>
      <div>
        <a className={styles.Button + " " + styles.MatchButton}><span>MATCH !</span></a>
        <span className={styles.OrSpan}>or</span>
        <a className={styles.Button + " " + styles.PassButton}><span>Pass !</span></a>
      </div>
      <div className={styles.Description}>
        {profile.description}
      </div>
    </div>
  );
}

export default RadarComponent;
