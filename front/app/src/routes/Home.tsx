import { Outlet } from "react-router-dom";
import React from "react";
import { useState } from "react";

import NavBar from "../components/NavBar";

import { HomeStyle } from "../styles/Home.style";

//////////////////////USER INTERFACE
interface User {
  firstname: string;
  lastname: string;
  age: number;
}
const User1: User = {
  firstname: "Ryad",
  lastname: "Laouedj",
  age: 22,
};
const User2: User = {
  firstname: "Francis",
  lastname: "Babour",
  age: 54,
};

//////////////FUNCTION CHECKING USERS
function Checkuser(firstName: string, lastName: string) {
  if (firstName === User1.firstname || firstName === User1.firstname)
    return <div>{firstName} is connected</div>;
  else return <div>{firstName} is not connected</div>;
}

/////////////////////////////////FUNCTION HOME
function Home() {
  // Declare state fields called 'fname' and 'lname' with initial values as an empty strings
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");

  // Functions to handle input change
  const handleFnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFname(event.target.value);
  };
  const handleLnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLname(event.target.value);
  };

  return (
    <HomeStyle>
      <NavBar />
      {/* Input field to capture user input */}
      <input
        type="text"
        value={fname}
        onChange={handleFnameChange}
        placeholder="Enter your first name"
      />
      <input
        type="text"
        value={lname}
        onChange={handleLnameChange}
        placeholder="Enter your last name"
      />
      <>{Checkuser(fname, lname)}</>
      <Outlet />
    </HomeStyle>
  );
}

export default Home;
