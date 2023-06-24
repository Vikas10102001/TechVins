import React from "react";
import AppLayout from "../../component/AppLayout";
import AuthWrapper from "../../component/AuthWrapper";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import InputBlock from "../../component/InputBlock";
import { authFunction } from "../../utils/shared/auth";

export default function Signup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: true,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log(values);
        authFunction("SIGNUP", values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });
  return (
    <AppLayout>
      <AuthWrapper title="Create your account!">
        <form onSubmit={handleSubmit}>
          <InputBlock
            label="Name"
            hasError={errors.name && touched.name}
            error={errors.name}
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="your name"
          />
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
            placeholder="example@gmail.com"
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
            placeholder="Example@123"
          />
          <InputBlock
            label="Confirm Password"
            hasError={errors.confirm_password && touched.confirm_password}
            error={errors.confirm_password}
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="••••••••"
          />
          <button className="input-button" type="submit">
            Sign up
          </button>
        </form>
      </AuthWrapper>
    </AppLayout>
  );
}
