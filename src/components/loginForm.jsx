import { React, useState } from "react";
import Input from './common/input';

const LoginForm = (props) => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setAccount((prevAccount) => {
      // console.log(prevAccount[e.target.name]);
      // if (e.target.name === "username") {
      //   return { ...prevAccount, username: value };
      // } else {
      //   return { ...prevAccount, password: value };
      // }
      prevAccount[e.target.name] = value;
      return {...prevAccount};
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          fieldName="username"
          label="Username"
          handleChange={handleChange}
          accountField={account.username}
          type="text"
        />
        <Input
          fieldName="password"
          label="Password"
          handleChange={handleChange}
          accountField={account.password}
          type="password"
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
