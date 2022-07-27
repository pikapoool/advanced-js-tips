// No component or function should care about how a particular thing is done.
import React from "react";

const REMOTE_URL = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      <div> Users List</div>
      {filteredUsers.map((user) => (
        <div>{user.name}</div>
      ))}
    </>
  );
};
