import React from 'react'
import AppLayout from '../../component/AppLayout'
import AuthWrapper from '../../component/AuthWrapper'

export default function Login() {
  return (
    <AppLayout>
      <AuthWrapper title="Create your account!">
        <form>
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
            <button className="input-button" type="submit">
              Login
            </button>
        </form>
      </AuthWrapper>
    </AppLayout>
  )
}
