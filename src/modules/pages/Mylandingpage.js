import React from 'react'
import Mynavbar from '../../shares/Mynavbar'
import Myfooter from '../../shares/Myfooter'

function Mylandingpage() {
  return (
  <div className='container-fluid'>
    <div className='row fixed-top'>
        <div className='col-12 g-0'>
        <Mynavbar/>
        </div>
    </div>
    <div className='row ch'>
        <div className='col-md-2'></div>
        <div className='col-md-10'>
            <div className='mypage bg-light border'>
                <h1>this is landing page</h1>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='col-12 g-0'>
      <Myfooter/>
        </div>
    </div>
  </div>
  )
}

export default Mylandingpage