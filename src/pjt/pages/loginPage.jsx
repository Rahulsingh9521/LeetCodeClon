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
  };

  const submitHandler = () => {
    const payload = {
      username: userName,
      password: passWord,
    };

    login.authenticate(payload).then((res) => {
      console.log("🚀 ~ handlChangeInput ~ res:", res);
      if (res.status === 200 && res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        console.log("Token saved to local storage");
      }
    });
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
