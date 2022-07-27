import React from "react";
import useFetch from "./useFetch";


// If we wanted to change how we obtained users (such as by using the axios instead of fetch API), we can do that without ever going into the <Users /> component
// import localUsers from "./users.json";
// function useFetch(){
//     return localUsers.users;
// };
// export default localUsers;

const REMOTE_URL = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  const users = useFetch(REMOTE_URL);

  return (
    <>
      <div> Users List</div>
      {filteredUsers.map((user) => (
        <div>{user.name}</div>
      ))}
    </>
  );
};
