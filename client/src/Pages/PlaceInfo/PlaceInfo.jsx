import React from 'react'

export default function PlaceInfo({info}) {
// const displayInfo=()=>{
//     const data = 
// }
  return (
    <div className='border border-danger col-12 d-flex flex-row-reverse'>
        <div className='col-6'>
            <h3 >הכירו</h3>
            <h3>מוקדי עיניין </h3>
            <h3>דרכי ההגעה</h3>
        </div>
        <div className='col-6'>
            {/* <div>{info}</div> */}
        </div>

    </div>
  )
}
