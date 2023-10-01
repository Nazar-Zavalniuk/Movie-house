import React from "react";
import "./Login.css";
import Header from "../../Components/UI/Header/Header";
import LoginBody from "../../Components/UI/LoginBody/LoginBody";
import Footer from "../../Components/UI/Footer/Footer";

function Login(props) {
  return (
    <div className="login page">
      <Header includesSearchBar={false} />
      <LoginBody />
      <Footer />
    </div>
  );
}

export default Login;
