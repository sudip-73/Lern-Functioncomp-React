import React, { useEffect, useState } from 'react';
import ContactlistO from './ContactlistO';
import axios from 'axios';
import ContactCardO from './ContactCardO';

function ContactO(props) {
   const [contact,setContact]=useState({
   contacts : [],
   errorMessage : "",
   selectContact : {}
   })
   

   const DataUrl = 'https://gist.githubusercontent.com/sudip-73/244f3725294dc7557a1537fb7c209edb/raw/6de50487b7561af29db05411803d2db11f2979a7/gistfile1.txt';
   
   useEffect(()=>{
           axios.get(DataUrl)
          .then((res)=>{
            setContact({
                ...contact,
                contacts : res.data
             })
            })
          .catch((err)=>{
            console.error(err)
            setContact({
                ...contact,
                errorMessage : err
             })
          })
   },[contact])
  
  const reciveShowcard=(contactss)=>{
    setContact({
        ...contact,
        selectContact: contactss
    })
  }
    
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <p className="h2 p-2 text-secondary">Contact App</p>
                        <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, consequatur pariatur. Alias odit quisquam architecto minus enim maxime vel hic.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mt-4">
                        {
                            contact.contacts.length > 0 ?    <ContactlistO  contact={contact.contacts}  Showcards={reciveShowcard}/> : null
                        }
                    </div>
                    <div className="col-md-4">
                    {
                        Object.keys(contact.selectContact).length > 0 ? <ContactCardO contact={contact.selectContact}/> : null
                    }
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactO;