import React from 'react';
import './Register.css';
// import { useState } from 'react';
import Collegelist from './college_list';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegisterLogo from './RegisterLogo';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit
    // watch,
    // formState: { errors }
  } = useForm();
  // const [isGSignedIn, setisGSignedIn] = useState(0);
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
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          toast.success('Registered Successfully', {
            theme: 'dark',
            position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1200
          });
        }, 1000);
        window.sessionStorage.setItem('registered_email', res.data.email);
        window.sessionStorage.setItem('profileData', JSON.stringify(res.data));
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
  // const onGoogleLoginSuccess = (res) => {
  //   console.log('SUCCESS!!! Current User: ', res);
  //   window.sessionStorage.setItem('profileData', JSON.stringify(res.profileObj));
  //   window.sessionStorage.setItem('tokenId', res.tokenId);
  //   toast.info('Please Wait', {
  //     theme: 'dark',
  //     position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_RIGHT,
  //     autoClose: 1200
  //   });

  //   const header = {
  //     Authorization: res.tokenId
  //   };
  //   axios({
  //     url: 'https://udyam.pythonanywhere.com/auth/google-login/',
  //     method: 'post',
  //     headers: { Authorization: window.sessionStorage.getItem('tokenId') },
  //     data: {
  //       email: res.profileObj.email
  //     }
  //   })
  //     .then((resp) => {
  //       console.log(resp);
  //       setTimeout(() => {
  //         toast.success(resp.data.message, {
  //           theme: 'dark',
  //           position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
  //           autoClose: 1200
  //         });
  //       }, 500);

  //       window.sessionStorage.setItem('registered_email', res.profileObj.email);
  //       navigate('/');
  //     })
  //     .catch((e) => {
  //       setTimeout(() => {
  //         toast.warning('Registeration is temporarily closed. We apologize for the inconvenience.', {
  //           theme: 'dark',
  //           position: window.innerWidth < 600 ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
  //           autoClose: 3000
  //         });
  //       }, 500);

  //       window.sessionStorage.setItem('registered_email', res.profileObj.email);
  //       navigate('/');
  //     });
  // };
  // const goBack = () => {
  //   window.history.back();
  // };
  return (
    <div className="registerPage">
      <div className="form-container">
        <div className="form"></div>

        <form action=" " onSubmit={handleSubmit((data) => postData(data))}>
          <h1>SIGN UP!</h1>
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
          <input type="text" {...register('referral')} placeholder="Referral" />
          <button type="submit" className="form-submit">
            <span>SIGN UP</span>
          </button>
        </form>
      </div>
      {window.innerWidth > 600 && (
        <div className="register_logo_cont">
          <RegisterLogo />
        </div>
      )}
    </div>
  );
};

export default Register;
