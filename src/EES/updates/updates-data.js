import React from 'react';
function Upddata(props) {
  return (
    <>
      <div className="update-paragraph udyam-background-light">
        <div className="update-information">
          <p>{props.data}</p>
        </div>
        <div className="event-update-link">
          <a className="udyam-background-dark" href="#">
            Register
          </a>
        </div>
        <br style={{ clear: 'both' }} />
      </div>
    </>
  );
}
export default Upddata;
