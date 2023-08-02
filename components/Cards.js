import React from 'react'

export default function Cards() {
  return (
    <div>
        <div><div className="card mt-3" style={{"width": "18rem", "maxHeight" :"360px"}}>
  <img src="https://st2.depositphotos.com/5653638/11415/i/950/depositphotos_114151972-stock-photo-paneer-tikka-kabab-tandoori-indian.jpg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some random text</p>
    <div className='container w-100'>
          <select className='m-2 h-100 bg-success'>
            {Array.from(Array(6), (e,i)=>{
              return(
                <option key={i+1} value={i+1}> {i+1} </option>
              )
            })}
          </select>

          <select className='m-2 h-100 bg-success rounded'>
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className='d-inline h-100 fs-5'>
            Total Price
          </div>
    </div>
    
  </div>
</div></div>
    </div>
  )
}
