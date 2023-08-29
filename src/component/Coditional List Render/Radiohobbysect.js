import React, { useState } from 'react';

function Radiohobbysect(props) {
    const [hobby , setHobby]=useState("");


    return (
        <div>
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
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="play"  onChange={(e)=>setHobby(e.target.value)}/>
  <label class="form-check-label" for="exampleRadios1">
    Play
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="watch" onChange={(e)=>setHobby(e.target.value)}/>
  <label class="form-check-label" for="exampleRadios2">
    Watch
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="code" onChange={(e)=>setHobby(e.target.value)} />
  <label class="form-check-label" for="exampleRadios3">
    Code
  </label>
</div>
                        </div>
                        <div className="col-md-8">
                       {
                        hobby==="play" ?  <div className="card bg-warning p-2">
                        <p className="h3">Play</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequuntur aliquam, accusamus a labore id aut odit dolore deserunt error!</p>
                       </div>
                       : null
                       }
                       {
                        hobby==="watch" ?  <div className="card bg-danger p-2">
                        <p className="h3">Watch</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore consequuntur aliquam, accusamus a labore id aut odit dolore deserunt error!</p>
                       </div>
                       : null
                       }
                       {
                        hobby==="code" ?  <div className="card bg-info p-2">
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
        </div>
    );
}

export default Radiohobbysect;