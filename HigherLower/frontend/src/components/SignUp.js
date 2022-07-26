import React, {useState} from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {API_BASE} from "../variables";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {username, email, password};

    fetch(API_BASE+"User", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    }).then(() => {
      console.log("new user added");
      history("/");
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
          required
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
          required
          type="email" 
          placeholder="name@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          required
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
          required
          type="password" 
          placeholder="Password" />
        </Form.Group>
        <Button type="submit">Sign Up</Button>


      </Form>
    </Container>
  )
}

export default SignUp