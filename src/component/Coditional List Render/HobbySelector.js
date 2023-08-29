import React, { Fragment, useState } from 'react';

const HobbySelector=()=> {
    const [hobby , setHobby]=useState({
        play : false,
        watch : false,
        code : false
    });

 const HendelChange=(event)=>{
    setHobby({
        ...hobby,
       [ event.target.name ]: event.target.checked
    })
 }



    return (
        <Fragment> 
            <pre>{JSON.stringify(hobby)}</pre>
             <div className="container mt-4">
                <div className="row">
                 <div className="col-md-8">
                    <div className="card">
                    <div className="card header bg-dark text-white">
                        <p className="h3 p-2">Hobby Selector</p>
                    </div>
                   <div className="row">
                   <div className="col-md-4">

                   <div class="form-check">
  <input class="form-check-input" type="checkbox" name="play" id="defaultCheck1" onChange={HendelChange}/>
  <label class="form-check-label" for="defaultCheck1">
  Play
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" name="watch" id="defaultCheck2" onChange={HendelChange}/>
  <label class="form-check-label" for="defaultCheck2">
  Watch
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox"  name="code" id="defaultCheck3" onChange={HendelChange}/>
  <label class="form-check-label" for="defaultCheck3">
  Code
  </label>
</div>


                    </div>
                    <div className="col-md-8">
                       {
                        hobby.play ?  <div className="card bg-warning p-2">
                        <p className="h3">Play</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequuntur aliquam, accusamus a labore id aut odit dolore deserunt error!</p>
                       </div>
                       : null
                       }
                       {
                        hobby.watch ?  <div className="card bg-danger p-2">
                        <p className="h3">Watch</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequuntur aliquam, accusamus a labore id aut odit dolore deserunt error!</p>
                       </div>
                       : null
                       }
                       {
                        hobby.code ?  <div className="card bg-info p-2">
                        <p className="h3">Code</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequuntur aliquam, accusamus a labore id aut odit dolore deserunt error!</p>
                       </div>
                       : null
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

export default HobbySelector;