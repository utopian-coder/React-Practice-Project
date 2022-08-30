import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addNewUserHandler = (uName, uAge, uKey) => {
    setUserList((prevList) => {
      return [...prevList, { name: uName, age: uAge, uKey: uKey }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addNewUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
