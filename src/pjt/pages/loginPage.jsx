import React, { useState } from "react";
import login from "../../sdk/loginSDK";

function LoginPage() {
  let [userName, setUserName] = useState("");
  let [passWord, setPassWord] = useState("");

  const handlChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log("🚀 ~ handlChangeInput ~ event.target:", value, name)

    if (name === "userName") {
      setUserName(value);
    } else if (name === "passWord") {
      setPassWord(value);
    }

    console.log(userName, passWord);
  };

  const submitHandler = () => {
    const payload = {
      email: userName,
      password: passWord,
    };
    login.authenticate(payload).then((res) => {});
  };

  return (
    <div>
      <input type="email" name="userName" onChange={handlChangeInput}></input>
      <input
        type="password"
        name="passWord"
        onChange={handlChangeInput}
      ></input>
      <button type="submit" onClick={submitHandler}>
        Login
      </button>
      <p>
        {/* Optional link to Forgot Password or Register functionality */}
        <a href="/forgot-password">Forgot Password?</a> or{" "}
        <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default LoginPage;
