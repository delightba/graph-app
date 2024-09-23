import React from 'react'
import { Link } from 'react-router-dom'


export default function Notfound() {
  return (
   <div>
     <div className='d-flex justify-content-center align-items-center p-3 vh-100' style={{ background: '#e1f5fe'}}>
        <div className='text-center rounded' style={{width:"40%"}}>
         <div>
         <h1 className='text-center' style={{color:"purple",fontSize:"110px"}}>404</h1>
           <h4 className='mb-4' style={{color:"purple"}}>The page you are looking for doesnt exist</h4>
            <Link className='btn btn-warning text-decoration-none text-white  mt-2 mb-3 rounded' style={{marginLeft:"13%"}} to={'/dashboard'}>Back to home</Link>
         </div>
            <img src="images/pro.PNG" alt="imag"  width={'100%'} height={'100% '}/>
        
        </div>
    </div>
   </div>
  )
}
