import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import "../styles/signinScreen.css";
import Header from "../components/header";
import Axios from "axios";
import { useContext, useState } from "react";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("http://localhost:5000/api/users/signin", {
        email,
        password,
      });
      console.log(data);
      alert("sign in successfully")
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <Header></Header>
      <Container id="main-container" className="d-grid h-100">
        <Form
          id="sign-in-form"
          className="text-center p-3 w-100"
          onSubmit={submitHandler}
        >
          <img
            className="mb-4 bootstrap-logo"
            src="https://static.vecteezy.com/system/resources/previews/004/909/721/non_2x/sushi-logo-free-vector.jpg"
            alt="Bootstrap 5"
          />
          <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
          <Form.Group className="login" controlId="sign-in-email-address">
            <Form.Control
              type="email"
              size="lg"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 login" controlId="sign-in-password">
            <Form.Control
              type="password"
              size="lg"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group> */}
          <div className="d-grid login">
            <Button type="submit" variant="primary" size="lg">
              Sign in
            </Button>
          </div>
          New customer? <a href="/signup">Create your account</a>
          <p className="mt-5 text-muted">&copy; 2022</p>
        </Form>
      </Container>
    </>
  );
}

export default SigninScreen;
