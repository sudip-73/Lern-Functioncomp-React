import React from "react";
import CompC from "./CompC";

function CompB(props) {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-info text-white p-2">
              <p className="h3">Comp B</p>
                <small>{JSON.stringify(props.data)}</small>
              <CompC data={props.data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompB;
