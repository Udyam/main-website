/* eslint-disable prettier/prettier */
import './updates.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Upddata from './updates-data';
function Updates() {
  // const [arr, setArr] = useState([]);
  let emptarr = [];
  const [mashalarr, setmashal] = useState([]);
  const [udyamarr, setudyam] = useState([]);
  const [udgamarr, setudgam] = useState([]);
  async function fetchData1() {
    try {
      const response = await axios.get('https://udyam.pythonanywhere.com/api/updates/Udyam?format=json');
      // setArr(response.data);
      emptarr = [];
      for (let i = 0; i < response.data.length; i++) {
        emptarr.push(<Upddata title={response.data[i].title} description={response.data[i].description} date={response.data[i].date} link={response.data[i].link} classi1="update-paragraph udyam-background-light" classi2="udyam-background-dark" />);
        setudyam(emptarr);
      }
      console.log(response.data);
      // console.log(arr);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData1();
  }, []);
  async function fetchData2() {
    try {
      const response = await axios.get('https://udyam.pythonanywhere.com/api/updates/Udgam?format=json');
      // setArr(response.data);
      emptarr = [];
      for (let i = 0; i < response.data.length; i++) {
        emptarr.push(<Upddata title={response.data[i].title} description={response.data[i].description} date={response.data[i].date} link={response.data[i].link} classi1="update-paragraph udgam-background-light" classi2="udgam-background-dark" />);
        setudgam(emptarr);
      }
      console.log(response.data);
      // console.log(arr);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData2();
  }, []);

  async function fetchData3() {
    try {
      const response = await axios.get('https://udyam.pythonanywhere.com/api/updates/Mashal?format=json');
      // setArr(response.data);
      emptarr = [];
      for (let i = 0; i < response.data.length; i++) {
        emptarr.push(<Upddata title={response.data[i].title} description={response.data[i].description} date={response.data[i].date} link={response.data[i].link} classi1="update-paragraph mashal-background-light" classi2="mashal-background-dark" />);
        setmashal(emptarr);
      }
      console.log(response.data);
      // console.log(arr);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData3();
  }, []);

  return (
    <>
      <section className="updates-main-container">
        <div className="updates-udyam-head-container udyam-background-dark">
          <h1>UDYAM UPDATES</h1>
        </div>
        <div className="updates-udyam-content udyam-background-dark">
          <div className="update-content">{udyamarr}</div>
        </div>

        <div className="updates-udgam-head-container udgam-background-dark">
          <h1>UDGAM UPDATES</h1>
        </div>
        <div className="updates-udgam-content udgam-background-dark">
          <div className="update-content">{udgamarr}</div>
        </div>

        <div className="updates-mashal-head-container mashal-background-dark">
          <h1>MASHAL UPDATES</h1>
        </div>
        <div className="updates-mashal-content mashal-background-dark">
          <div className="update-content">{mashalarr}</div>
        </div>
      </section>
    </>
  );
}

export default Updates;
