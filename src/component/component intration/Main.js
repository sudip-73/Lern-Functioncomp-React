
import { Fragment, useState } from 'react';
import '../../App.css';

import ClientCard from './ClientCard';
import ServerCard from './ServerCard';


function Main(props) {

const [text,setText]=useState('');
const [sms , setSms]=useState('')
const pulldata=(data)=>{
   setText (data)
}
const tosendClient=(data)=>{
   setSms(data)
}

  return (
   <Fragment>
    
   
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <ClientCard pushdata={pulldata} sms={sms}/>
        </div>
        <div className="col-md-4">
          <ServerCard text={text}  toClientdata={tosendClient}/>
        </div>
      </div>
    </div>

   </Fragment>
  );
}

export default Main;
