import React, { useState, useRef, useEffect, useContext } from "react";
import SwipeableViews from "react-swipeable-views";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import { emailRegEx } from "../../data/constants";
import { GET_ALL_LOCATIONS } from "queries/queries";
import LocationsContext from "contexts/locations-context/LocationsContext";

import classes from "./Home.module.scss";

function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [formTouched, setFormTouched] = useState(false);
  const passwordInputRef = useRef(null);
  const { push } = useHistory();
  const [getAllLOcations, { loading, data, error }] = useLazyQuery(
    GET_ALL_LOCATIONS
  );
  const { locations, setLocations } = useContext(LocationsContext);

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

  const handleSignIn = () => {
    getAllLOcations({ variables: {} });
  };

  useEffect(() => {
    if (data) {
      setLocations(data.ClientsInfo);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (locations.length) {
      push("/main-view");
    }
  }, [locations]);

  return (
    <div className={classes["home"]}>
      {!loading && locations.length === 0 ? (
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
                onClick={handleSignIn}
              >
                Sign In
              </button>
            )}
          </div>
        </form>
      ) : loading && locations.length === 0 ? (
        <div className={classes["loader"]}>LOADING LOCATIONS DATA...</div>
      ) : null}
    </div>
  );
}

export default Home;
