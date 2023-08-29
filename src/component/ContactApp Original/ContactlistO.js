import React from 'react';

function ContactlistO(props) {

const Showcard=(contact)=>{
    
   props.Showcards(contact)
}
    return (
        <div>
            <table className='table table-hover table-striped table-primary text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        props.contact.map((contact)=>{
                            return(
                                <tr key={contact.id} onClick={Showcard.bind(this,contact)}>
                                    <td>{contact.name}</td>
                                    <td>
                                        <img src={contact.photo} alt="/" width={50} height={50} />
                                    </td>
                                    <td>{contact.mobile}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.company}</td>
                                    <td>{contact.title}</td>
                                </tr>
                            );
                        }) 
                     }
                </tbody>
            </table>
        </div>
    );
}

export default ContactlistO;