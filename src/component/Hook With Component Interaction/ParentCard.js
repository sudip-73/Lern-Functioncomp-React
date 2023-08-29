import React, { Fragment, useState } from 'react';
import ChildCard from './ChildCard';

const ParentCard=()=> {
    const [name , setName]= useState("")
    const [data,setData]=useState("")
 
    const HendleToparent=(data)=>{
        setData(data)
    }
    const HendleChange=(event)=>{
        setName (event.target.value)
    }
    
    return (
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card m-3">
                            <div className="card-body bg-success text-white">
                                      <p className="h3">Parent Component</p>

                                      <input type="text" value={name} className='mt-2' onChange={HendleChange} />
                                          <p className="h3">{data}</p>
                                      <ChildCard name={name}   Hendleparent={HendleToparent}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ParentCard;