import React, { useEffect } from "react";
import AppLayout from "../component/AppLayout";

export default function Home() {
  useEffect(() => {
    //logging out user if no auth data(token) is present in local storage
    const auth = localStorage.getItem("auth");
    if (!auth) {
      window.location.pathname = "/signup"; //better to redirect to login but as per assignment requirements given priority to signup
    }
  }, []);
  return (
    <AppLayout>
      <h1 className="home">Hello! Welcome Back</h1>
    </AppLayout>
  );
}
