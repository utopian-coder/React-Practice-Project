import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} Year Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
