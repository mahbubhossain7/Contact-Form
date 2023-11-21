import React from "react";

const FormControl = () => {
  return (
    <div className="form-control">
      <div className="form-content">
          <div className="top-btn">
            <button className="same">VIA SUPPORT CHAT</button>
            <button className="same">VIA CALL</button>
          </div>
             
             <div className="Email-btn">
              <button className="ebtn">VIA EMAIL FORM</button>
             </div>
           <div className="inputFiled">
              <input type="Name" className="inpu" placeholder="Name"/><br />
              <input type="Email" className="inpu" placeholder="Email"/><br />
              <input type="Text" className="inpu tfield" placeholder="Text"/>
           </div>
           <div className="submitbtn">
             <button className="su-btn">Submit</button>
           </div>
      </div>
               <div className="form-pic">
                   <img src="/images/Service 24_7-pana 1.png" alt="Img Not Found" />
               </div>
    </div>
  );
};

export default FormControl;
