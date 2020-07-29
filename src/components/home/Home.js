import React, { useState, useRef } from "react";
import SwipeableViews from "react-swipeable-views";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

import { emailRegEx } from "../../data/constants";

import classes from "./Home.module.scss";

function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [formTouched, setFormTouched] = useState(false);
  const passwordInputRef = useRef(null);
  const { push } = useHistory();

  const {
    register,
    handleSubmit,
    // triggerValidation,
    errors,
    setValue
    // clearError
  } = useForm();

  const handleNextButton = e => {
    e.preventDefault();
    setTabIndex(1);
  };

  const onFormKeyPress = () => {
    if (!formTouched) {
      setFormTouched(true);
    }
  };

  const onSubmit = data => {
    // handleLogin(data);
  };

  return (
    <div className={classes["home"]}>
      <form
        className={classes["form"]}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SwipeableViews index={tabIndex}>
          <div>
            <input
              autoFocus
              type="text"
              name="email"
              placeholder="Email"
              className={clsx(classes["form-input"], {
                [classes["form-input-error"]]: errors.email
              })}
              onKeyPress={onFormKeyPress}
              ref={register({
                required: "Required",
                pattern: {
                  value: emailRegEx,
                  message: "Invalid email address"
                }
              })}
              // onFocus={() => clearError("email")}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={clsx(classes["form-input"], {
                [classes["form-input-error"]]: errors.password
              })}
              ref={e => {
                register(e, {
                  required: "Required"
                });
                passwordInputRef.current = e;
              }}
              data-cy="password"
            />
          </div>
        </SwipeableViews>
        <div className={classes["button-container"]}>
          {tabIndex === 0 ? (
            <button
              className={classes["sign-in-button"]}
              onClick={handleNextButton}
            >
              Next
            </button>
          ) : (
            <button
              data-cy="sign-in"
              className={classes["sign-in-button"]}
              type="submit"
              onClick={() => push("/main-view")}
            >
              Sign In
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Home;
