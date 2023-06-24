import React from "react";

export default function InputBlock({
  label,
  type,
  autoComplete,
  name,
  id,
  value,
  onChange,
  onBlur,
  hasError,
  error,
}) {
  return (
    <div className="input-block">
      <label htmlFor="password" className="input-label">
        {label}
      </label>
      <input
        className={hasError && "invalid-input"}
        type={type}
        autoComplete={autoComplete}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError ? <p className="form-error">{error}</p> : null}
    </div>
  );
}
