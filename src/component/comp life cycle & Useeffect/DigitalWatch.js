// import React, { useEffect, useState } from 'react';

function DigitalWatch() {
const [currenttime , setCurrentTime]=useState(new Date().toLocaleTimeString())

// useEffect(()=>{
//     console.log("hellow")
//     let timer = setInterval(()=>{
//         setCurrentTime(new Date().toLocaleTimeString())
//     },1000)
//     return()=>{

//     }
// },[timer])
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                <p className="h2">DIGITAL WATCH</p>
                            </div>
                            <div className="card-body">
                            <p className="h3">Time : {currenttime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigitalWatch;