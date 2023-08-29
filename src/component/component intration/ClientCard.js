import React, { Fragment, useState } from 'react';

const ClientCard=(props)=> {
const [msj , setMsj] = useState("")

const HendleChange=(event)=>{
 setMsj(event.target.value)
}
const HendleSubmit=(event)=>{
 event.preventDefault();
 props.pushdata(msj)
}
    return (
        <Fragment>
            <div className="card">
                <div className="card-header bg-secondary text-white">
             <p className="h4">Client Card</p>
                </div>
                <div className="card-body">
               <form onSubmit={HendleSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control' onChange={HendleChange} />
                </div>
                <input type="submit" value="send" className='btn btn-info mt-1' />
               </form>
                </div>
                <div className="card-footer">
                    <p className="h5">Server Card :{props.sms} </p>
                </div>
            </div>
        </Fragment>
    );
}

export default ClientCard;