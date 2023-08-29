import React, { Fragment, useState } from 'react';

const ChangeUsername=()=> {
    const [message,setMassage]=useState("");


    const HendlChange=(event)=>{
       setMassage(event.target.value)
    }
    return (
        <Fragment>
               <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white" >
                                <p className="h4">Change Username</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className='form-control'  placeholder='Username' onChange={HendlChange}/>
                                    </div>
                                </form>
                                    <p className="h3 mt-3">{message}</p> 
                            </div> 
                        </div>
                    </div>
                </div>
               </div>
        </Fragment>
    );
}

export default ChangeUsername;