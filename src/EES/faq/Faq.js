/* eslint-disable prettier/prettier */
import React from 'react';
import './Faq.css';
import img from './querybtn.png';
import { useState } from 'react';
import xmark from './xmark.svg';
import plusmark from './plus.svg';
import msg from './Vector.png';

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="faqs">
      <section className="sec">
        <h2 className="title">FAQs</h2>
        <div className="faq">
          <div className="left">
            <div>
              <img src={img} alt="buttonpng" border="0" id="learnmorebtn" onClick="." />
            </div>
            <div className="teaminfo">
              <div className="team">
                <div className="headi">
                  <img id="msgicon" src={msg} alt="" />
                  <h2 className="teamname">Co-Convenor</h2>
                </div>
                <h3>
                  <b>Bisesh Agarwal</b>
                  <br />
                  <p>bisesh.agarwal.ece20@itbhu.ac.in</p>
                </h3>
              </div>
              <div className="team">
                <div className="headi">
                  <img src={msg} alt="" id="msgicon" />
                  <h2 className="teamname">EA Team</h2>
                </div>
                <h3>
                  <b>Ayushi Gupta</b>
                  <br />
                  <p>ayushi.gupta.ece20@itbhu.ac.in</p>
                </h3>
                <h3>
                  <b>Ankit</b>
                  <br />
                  <p>ankit.student.ece20@itbhu.ac.in</p>
                </h3>
              </div>
              <div className="team">
                <div className="headi">
                  <img id="msgicon" src={msg} alt="" />
                  <h2 className="teamname">Marketing Team</h2>
                </div>
                <h3>
                  <b>Nishanth Gounder</b>
                  <br />
                  <p>nishanth.gounder.ece20@itbhu.ac.in</p>
                </h3>
              </div>
              <div className="team">
                <div className="headi">
                  <img id="msgicon" src={msg} alt="" />
                  <h2 className="teamname">PR Team</h2>
                </div>
                <h3>
                  <b>Avinash Singh</b>
                  <br />
                  <p>avinash.singh.ece20@itbhu.ac.in</p>
                </h3>
              </div>
            </div>
          </div>
          <div className="right">
            {/*  */}
            {data.map((item, i) => {
              return (
                <>
                  <div className="ques">
                    <div className="question" onClick={() => toggle(i)}>
                      <h3>{item.question}</h3>
                      <img src={selected === i ? xmark : plusmark} alt="" />
                      {/* <img src={plusmark} alt="" /> */}
                    </div>
                    <div className={selected === i ? 'ansshow' : 'ansshow hidden'}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </>
              );
            })}
            {/* /**/}
          </div>
        </div>
      </section>
    </div>
  );
};

const data = [
  {
    question: ' What if we were not able to attend the workshop on schedule?',
    answer: 'You can watch the recorded workshop on EES YouTube channel, but we recommend you to attend the workshop on time so that you can clear your all doubts in the workshop itself and get maximum Radianite points.'
  },
  {
    question: 'What will be the mode of workshops?',
    answer: 'First phase of workshop will be conducted in online mode. From January onwards the workshops will be conducted in offline mode.'
  },
  {
    question: 'Will there be any Prerequisites to attend the workshops?',
    answer: 'The only prerequisite for all the workshops is your enthusiasm. Don’t worry we will start everything from basics so that you can understand everything properly.'
  },
  {
    question: 'How these events will help us to get/prepare for our dream job.',
    answer:
      'Udyam comprises of both core end non-core events. Core events like Digisim, continuum, CommNet, I-chip and X-IoT-A comprises of core electronics topics which are important for interviews and help you get your dream job. Non-Core events like Mosaic, Devbits and Cassandra will teach you most important industry level skills required to get your dream job and will help you prepare your projects that you can mention in your resume for interviews. Also, you can get some great achievements to flex in your resume.  The winners of the events sometimes get direct internship opportunities at tech giants.'
  },
  {
    question: 'Will there be any participation fees for any event?',
    answer: 'No, the participation in all the events is free.'
  },
  {
    question: 'Will there be any entry fees for workshops?',
    answer: ' No, all the workshops are free to attend. You can also rewatch them later on EES official YouTube channel.'
  },
  {
    question: 'When will the events be conducted?',
    answer: ' The events will be conducted in the second week of April, from 7th to 9th April 2023. Final dates to be declared soon.'
  },
  {
    question: 'What will be the prizes for the event winners?',
    answer: ' Winners will get exciting vouchers, coupons and Internship opportunities at tech giants.'
  }
];

export default Faq;
