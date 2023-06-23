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
              // value={values.name}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
            {/* {touched.name && errors.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null} */}
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
              // value={values.email}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
            {/* {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null} */}
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
              // value={values.password}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
            {/* {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null} */}
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
              // value={values.confirm_password}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
            {/* {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null} */}
          </div>
            <button className="input-button" type="submit">
              Sign up
            </button>
        </form>
      </AuthWrapper>
    </AppLayout>
  );
}
