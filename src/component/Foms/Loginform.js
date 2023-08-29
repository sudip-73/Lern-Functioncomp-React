import React, { Fragment, useState } from "react";

function Loginform() {
  const [type, setType] = useState({
    user: "",
    password: "",
  });

  const HendleChange=(event)=>{
     setType((prevState)=>{
        return{
            ...prevState,
            [event.target.name]:event.target.value
        }
     })
  }

  const SubmitHendler=(event)=>{
   event.preventDefault();
   console.log(type)
  }
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card header bg-secondary text-warning">
                <p className="h3 m-3">Login Form</p>
              </div>
              <div className="card-body">
                <form onSubmit={SubmitHendler}>
                  <div className="form-group">
                    <div className="mb-2">
                      <input
                        type="text"
                        name="user"
                        placeholder="Enter Username"
                        className="form-control"
                        value={type.user}
                        onChange={HendleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="form-control"
                        value={type.password}
                        onChange={HendleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-info"
                      />
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
}

export default Loginform;
