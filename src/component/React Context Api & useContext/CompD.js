import React, { useContext } from "react";
import { UserContext } from "./Usercontext/UserContext";

function CompD(props) {
    let data = useContext(UserContext)
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-secondary text-white p-3">
              <p className="h3">Comp D</p>
             <small>{JSON.stringify(data)}</small>
             <small>{JSON.stringify(props.info)}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompD;
