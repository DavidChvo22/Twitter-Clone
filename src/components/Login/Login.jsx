import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function handleEmailInput(event) {
    setEmail(event.target.value);
  }
  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }
  function handleLogin(event) {
     event.preventDefault();
    if (email.length >= 6 && password.length >= 6) {
        navigate("/Home")
    }else{
        alert("Email and password must be atleast 6 characters");
    }
  }
  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="email" onChange={handleEmailInput}></input>
      <br />
      <input
        type="password"
        name="password"
        onChange={handlePasswordInput}
      ></input>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}
