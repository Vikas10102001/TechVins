import React from "react";
import AppLayout from "../../component/AppLayout";
import AuthWrapper from "../../component/AuthWrapper";

export default function Signup() {
  return (
    <AppLayout>
      <AuthWrapper title="Create your account!">
        <form>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
            
            />
          </div>
          <div className="input-block">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
      
            />
            
          </div>
          <div className="input-block">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
            />
           
          </div>
          <div className="input-block">
            <label htmlFor="confirm_password" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
            />
          </div>
            <button className="input-button" type="submit">
              Sign up
            </button>
        </form>
      </AuthWrapper>
    </AppLayout>
  );
}
