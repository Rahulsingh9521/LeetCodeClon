import React, { useState } from "react";
import login from "../../sdk/loginSDK";

import leetCodeLogo from "@assets/loginPageAssets/leetCode.svg";

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

    console.log("🚀 ~ submitHandler ~ payload:", payload);

    login.authenticate(payload).then((res) => {
      console.log("🚀 ~ handlChangeInput ~ res:", res);
      if (res.status === 200 && res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        console.log("Token saved to local storage");
      }
    });
  };

  return (
    <div className="h-full w-full bg-slate-200 flex items-center justify-center">
      <div className="w-96 h-96 bg-white p-8 rounded shadow-md">
        <div className="flex flex-col items-center justify-center">
          <img className="item mb-2" src={leetCodeLogo} />
          <p className="font-mono font-bold text-lg">LeetCodeClone</p>
        </div>
        <input
          type="email"
          name="userName"
          onChange={handlChangeInput}
          placeholder="Username"
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          name="passWord"
          onChange={handlChangeInput}
          placeholder="Password"
          className="block w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="flex gap-30 mt-4 text-center">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
