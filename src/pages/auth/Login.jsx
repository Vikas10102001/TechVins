import React from "react";
import AppLayout from "../../component/AppLayout";
import AuthWrapper from "../../component/AuthWrapper";
import { loginSchema } from "../../schemas";
import { useFormik } from "formik";
import InputBlock from "../../component/InputBlock";
import { authFunction } from "../../utils/shared/auth";
import { useState } from "react";

export default function Login() {
  const [disabled, setDisabled] = useState(false);
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
        setDisabled(true); //disabling button while waiting for response
        console.log(values);//will return 1 if no error 
        //// to get rid of all the values after submitting the form
        const success=authFunction("LOGIN", values);
        if(success)
        action.resetForm();
        
        setDisabled(false);
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
            placeholder="••••••••"
          />
          <button className="input-button" type="submit" disabled={disabled}>
            Login
          </button>
        </form>
      </AuthWrapper>
    </AppLayout>
  );
}
