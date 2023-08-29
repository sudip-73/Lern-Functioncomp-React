import React, { useState } from "react";
import CompB from "./CompB";
import { UserContext } from "./Usercontext/UserContext";
import { Appdata } from "./Usercontext/Appdata";


function CompA() {
    
    const [data , setData] = useState({
        auth : "Sudip",
        age : "25"
    })
    const [info , setInfo]=useState({
        learn : "react",
        topic :"usecontext"
    })
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-danger text-white p-2">
              <p className="h3">Comp A</p>
              <small>{JSON.stringify(data)}</small>
                 <UserContext.Provider value={data}>
<Appdata.Provider value={info}>
<CompB />
</Appdata.Provider>
                 </UserContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompA;
