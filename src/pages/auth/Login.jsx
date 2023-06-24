import React from "react";
import AppLayout from "../../component/AppLayout";
import AuthWrapper from "../../component/AuthWrapper";
import { loginSchema } from "../../schemas";
import { useFormik } from "formik";
import InputBlock from "../../component/InputBlock";
import { authFunction } from "../../utils/shared/auth";

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
        authFunction("LOGIN",values)
        action.resetForm();
      },
    });
  return (
    <AppLayout>
      <AuthWrapper title="Log into your account!">
        <form onSubmit={handleSubmit}>
          <InputBlock
            label="Email"
            hasError={errors.email && touched.email}
            error={errors.email}
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputBlock
            label="Password"
            hasError={errors.password && touched.password}
            error={errors.password}
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button className="input-button" type="submit">
            Login
          </button>
        </form>
      </AuthWrapper>
    </AppLayout>
  );
}
