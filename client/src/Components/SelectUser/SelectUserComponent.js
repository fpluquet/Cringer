import styles from "./SelectUserComponent.module.css"
const SelectUserComponent = (props) => {
  const { profiles, setSelectedUser } = props;
  // const profiles = props.profiles;
  // const setSelectedUser = props.setSelectedUser;
  return (
    <div>
    <div className={"App-header"}>Welcome</div>
    <div  className={"App-body"}>
      <h1>Who are you ?</h1>
      <ul>
        {profiles.map((user) => (
          <li onClick={() => setSelectedUser(user)} key={user.id}>
            <img src={user.img}/>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
export default SelectUserComponent;
