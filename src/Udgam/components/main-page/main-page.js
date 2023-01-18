import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './main-page.css';
function UDGmain() {
  const arrimg = [
    'https://images.unsplash.com/photo-1673905088926-eab6023079d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1673876752003-8a689723b66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1673886138232-e792a8839827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1673847388812-c53e4873bffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  ];
  const names = ['kumar sonu', 'athar', 'nikhil', 'dhruv'];
  const [counter, setCounter] = useState(0);
  const arr = ['100vw', '0vw', '0vw', '0vw', '0vw', '0vw'];
  let interval = 0;
  useEffect(() => {
    interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      // setCounter(prevCounter);

      console.log(counter);
    }, 8000);

    return () => clearInterval(interval);
  }, [counter]);
  function clicked() {
    setCounter(counter + 1);
    clearInterval(interval);
  }

  return (
    <div id="main" onScroll={clicked}>
      <div className="title">
        <h1>UDGAM</h1>
      </div>
      <motion.div className="moving" key={counter} initial={{ x: '100vw', opacity: 0, scale: 0.6 }} animate={{ x: arr, opacity: 1, scale: 1 }} transition={{ duration: 3 }} onClick={clicked} style={{ backgroundImage: `url(${arrimg[(counter + 1) % arrimg.length]})` }}>
        {/* <img src={arrimg[(counter + 1) % arrimg.length]} /> */}
      </motion.div>
      <motion.div className="namesdiv" key={counter} initial={{ x: '100vw' }} animate={{ x: '0vw' }} transition={{ duration: 3 }}>
        <p>
          clicked by - <strong>{names[(counter + 1) % names.length]}</strong>
        </p>
      </motion.div>
      {/* <div className="static">
        <img src={arrimg[counter % arrimg.length]} />
        <div className="namesdiv">
          <p>
            clicked by - <strong>{names[counter % names.length]}</strong>
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default UDGmain;
