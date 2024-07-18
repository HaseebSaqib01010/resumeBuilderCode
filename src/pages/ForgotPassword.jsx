import React, { useEffect, useState } from 'react';
import logoImage from '../assets/images/loginLogo.png';
import ImageSec from '../assets/images/imgSec.jpg';
import '../assets/css/Forgot.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='main-content'>
      <SkeletonTheme baseColor="lightGrey" highlightColor="white">
        <div className="forgotPage">
          {isLoading ? (
            <Skeleton width={100} height={100} circle={true} style={{float:"left", margin:"20px"}}/>
          ) : (
            <img src={logoImage} alt="Logo" className='loginLogo' />
          )}
          {isLoading ? (
            <Skeleton width={1200} height={50} style={{margin:"40px", marginTop:"200px"}} />
          ) : (
            <h1>Reset your password</h1>
          )}
           
          {isLoading ? (
            <Skeleton width={800} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
                <div className='forgotTerms'>
                <p>If you signed up with a username and password, reset your password below.</p>
                <p>If you signed up using your phone number, Google or Apple, get help accessing your account <a href="" className='here'>here.</a></p>
                </div>
             
           )}
            {/* {isLoading ? (
              <Skeleton height={20} width={400} style={{marginLeft:"10px"}}/>
            ) : (
              
            )} */}
            {isLoading ? (
              <Skeleton width={600} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
            <div className='others'>
            <input type="text" placeholder='UserName' />
            {isLoading ? (
              <Skeleton width={200} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
              <button type="button" className='resetBtn'>Reset password</button>
            )}
          
            </div>
          
            )}
            {isLoading ? (
              <Skeleton width={400} height={50} style={{margin:"40px", marginTop:"0px"}} />
            ) : (
                <button className='loginBackBtn'> <Link to ="/back-to-login-page"><LoginIcon/> Back to login</Link></button>
            )}
          
          </div>
        
          
         
      
      </SkeletonTheme>

    
    </div>
  )
}

export default ForgotPassword;
