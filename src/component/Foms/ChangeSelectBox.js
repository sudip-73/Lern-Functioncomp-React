import React, { useState } from 'react';

function ChangeSelectBox() {
    const [msg ,setMsg]=useState("")

    const HendleChange=(event)=>{
     setMsg(event.target.value)
    }
    return (
        <div>
             <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header  bg-info">
                                <p className="h3">ChnageSelectBox</p>
                            </div>
                            <div className="card-body">
                              <form>
                                <div className="farm-group">
                               <div className="row">
                                <div className="col-md-5 text-center">
                                     <select className='form-control' onChange={HendleChange}>
                                        <option value="">Select On Box</option>
                                        <option value="React JS">React JS</option>
                                        <option value="Next Js">Next Js</option>
                                        <option value="Node js">Node js</option>
                                        <option value="Veu Js">Veu Js</option>
                                     </select>
                                </div>
                                <div className="col-md-2 text-center">
                                        <p className="h4">{msg}</p>  
                                </div>
                                </div>
                               </div>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default ChangeSelectBox;