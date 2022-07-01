import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Resetpassword.css";
import "@fontsource/poppins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useForm } from "react-hook-form";

function Resetpassword() {
  const url = "https://stage.blendedsense.com/api/reset_password";
  const [passwordvalue, setpassword] = useState("password");
  const [confirmPasswordvalue, setconfirmPassword] = useState("password");
  const {register,handleSubmit,watch,formState:{errors},trigger} = useForm({
    mode:'all'
  });
  const { param } = useParams();

  const password = watch('password')
  const confirmPassword = watch('confirmpassword')

  const togglepwd = () => {
    if (passwordvalue === "password") {
      setpassword("text");
      return;
    }
    setpassword("password");
  };

  const toggleconfpwd = () => {
    if (confirmPasswordvalue === "password") {
      setconfirmPassword("text");
      return;
    }
    setconfirmPassword("password");
  };

  const resetToken = param;

  const data ={password,confirmPassword,resetToken};
  
  const Submitpass = () => {
    // console.log(data);
    axios
      .post(url, data, {
        headers: {
          "client-id": "4CD884F88F476F647CC4446D4593D",
          "client-secret": "A955BEBD27BFC49E8CE12129346A4",
        },
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  const isValid = password && confirmPassword;

  return (
    <div className="container">
      <div className="body1">
        <div className="headings">
          <p className="border-bottom p-3 text-center">
             Reset Password
          </p>
          <p className="p1">Please reset your password.</p>
        </div>
        <div className="form1">
          <form onSubmit={handleSubmit(Submitpass)}>
            <div onClick={togglepwd}>
              {passwordvalue === "password" ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyepwds"
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faEye} id="eyepwds"></FontAwesomeIcon>
              )}
            </div>
            <label>Password</label>

            <input
              className={`form-control inputs ${ errors.password && 'errorborder'}`}
              style={{ fontWeight: "bold" }}
              placeholder="Password"
              {...register('password',{required:'Please provide your password',
              })}
              type={passwordvalue}
              name="password"
              onKeyDown={() => {
                trigger("password");
              }}
            />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
            <br />

            <div onClick={toggleconfpwd}>
              {confirmPasswordvalue === "password" ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  id="eyepwds2"
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faEye} id="eyepwds2"></FontAwesomeIcon>
              )}
            </div>

            <div className="inputs1">
              <label>Confirm Password</label>

              <input
                  className={`form-control inputs ${ errors.confirmpassword && 'errorborder'}`}
                  style={{ fontWeight: "bold" }}
                  placeholder="Confirm Password"
                    {...register('confirmpassword',{required:'Please confirm your password',
                          validate: (value) =>
                          value === password || 'Passwords do not match',
                          })
                    }
                  type={confirmPasswordvalue}
                  name="confirmpassword"
                  onKeyDown={() => {
                  trigger("password");
                  }}
              />
              {errors.confirmpassword && <small className="text-danger">{errors.confirmpassword.message}</small>}

            </div>
            <input
              type="submit"
              className={` btn text-white btn2 ${isValid && 'btn text-white btn1'} `}
              value="Reset Password"
              disabled = {!isValid}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
