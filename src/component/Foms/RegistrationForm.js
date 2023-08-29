import React, { Fragment, useState } from 'react';

const RegistrationForm=()=>{
const [type , setType]=useState({
    register : {
     user:"",
    email:"",
    password:"",
    terms : false
    }
})
const HendleChange = (event)=>{
   setType({
       register :{
        ...type.register,
       [event.target.name]: event.target.value
       }
   })
}
const HendleCheck=(event)=>{
setType({
    register:{
        ...type.register,
        [event.target.name] : event.target.checked
    }
})
}

const SubmitHendler=(event)=>{
 event.preventDefault();
 console.log(type)
}
    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                     <p className="h3">Registration</p>
                            </div>
                            <div className="card-body">
                          <form onSubmit={SubmitHendler}>
                               <div className="form-group mb-2">
                                <input type="text" name="user" className='form-control' placeholder='Enter Username' value={type.register.user} onChange={HendleChange}/>
                               </div>
                               <div className="form-group mb-2">
                                <input type="email" name="email" className='form-control' placeholder='Enter Email' value={type.register.email} onChange={HendleChange}/>
                               </div>
                               <div className="form-group mb-2">
                                <input type="password" name="password" className='form-control' placeholder='Enter Password' value={type.register.password} onChange={HendleChange}/>
                               </div>
                               <div className="form-check">
  <input 
  name='terms'
  onChange={HendleCheck}
  className="form-check-input" type="checkbox"  id="flexCheckChecked" />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Terms & Condition
  </label>
</div>
                               <div className="form-group mb-2">
                                <input type="submit" className='btn btn-danger'value="Register" />
                               </div>
                          </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistrationForm;