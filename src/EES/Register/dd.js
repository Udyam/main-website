import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import logo from '../images/eeslogored.png';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../../animated button/AnimatedButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collegelist from './collegelist';

const clientId = process.env.REACT_APP_CLIENT_ID;
const scope = 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read';

export default function Form() {
  const animateOncardChange = () => {
    document.getElementsByClassName('register')[0].animate(
      [
        {
          transform: 'rotate(0) scale(0.5)',
          color: '#000'
        },
        { color: '#431236', offset: 0.3 },
        {
          transform: 'rotateY(360deg) scale(1)',
          color: '#000'
        }
      ],
      {
        duration: 300
        // iterations: Infinity,
      }
    );
  };
  const navigate = useNavigate();
  const { register, handleSubmit
  } = useForm();
  const [isGSignedIn,] = useState(0);
  const profileData = window.sessionStorage.getItem('profileData');
  const postData = (profdata) => {
    console.log(profdata);
    const mobile = Number(profdata.phone_number);
    const year = profdata.year;
    if (isNaN(mobile)) {
      console.log('wrong number');
      toast.error('Invalid phone number', {
        theme: 'dark',
        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
        autoClose: 1200
      });
      return;
    }
    if (!['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'].includes(year)) {
      console.log('invalid year');
      toast.error('Invalid year', {
        theme: 'dark',
        position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
        autoClose: 1200
      });
      return;
    }
    axios({
      url: 'https://udyam.pythonanywhere.com/auth/google-login/',
      method: 'post',
      headers: { Authorization: window.sessionStorage.getItem('tokenId') },
      data: profdata
    })
      .then((resp) => {
        console.log(resp);

        setTimeout(() => {
          toast.success('Registered Successfully', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1200
          });
        }, 1000);
        window.sessionStorage.setItem('registered_email', profdata.email);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.response.data);
        Object.keys(err.response.data).forEach(function (key) {
          toast.error(key + ' : ' + err.response.data[key], {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
            autoClose: 1200
          });
        });
      });
  };

  const goBack = () => {
    window.history.back();
  };

  const onGoogleLoginSuccess = (res) => {
    console.log('SUCCESS!!! Current User: ', res);
    window.sessionStorage.setItem('profileData', JSON.stringify(res.profileObj));
    window.sessionStorage.setItem('tokenId', res.tokenId);
    toast.info('Please Wait', {
      theme: 'dark',
      position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
      autoClose: 1200
    });
    axios({
      url: 'https://udyam.pythonanywhere.com/auth/google-login/',
      method: 'post',
      headers: { Authorization: window.sessionStorage.getItem('tokenId') },
      data: {
        email: res.profileObj.email
      }
    })
      .then((resp) => {
        console.log(resp);
        setTimeout(() => {
          toast.success(resp.data.message, {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1200
          });
        }, 500);

        window.sessionStorage.setItem('registered_email', res.profileObj.email);
        navigate('/');
      })
      .catch(() => {
        setTimeout(() => {
          toast.warning('Registeration is temporarily closed. We apologize for the inconvenience.', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000
          });
        }, 500);

        window.sessionStorage.setItem('registered_email', res.profileObj.email);
        navigate('/');
        // console.log(e);
        // setisGSignedIn(1);
        // setTimeout(() => {
        //   toast.success("Login Success", {
        //     theme: "dark",
        //     position:
        //       window.innerWidth < 600
        //         ? toast.POSITION.BOTTOM_CENTER
        //         : toast.POSITION.TOP_RIGHT,
        //     autoClose: 1200,
        //   });
        // }, 1000);
      });
  };

  const onGoogleLoginFailure = (res) => {
    console.log('FAILURE!!! res: ', res);
    toast.error('Login Failure', {
      theme: 'dark',
      position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1200
    });
  };

  useEffect(() => {
    animateOncardChange();
  }, [isGSignedIn]);

  return (
    <>
      <div className="bg">
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
      <div className="refisterForm">
        <div className="register">
          <a href="#" className="close" onClick={goBack}></a>
          <div className="col-left">
            {isGSignedIn === 0 && (
              <>
                <h1>
                  <strong className="register-heading">Sign in</strong>
                </h1>
                <div className="g-sign-in-button">
                  <div className="register-button">
                    <GoogleLogin
                      theme="dark"
                      accessType="online"
                      disabled={false}
                      client_id={clientId} // your Google app client ID
                      buttonText="Sign in with Google"
                      onSuccess={onGoogleLoginSuccess} // perform your user logic here
                      onFailure={onGoogleLoginFailure} // handle errors here
                      cookiePolicy={'single-host-origin'}
                      isSignedIn={true}
                      scope={scope}
                    />
                  </div>
                </div>
                <h6 className="mt-4" style={{ color: 'white' }}>
                  Don't worry your data is kept confidential with us.
                  <br></br>By continuing further you are subscribing to our newsletter.{' '}
                </h6>
                <ToastContainer className="form-toast" />
              </>
            )}

            {isGSignedIn === 1 && (
              <>
                <h1>
                  <strong className="register-heading">Register</strong>
                </h1>
                <form id="form" className="flex flex-col" onSubmit={handleSubmit((data) => postData(data))}>
                  <input type="text" {...register('name')} value={JSON.parse(profileData).givenName} placeholder={JSON.parse(profileData).givenName} readOnly />
                  <input type="text" {...register('email')} value={JSON.parse(profileData).email} placeholder={JSON.parse(profileData).email} readOnly />
                  <input type="text" {...register('phone_number', { valueAsNumber: true })} placeholder="Whatsapp Number" pattern="^[6-9]\d{9}$" title="A valid number is required" required />
                  <input type="text" list="all_colleges" {...register('college_name')} placeholder="College/Institute" name="college_name" required />
                  <Collegelist id="all_colleges" />
                  <select id="years" {...register('year')} required>
                    <option id="select-heading" value="Choose Year" disabled selected hidden>
                      Year
                    </option>
                    <option value="FIRST">First</option>
                    <option value="SECOND">Second</option>
                    <option value="THIRD">Third</option>
                    <option value="FOURTH">Fourth</option>
                    <option value="FIFTH">Fifth</option>
                  </select>
                  <input type="text" {...register('branch')} placeholder="Branch" required />
                  <AnimatedButton className="signinbtn" text={'Register'} />
                  <ToastContainer className="form-toast" />
                </form>
              </>
            )}
          </div>
          <div className="col-right">
            <img className="formimg" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
