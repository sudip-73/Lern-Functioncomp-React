import React from "react";

function CompD(props) {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-secondary text-white p-3">
              <p className="h3">Comp D</p>
              <small>{JSON.stringify(props.data)}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompD;
