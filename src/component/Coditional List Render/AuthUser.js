import React, { Fragment, useState } from 'react';

const AuthUser=()=> {
const [auth , setAuth] = useState({
    msg : "",
    isLoggin : false
})
 const login=()=>{
    setAuth({
        msg : "Welcome User",
        isLoggin : true
    })
 }
 const logout=()=>{
    setAuth({
        msg : "Thank You User",
        isLoggin : false
    })
 }

    return (
        <Fragment>
              <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h3">Conditional Rendering</p>
                            </div>
                            <div className="card-body">
                              <div>
                              <p className="h4">{auth.msg}</p>
                              </div>
                                 <div>
                                  
                                   {
                                    !auth.isLoggin && <button className='btn btn-info mx-2' onClick={login}>Login</button> 
                                   }
                                    {
                                   auth.isLoggin &&
                                    <button className='btn btn-danger' onClick={logout}>Logout</button> 
                                   }
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </Fragment>
    );
}

export default AuthUser;