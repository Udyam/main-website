import React from 'react';
function Upddata(props) {
  return (
    <>
      <div className={props.classi1}>
        <div className="update-information">
          <h2>{props.title}</h2>
          {/* <p>{props.date}</p> */}
          <p>{props.description}</p>
        </div>
        <div className="event-update-link">
          <a className={props.classi2} href={props.link}>
            Link →
          </a>
        </div>
        <br style={{ clear: 'both' }} />
      </div>
    </>
  );
}
export default Upddata;
