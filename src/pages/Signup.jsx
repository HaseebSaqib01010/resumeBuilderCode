import React, { useEffect, useState } from "react";
import logoImage from "../assets/images/loginLogo.png";
import ImageSec from "../assets/images/signupImg.jpg";
import "../assets/css/Signup.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

function Signup() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-content">
      <SkeletonTheme baseColor="lightgrey" highlightColor="white">
        <div className="signupForm" style={{ backgroundColor: "white" }}>
          <div className="logoAndHeading">
            {isLoading ? (
              <Skeleton width={100} height={100} circle={true} style={{margin:"20px"}}/>
            ) : (
              <img src={logoImage} alt="Logo" className="loginLogo" />
            )}

            {isLoading ? (
              <Skeleton width={1200} height={50} style={{margin:"40px"}} />
            ) : (
              <h1>Join Resume Builder</h1>
            )}

            {isLoading ? (
              <Skeleton width={1200} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <p className="subHeading">Sign up for free!</p>
            )}
          </div>

          <div className="formItems">
            {isLoading ? (
              <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <input type="text" placeholder="Email" />
            )}

            {isLoading ? (
              <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
            )}

            {isLoading ? (
              <Skeleton width={400} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <button type="button">Create account</button>
            )}

            {isLoading ? (
              <Skeleton width={200} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <p className="signupTerms">
                By clicking <b>Create account</b>, you agree to Linktree's{" "}
                <a href="">Terms and Conditions</a> and confirm you have read
                our <a href="">Privacy Notice.</a> You may receive offers, news,
                and updates from us.
              </p>
            )}

            {isLoading ? (
              <Skeleton width={100} height={50} style={{margin:"20px", marginTop:"0px"}} />
            ) : (
              <h2 className="or">OR</h2>
            )}
          </div>

          <div className="signupOtherBtn">
            {isLoading ? (
              <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <button type="button">Sign up with Google</button>
            )}

            {isLoading ? (
              <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <button type="button">Sign up with Apple</button>
            )}
          </div>

          {!isLoading && (
            <div className="alreadyAccount">
              <p>
                Already have an account? <NavLink to="/login-page">Log in</NavLink>
              </p>
              <p className="lastP">
                This site is protected by reCAPTCHA and the{" "}
                <a href="">Google Privacy Policy</a> and{" "}
                <a href="">Terms of Service</a> apply.
              </p>
            </div>
          )}
        </div>
      </SkeletonTheme>

      <SkeletonTheme baseColor="lightGrey" highlightColor="white">
        <div className="imageSec">
          {isLoading ? (
            <Skeleton width={800} height={1000} />
          ) : (
            <img src={ImageSec} alt="" />
          )}
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default Signup;
