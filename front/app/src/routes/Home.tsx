import { Outlet } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar";

import { HomeStyle } from "../styles/Home.style";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

let user1 = {
  id: 0,
  name: "undefined",
  email: "undefined",
  password: "undefined",
  age: 0,
};

/////////////////////////////////FUNCTION HOME
function Home() {
  ////////////////////////////////USE STATE
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>(user1);

  const [id, setId] = useState<string>("");

  //////////////////////////////USE EFFECT
  useEffect(() => {
    console.log(JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    console.log(JSON.stringify(user));
  });
  /////////////////////////////FUNC
  async function GetUsers() {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data.users);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function GetUserById(userId: number) {
    try {
      const id = userId.toString();
      const url = "http://localhost:5000/user/";
      const furl = url + id;
      const response = await axios.get(furl);
      setUser(response.data);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  // Functions to handle input change
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  return (
    <HomeStyle>
      <NavBar />
      {/* Input field to capture user input */}
      <input
        type="text"
        value={id}
        onChange={handleIdChange}
        placeholder="Enter an ID"
      />
      <button onClick={(e: any) => GetUserById(Number(id))}>
        Get User By Id
      </button>
      <div>{user.name}</div>
      <button onClick={(e: any) => GetUsers()}>Get Users</button>
      {users.map((user) => {
        return (
          <>
            <div key={user.id}>ID = {user.id}</div>
            <div key={user.id}>NAME = {user.name}</div>
            <div key={user.id}>AGE = {user.age}</div>
          </>
        );
      })}
      <Outlet />
    </HomeStyle>
  );
}

export default Home;
