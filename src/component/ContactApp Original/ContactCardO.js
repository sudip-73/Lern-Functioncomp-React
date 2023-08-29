import React from 'react';

function ContactCardO({contact}) {
    return (
        <div>
          <div className="card sticky-top">
            <div className="card-header bg-primary">
                       <div className="p-4"></div>
            </div>
            <div className="card-body text-center">
                 <img src={contact.photo} alt="/" width={150} height={150} className='img-fluid img-thumbnail rounded-circle w-50 contact-img'/>
                 <ul className='list-group text-left mt-3'>
                  <li className='list-group-item list-group-item-primary'>
                    NAME : {contact.name}
                  </li>
                  <li className='list-group-item list-group-item-primary'>
                    E-mail : {contact.email}
                  </li>
                  <li className='list-group-item list-group-item-primary'>
                    MO : {contact.mobile}
                  </li>
                  <li className='list-group-item list-group-item-primary'>
                    COMPANY : {contact.company}
                  </li>
                  
                 </ul>
            </div>
          </div>
        </div>
    );
}

export default ContactCardO;