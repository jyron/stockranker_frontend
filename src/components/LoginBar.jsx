import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const url = "http://localhost:8000/auth/jwt/login";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.set("username", email);
    formData.set("password", password);
    

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
          if (data.access_token) {
              localStorage.setItem('user',data.access_token);
              
          }
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </div>
    </form>
  );
}
