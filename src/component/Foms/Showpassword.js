import React, { Fragment, useState } from "react";

const Showpassword = () => {
    const [type , setType]=useState("password")
    
  const HendleClick=(e)=>{
  (type==="password") ? setType("text") : setType("password")
  } 
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header  bg-info">
                <p className="h3">Show Password</p>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <div class="input-group">
                     
<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"  onChange={HendleClick} />
  </div>
  <input type={type} class="form-control" aria-label="Text input with checkbox"/>
</div>


                    
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Showpassword;
