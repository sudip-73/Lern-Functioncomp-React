import React, { Fragment, useState } from 'react';

const ServerCard=(props)=> {
    const [msj , setMsj] = useState("")

    const HendleChange=(event)=>{
     setMsj(event.target.value)
    }
    const HendleSubmit=(event)=>{
     event.preventDefault();
     props.toClientdata(msj)
    }




    return (
        <Fragment>
            <div className="card">
                <div className="card-header bg-danger text-white">
             <p className="h4">Server Card</p>
                </div>
                <div className="card-body">
               <form  onSubmit={HendleSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control' onChange={HendleChange}/>
                </div>
                <input type="submit" value="send" className='btn btn-success mt-1' />
               </form>
                </div>
                <div className="card-footer">
                    <p className="h5"> Client Card : {props.text}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default ServerCard;