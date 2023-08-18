import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
    }
  };



  return (
    <>
      <div>
        <h2 className="text-white bg-red-500">Firebase Auth Login</h2>
          <div>
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button onClick={handleSubmit}>
              Log In
            </button>
          </div>
       
        <hr />
      </div>
      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>

    </>
  );
};

export default Login;