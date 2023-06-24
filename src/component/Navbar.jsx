import React from "react";
import Logo from "../utils/shared/component/Logo";
import LogoIcon from "../utils/shared/component/LogoIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../utils/shared/auth";

export default function Navbar() {
  const authData = useSelector((state) => {
    return state.auth.authData;
  });
  console.log(authData)
  return (
    <div className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <LogoIcon />
      <div className="nav-right">
        {
        authData?
        <button className="btn logout_btn" onClick={()=>{signout()}}>Log out</button>
        :
        <>
        <Link to="/login" className="btn login_btn">
          LOG IN
        </Link>
        <Link to="/signup" className="btn signup_btn">
          SIGN UP
        </Link>
        </>
      }
      </div>
    </div>
  );
}
