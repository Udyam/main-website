import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './main-page.css';
function UDGmain() {
  const arrimg = [
    'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRhcmslMjBiYWNrZ3JvdW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1631943406801-ba6ccfa4f682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1668595473727-7c00beaf98bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
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
      <motion.div className="moving" key={counter} initial={{ x: '100vw', opacity: 0, scale: 0.6 }} animate={{ x: arr, opacity: 1, scale: 1 }} transition={{ duration: 3 }} onClick={clicked}>
        <img src={arrimg[(counter + 1) % arrimg.length]} />
      </motion.div>
      <motion.div className="moving namesdiv" key={counter} initial={{ x: '100vw' }} animate={{ x: '0vw' }} transition={{ duration: 3 }}>
        <p>
          clicked by - <strong>{names[(counter + 1) % names.length]}</strong>
        </p>
      </motion.div>
      <div className="static">
        <img src={arrimg[counter % arrimg.length]} />
        <div className="namesdiv">
          <p>
            clicked by - <strong>{names[counter % names.length]}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UDGmain;
