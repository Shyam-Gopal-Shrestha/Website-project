// import React, { useState } from "react";
// import LoginForm from "./LoginForm";
// import SignupForm from "./SignupForm";

// const AuthPage = () => {
//   const [isLoginMode, setIsLoginMode] = useState(true);
//   return <div>
//     {isLoginMode ? <LoginForm /> : <SignupForm />}
//     {isLoginMode ?  : }</div>;
// };

// export default AuthPage;

import React, { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";

const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleAuthMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="container">
      {isLoginMode ? <LoginForm /> : <SignupForm />}
      <p className="mt-3">
        {isLoginMode ? (
          <>
            Don't have an account?{" "}
            <button className="btn btn-link p-0" onClick={toggleAuthMode}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button className="btn btn-link p-0" onClick={toggleAuthMode}>
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthPage;
