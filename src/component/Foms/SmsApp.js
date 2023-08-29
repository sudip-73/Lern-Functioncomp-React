import React, { useState } from 'react';

function SmsApp(props) {
const [count , setCount]=useState(100)

const HendleChange=(event)=>{
     setCount (100- event.target.value.length)
} 

    return (
        <div>
             <div className="container  mt-4">
             <div className="row">
                <div className="col-md-6">
               <div className="card">
                <div className="card-header bg-info">
                    <p className="h3"> SMS App</p>
                </div>
                <div className="card-body">
                    <form >
                        <textarea name="text" rows={6} className='form-control' onChange={HendleChange} maxLength={100}/>
                    </form>
                    <p className="h3 mt-3">Count Remaining: <span>{count}</span> </p>
                </div>
               </div>
                </div>
             </div>
             </div>
        </div>
    );
}

export default SmsApp;