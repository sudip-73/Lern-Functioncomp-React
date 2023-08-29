import React, { useContext } from "react";
import CompD from "./CompD";
import { Appdata } from "./Usercontext/Appdata";

function CompC() {

    const info= useContext(Appdata);
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-warning text-white p-2">
              <p className="h3">Comp C</p>
                 <small>{JSON.stringify(info)}</small>
              <CompD info={info}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompC;
