import React, { useState } from "react";
import CompB from "./CompB";

function CompA() {
    const [data , setData] = useState({
        auth : "Sudip",
        age : "25"
    })
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-danger text-white p-2">
              <p className="h3">Comp A</p>
                 <small>{JSON.stringify(data)}</small>
              <CompB data={data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompA;
