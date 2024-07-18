import React from 'react'
import "../assets/css/Login.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./ShimmerLogin.css"

function ShimmerLogin() {
    return (
        <div className="main-content">
        <SkeletonTheme highlightColor="#c8bced"/>
          <div className="loginForm">
            <Skeleton circle={true} height={100} width={100}/>
            <h1><Skeleton/></h1>
  
            <div className="formItems">
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </div>
            <div className="otherItems">
              <div className="forgot">
                <a href=""> <Skeleton/></a>
                <a href=""> <Skeleton/></a>
              </div>
  
              <p>
              <Skeleton/>
              </p>
              <p className="terms">
              <Skeleton/>
              </p>
            </div>
          </div>
  
      
      </div>
      );
    }

export default ShimmerLogin
