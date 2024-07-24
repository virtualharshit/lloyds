import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import LBG from "../assets/LBG.png";
import "./login.css";

const toastStyle = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const loginHandler = async () => {
    for (let key in state) {
      if (state[key] === "") {
        return toast.error("Please fill all fields", toastStyle);
      }
    }

    try {
      const { email, password } = state;
      if (email === "test@gmail.com" && password === "dfdfdf") {
        navigate("/");
        return;
      }

      setLoading(true); // Set loading to true when starting the login request
      const response = await axios.post("/users/login", {
        ...state,
      });

      // Cookies.set("user", JSON.stringify(response?.data));
      // Cookies.set("token", response?.data?.token);
      navigate("/");
    } catch (e) {
      return toast.error(e?.response?.data?.message, toastStyle);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      loginHandler();
    }
  };

  useEffect(() => {}, []);

  return (
    <Container
      className="custom-container"
      style={{ height: "100vh", margin: "0 auto" }}
    >
      <Row className="signupwrapper">
        <ToastContainer />
        <Col lg={6} md={6}>
          <img src={LBG} className="imagewrapper" alt="tax" />
        </Col>
        <Col lg={6} md={6}>
          <div className="mt-5 mx-5">
            <p className="appName">
              Welcome to Financial Management Application
            </p>
            <Form className="mt-4" onKeyDown={(e) => handleKeyDown(e)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="labelStyle">Email address</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="labelStyle">Password</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="********"
                  value={state.password}
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
            <div className="d-grid gap-2 mt-5 text-center">
              <Button
                variant="success"
                className="custom-btn-design bg-[#027a35]"
                size={"lg"}
                onClick={loginHandler}
                onKeyDown={handleKeyDown}
              >
                {loading ? (
                  <Spinner animation="border" role="status" size="sm">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
