import React, { Fragment } from 'react';
import { GoogleLogin } from 'react-google-login';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const scope = 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read';
const clientId = process.env.REACT_APP_CLIENT_ID;

const GoogleButton = (props) => {
  const navigate = useNavigate();
  const onGoogleLoginSuccess = (res) => {
    console.log('SUCCESS!!! Current User: ', res);
    window.sessionStorage.setItem('profileData', JSON.stringify(res.profileObj));
    window.sessionStorage.setItem('tokenId', res.tokenId);
    window.sessionStorage.setItem('imageUrl', res.profileObj.imageUrl);
    // console.log('res.profileObj: ', res);
    axios({
      url: 'https://udyam.pythonanywhere.com/auth/google-login/',
      method: 'post',
      headers: { Authorization: res.tokenId },
      data: {
        email: res.profileObj.email
      }
    })
      .then((res) => {
        console.log('res: ', res);
        if (res.status === 200) {
          window.sessionStorage.setItem('registered_email', res.data.email);
          window.sessionStorage.setItem('profileData', JSON.stringify(res.data));
          toast.success('Login was successfull!', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1200
          });
          console.log('stored Data', JSON.parse(window.sessionStorage.getItem('profileData')));
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warning('Your registeration is incomplete.', {
          theme: 'dark',
          position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000
        });
      });
  };

  const onGoogleLoginFailure = (res) => {
    console.log('FAILURE!!! res: ', res);
  };

  return (
    <>
      {window.sessionStorage.getItem('registered_email') == null ? (
        <GoogleLogin
          theme="dark"
          accessType="online"
          disabled={false}
          client_id={clientId} // your Google app client ID
          buttonText="Sign in with Google"
          onSuccess={onGoogleLoginSuccess} // perform your user logic here
          onFailure={onGoogleLoginFailure} // handle errors here
          cookiePolicy={'single-host-origin'}
          scope={scope}
          render={(renderProps) => (
            <div className="menu-text" style={{ display: 'flex' }} onClick={renderProps.onClick}>
              {props.initialHTML}
            </div>
          )}
        />
      ) : (
        <>{props.laterHTML}</>
      )}
    </>
  );
};

export default GoogleButton;
