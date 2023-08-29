import React, { Fragment, useState } from 'react';

function Watchcart(props) {
    const [watch ,setWatch]=useState([{
        id: "F653R",
        name: " Oris Watch",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmYAO01EYGK8_4pl0Tw3qOg31YBz1m8bqIw&usqp=CAU",
        price: 18000,
        qty: 2,
      },
      {
        id: "WTR4D",
        name: "APPLLP Watch",
        image:
          "https://w0.peakpx.com/wallpaper/421/374/HD-wallpaper-3d-clock-golden-latest-watch-zash.jpg",
        price: 70000,
        qty: 1,
      },
      {
        id: "BA352",
        name: "Unsplash Watch",
        image:
          "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        price: 11000,
        qty: 4,
      },
      {
        id: "DF4K3",
        name: "Boat Watch",
        image:
          "https://www.boat-lifestyle.com/cdn/shop/products/LunarConnect-FI_Black03_1500x.png?v=1678115037",
        price: 25000,
        qty: 7,
      }])

      const incQty=(id)=>{
        setWatch((prevState)=>{
            return prevState.map((watch,index)=>{
         if(watch.id===id){
          return{
            ...watch,
          qty : watch.qty + 1
          }
            
        }
        else {
          return watch;
        }
            })
         }
        )
      }

      const decQty=(id)=>{
   setWatch((prevState)=>{
    return prevState.map((watch,index)=>{
      if(watch.id===id){
        return{
          ...watch,
          qty : watch.qty - 1  > 0 ? watch.qty -1 : 1
        }
      }
      else{
        return watch
      }
    })
   })
      }
    return (
        <Fragment>
              <div className="container">
                <div className="row">
                    <div className="col">
                      <p className="h3 text-success mt-4">WatchCart</p>
                      <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus fuga, in assumenda unde facere. Esse voluptas laborum illo minima exercitationem dolorum nulla quia distinctio incidunt ut?
                      </p>
                    </div>
                </div>
                <div className="row  mt-4">
                    <div className="col">
                    <table className='table table-hover table-striped text-center'>
                            <thead>
                                <tr>
                                   
                                    <th>NAME</th>
                                    <th>IMAGE</th>
                                    <th>QTY</th>
                                    <th>PRICE</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                 watch.map((watches,index)=>{
                                    return(
                                        <tr key={index}>
                                            
                                            <td>{watches.name}</td>
                                            <td>
                                                <img src={watches.image} alt="" width={50} height={50} />
                                            </td>
                                            <td>
                                                <i className='bi bi-plus-circle mx-2' onClick={()=>incQty(watches.id)}/>
                                                {watches.qty}
                                                 <i className='bi bi-dash-circle mx-2' onClick={()=>decQty(watches.id)}/>
                                                </td>
                                               
                                            <td>{watches.price}</td>
                                            <td>{watches.price* watches.qty}</td>
                                        </tr>
                                    );
                                 })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>
        </Fragment>
    );
}

export default Watchcart;