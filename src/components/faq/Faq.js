/* eslint-disable prettier/prettier */
import React from 'react';
import './Faq.css';
import img from './button.png';
import { useState } from 'react';
import xmark from './xmark.svg';
import plusmark from './plus.svg';

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
              <div className="wanttoknow">
                <h1>want to</h1>
                <h1>know</h1>
                <h1>more ?</h1>
              </div>
              {/* <button type="submit"> */}
              <img src={img} alt="buttonpng" border="0" id="learnmorebtn" onClick="." />
              {/* </button> */}
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
                    <div className={selected === i ? 'ans show' : 'ans'}>
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
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
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
  },
  {
    question: 'How do i cancel my trial before it ends?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  },
  {
    question: 'Can I participate in more than 3 events?',
    answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ulla inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur accusantium temporibus omnis facere eum. Adipisci, nihil'
  }
];

export default Faq;

/*
<div className="ques">
              <div className="question">
                <h3>What is react JS ?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
       
            <div className="ques">
              <div className="question">
                <h3>What is CSS Bootstrap ?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
       
            <div className="ques">
              <div className="question">
                <h3>What is Lorem ipsum dolor sit ?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
       
            <div className="ques">
              <div className="question">
                <h3>What is Lorem ipsum dolor?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
    
            <div className="ques">
              <div className="question">
                <h3>How Lorem ipsum dolor sit amet ?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
    
            <div className="ques">
              <div className="question">
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing.?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
    
            <div className="ques">
              <div className="question">
                <h3>why Lorem ipsum dolor sit amet consectetur. ?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
 
            <div className="ques">
              <div className="question">
                <h3>how Lorem ipsum dolor sit amet consectetur. ?</h3>
                <img src={plusmark} />
              </div>
              <div className="ans">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore hic ullam
                  inventore, earum ex aut in aliquid eaque pariatur rerum maiores consectetur
                  accusantium temporibus omnis facere eum. Adipisci, nihil{' '}
                </p>
              </div>
            </div>
*/
