import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './main-page.css';
function UDGmain() {
  const arrimg = [
    'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1485237254814-0003b25e5672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  ];
  const names = ['kumar sonu', 'athar', 'nikhil', 'dhruv'];
  const [counter, setCounter] = useState(0);
  // const arr = ['100vw', '0vw', '0vw', '0vw', '0vw', '0vw'];
  let interval = 0;
  useEffect(() => {
    interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      // setCounter(prevCounter);

      console.log(counter);
    }, 7000);

    return () => clearInterval(interval);
  }, [counter]);
  function clicked() {
    setCounter(counter + 1);
    clearInterval(interval);
  }

  return (
    <div id="main-udgam" onClick={clicked}>
      <div className="title-udgam">UDGAM</div>
      <motion.div className="moving" key={counter} initial={{ y: '100vh' }} animate={{ y: '0vh' }} transition={{ duration: 2, ease: 'easeInOut' }} style={{ backgroundImage: `url(${arrimg[(counter + 1) % arrimg.length]})` }}>
        {/* <img src={arrimg[(counter + 1) % arrimg.length]} /> */}
      </motion.div>
      <motion.div className="namesdiv" key={counter} initial={{ x: '50vw', opacity: 0 }} animate={{ x: '30vw', opacity: 1 }} transition={{ duration: 3 }}>
        <p>
          clicked by - <strong>{names[(counter + 1) % names.length]}</strong>
        </p>
      </motion.div>
      <div className="moving " style={{ backgroundImage: `url(${arrimg[counter % arrimg.length]})`, zIndex: '0' }}></div>
    </div>
  );
}

export default UDGmain;
