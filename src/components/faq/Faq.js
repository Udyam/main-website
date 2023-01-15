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
                  <img src={msg} alt="" id="msgicon" />
                  <h2 className="teamname">EA Team</h2>
                </div>
                <h3>Ayushi Gupta</h3>
                <p>ayushi.gupta.ece20@itbhu.ac.in</p>
                <h3>Ankit</h3>
                <p>ankit.student.ece20@itbhu.ac.in</p>
              </div>
              <div className="team">
                <div className="headi">
                  <img id="msgicon" src={msg} alt="" />
                  <h2 className="teamname">Marketing Team</h2>
                </div>
                <h3>Nishanth Gounder</h3>
                <p>nishanth.gounder.ece20@itbhu.ac.in</p>
              </div>
              <div className="team">
                <div className="headi">
                  <img id="msgicon" src={msg} alt="" />
                  <h2 className="teamname">PR Team</h2>
                </div>
                <h3>Avinash Singh</h3>
                <p>avinash.singh.ece20@itbhu.ac.in</p>
              </div>
              <div className="team">
                <div className="headi">
                  <img id="msgicon" src={msg} alt="" />
                  <h2 className="teamname">Co-Convenor</h2>
                </div>
                <h3>Bisesh Agarwal</h3>
                <p>bisesh.agarwal.ece20@itbhu.ac.in</p>
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
    question: 'Who developed JavaScript, and what was the first name of JavaScript?',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihilLorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'What is one drive?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'How much OneDrive storage do I get with MS?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'What happens to the files ?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'which udyam event is best?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'Should I use my existing account ?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'Do I need to keep my password safe?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'what is the procedure to change password?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'What happens when my trial ends?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  }
  // {
  //   question: 'How do i cancel my trial before it ends?',
  //   answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  // },
  // {
  //   question: 'Can I participate in more than 3 events?',
  //   answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  // }
];

export default Faq;
