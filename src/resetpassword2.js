import React, { useRef } from "react";
import { useForm } from "react-hook-form";

// import "./styles.css";

export default function Reset() {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Password</label>
      <input
        name="password"
        type="password"
        ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Repeat password</label>
      <input
        name="password_repeat"
        type="password"
        ref={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
  );
}


 