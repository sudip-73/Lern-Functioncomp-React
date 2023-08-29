import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Userlist=()=> {
    const [user , setUser]=useState([])

    useEffect(()=>{
        console.log('fething')
           axios.get('https://jsonplaceholder.typicode.com/users')
           .then((res)=>{
                  setUser(res.data)
           })
           .catch((err)=>{
               console.error(err)
           })
           
    },[])
    return (
        <div>
            <pre>{JSON.stringify(user)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <table className='table table-hover table-striped text-center text-danger bg-warning'>
                            <thead>
                                <tr>
                                    <th>Srn</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>city</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                user.map((data)=>{
                                     return(
                                          <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                            <td>{data.address.city}</td>
                                          </tr>
                                     );
                                }) 
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userlist;