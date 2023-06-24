import React from "react";
import AppLayout from "../../component/AppLayout";
import AuthWrapper from "../../component/AuthWrapper";
import { loginSchema } from "../../schemas";
import { useFormik } from "formik";
import InputBlock from "../../component/InputBlock";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: true,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log(values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });
  return (
    <AppLayout>
      <AuthWrapper title="Create your account!">
        <form onSubmit={handleSubmit}>
          <InputBlock
            label="Email"
            hasError={errors.email && touched.email}
            error={errors.email}
            type="email"
            autoComplete="off"
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="input-block">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              className={errors.password && touched.password && "invalid-input"}
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <button className="input-button" type="submit">
            Login
          </button>
        </form>
      </AuthWrapper>
    </AppLayout>
  );
}
