import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
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

/////////////////////////////////FUNCTION HOME
function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const [id, setId] = useState<string>("");

  //////////////////////////////USE EFFECT
  useEffect(() => {
    console.log(JSON.stringify(users));
  }, [users]);

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
      <button onClick={(e: any) => GetUsers()}>Get Users</button>
      {users.map((zizi) => {
        return <h1 key={zizi.id}>{zizi.name}</h1>;
      })}
      <Outlet />
    </HomeStyle>
  );
}

export default Home;
