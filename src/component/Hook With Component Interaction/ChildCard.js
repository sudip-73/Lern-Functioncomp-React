import React, { Fragment ,useState} from 'react';

function ChildCard(props) {
    const [toparent,setToparent] = useState("")

    const HendleToparent=(event)=>{
        setToparent(event.target.value)
        props.Hendleparent(event.target.value)
         }
    return (
        <Fragment>
              <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <div className="card m-3">
                            <div className="card-body bg-info ">
                                <p className="h3">Child Component</p>

                                <p className="h3">{props.name}</p>

                                <input type="text" className='m-2'  onChange={HendleToparent}  />
                                <span>{toparent}</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </Fragment>
    );
}

export default ChildCard;