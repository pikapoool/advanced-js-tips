// 1. The Single Responsibility Principle - A module should be responsible to one, and only one, actor. (Должен иметь одну причину для изменения) 
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  isLoading: true,
};

// COMPLEX STATE MANAGEMENT
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { isLoading: true };
    case "FINISHED":
      return { isLoading: false };
    default:
      return state;
  }
}

export const SingleResponsibilityPrinciple = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const showDetails = (userId) => {
    const user = filteredUsers.find((user) => user.id === userId);
    alert(user.contact);
  };

  // REMOTE DATA FETCHING
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "FINISHED" });
        setUsers(json);
      });
  }, []);

  // PROCESSING DATA
  useEffect(() => {
    const filteredUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        contact: `${user.phone} , ${user.email}`,
      };
    });
    setFilteredUsers(filteredUsers);
  }, [users]);

  // COMPLEX UI RENDERING
  return (
    <>
      <div> Users List</div>
      <div> Loading state: {state.isLoading ? "Loading" : "Success"}</div>
      {users.map((user) => {
        return (
          <div key={user.id} onClick={() => showDetails(user.id)}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        );
      })}
    </>
  );
};
// ********************************************************************************************************

import React from "react";
import { useGetRemoteData } from "./useGetRemoteData";

export const Users = () => {
  const { filteredUsers, isLoading } = useGetRemoteData();

  return (
    <>
      <div> Users List</div>
      <div> Loading state: {isLoading ? "Loading" : "Success"}</div>
      {filteredUsers.map((user) => (
        <UserDetails user={user} />
      ))}
    </>
  );
};


const UserDetails = (user) => {
  const showDetails = (user) => {
    alert(user.contact);
  };

  return (
    <div key={user.id} onClick={() => showDetails(user)}>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};






