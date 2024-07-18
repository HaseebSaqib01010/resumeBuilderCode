import React, { useEffect, useState } from 'react';
import logoImage from '../assets/images/loginLogo.png';
import ImageSec from '../assets/images/imgSec.jpg';
import '../assets/css/Login.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { NavLink, useNavigate } from 'react-router-dom'; 

function Login() {
  const [isLoading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const handleLogin = () => {
    if (username && password) {
      navigate('/dashboard');
    }
    else{
      alert("Enter Username and Password");
    }
  };
  return (
    <div className='main-content'>
      <SkeletonTheme baseColor="lightGrey" highlightColor="white">
        <div className="loginForm">
          {isLoading ? (
            <Skeleton width={100} height={100} circle={true} style={{float:"left", margin:"20px"}}/>
          ) : (
            <img src={logoImage} alt="Logo" className='loginLogo' />
          )}
          {isLoading ? (
            <Skeleton width={1200} height={50} style={{margin:"40px"}} />
          ) : (
            <h1>Login to Resume Builder</h1>
          )}
          <div className='formItems'>
            {isLoading ? (
              <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <input type="text" placeholder='UserName'  value={username} onChange={(e) => setUsername(e.target.value)} required/>
            )}
            {isLoading ? (
              <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <input type="password" name="password" id="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}style={{ marginBottom: "20px" }} required/>
            )}
            {isLoading ? (
              <Skeleton width={400} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <button type='button' className='loginBtn' onClick={handleLogin}>Log in</button>
            )}
          </div>
          <div className='alreadyAccount'>
            {isLoading ? (
              <Skeleton width={400} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <div className='forgot'>
              <NavLink to = "/forgot-password">Forgot password?</NavLink>
            
              </div>
            )}
            {isLoading ? (
              <Skeleton width={400} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <p>Don't have an account?<a href="/signup-page">Signup</a></p>
            )}
            {isLoading ? (
              <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <p className='terms'>This site is protected by reCAPTCHA and the<a href="">Google Privacy Policy</a>and<a href="">Terms of Service</a>apply.</p>
            )}
          </div>
        </div>
      </SkeletonTheme>

      <SkeletonTheme baseColor="lightGrey" highlightColor="white">
        <div className="imageSec">
          {isLoading ? (
            <Skeleton height={1000} width={700}/>
          ) : (
            <img src={ImageSec} alt="" />
          )}
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default Login;
