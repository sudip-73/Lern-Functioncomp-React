import React, { Fragment, useState } from 'react';
 
const Wishmessage=()=> {
    const [conter,setCounter]=useState("hello")

    const sayGoodMor=()=>{
        setCounter("Good Morning");
    }
  
    const sayGoodevening=(value)=>{
  setCounter(value)
    }
    return (
        <Fragment>
              <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h1 className='p-2'>{conter}</h1>

                                <button onClick={sayGoodMor} className='btn btn-dark mx-2'>Good Morning</button>
                                <button onClick={()=>{setCounter('Good Afternoon')}} className='btn btn-danger mx-2'>Good Afternoon</button>
                                <button onClick={sayGoodevening.bind(this,'Good Evening')} className='btn btn-info mx-2 '>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </Fragment>
    );
}

export default Wishmessage;