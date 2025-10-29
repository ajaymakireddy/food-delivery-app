import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPage.css";

const LoginPage = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <>
      <div className="login-popup">
        <form action="" className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img
              src={assets.cross_icon}
              alt=""
              onClick={() => setShowLogin(false)}
            />
          </div>
          <div className="login-popup-inputs">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Enter Your Name" required />
            )}
            <input type="email" placeholder="Enter your Email" required />
            <input type="password" placeholder="Enter your Password" required />
          </div>
          <button>
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create New Account ?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span onClick={() => setCurrentState("Login")}>Login Here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPage;
