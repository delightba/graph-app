import React from 'react'
import Header from '../layout/header'

export default function Blank() {
  return (
    <div className='bg-warning vh-100' >
      <Header />
      <div className='container'>
        <h3 className='text-white'>Blank Page</h3>
        <div className="row mt-5 row-gap-5">
          <div className="col-lg-6 col-sm-12">
            <div className="bg-white fst-italic p-2 text-center">
              <h3>Example card</h3>
              <p>This is an example page with no content. You can use it as a starter for your custom pages.</p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="bg-white text-center p-2 fst-italic">
              <h3>Example card</h3>
              <p>This is an example page with no content. You can use it as a starter for your custom pages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
