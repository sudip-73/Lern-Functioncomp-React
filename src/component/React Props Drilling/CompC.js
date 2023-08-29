import React from "react";
import CompD from "./CompD";

function CompC(props) {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-warning text-white p-2">
              <p className="h3">Comp C</p>
              <small>{JSON.stringify(props.data)}</small>
              <CompD data={props.data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompC;
