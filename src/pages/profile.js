import React from 'react'
import Header from '../layout/header'
import { Link } from 'react-router-dom'
import { GitHub, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'

export default function Profile() {
  return (
    <div className='vh-100' style={{ background: '#e1f5fe' }}>
      <Header />
      <div className="container">
        <div className='row'>
          <div className="col-lg-3 col-sm-12 mb-5">
            <div className='bg-white text-center'>
              <img src="images/delight.jpg" alt="mine" width={'120px'} className='rounded-pill' />
              <div>
                <h3 className='fst-italic mt-2'>Agboola Samuel</h3>
                <h5 className='mt-3'>Full-stack Software developer</h5>
              </div>
              <div className='d-flex gap-3 pb-3 mt-4' style={{ marginLeft: '20%' }}>
                <Link to={'https://github.com/delighb?tab=repositories'} target='blank'> <GitHub style={{ color: 'gray' }}/> </Link>
                <Link to={'https://www.instagram.com/agboolasamuel202401/'} target='blank' > <Instagram style={{ color: 'gray' }} /> </Link>
                <Link to={'https://wa.me/2349123925653'} target='blank'> <WhatsApp style={{ color: 'gray' }} /> </Link>
                <Link to={'https://www.linkedin.com/in/agboola-samuel-734971296/'} target='blank' > <LinkedIn style={{ color: 'gray' }} /> </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className='bg-white p-3'>
              <h3 className='text-primary text-center'>Overview</h3>

              <div>
                <h5>About me</h5>
                <h6>I'm a Full-stack software developer with series of knowdledge which include building a very responsive website with </h6>
                <p>HTML,CSS,Javascript,with Frameworks which Boostrap,Material UI,Ant Design also with React.js</p>
                <p>I build my backend applications using Node.js with it Framework <b>Express</b> and i use MongoDb and MySql to store data in database</p>
              </div>

              <h3 className='text-primary'>Profile Details</h3>
              <div className='d-flex mt-3' style={{gap:"19%"}}>
                <h6>Full Name</h6>
                <h6>Agboola Samuel Babatunde</h6>
              </div>

              <div className='d-flex mt-3' style={{gap:"19%"}}>
                <h6>Company</h6>
                <h6>IJAN company</h6>
              </div>

              <div className='d-flex mt-3' style={{gap:"23%"}}>
                <h6>Job</h6>
                <h6>Full-Stack Software Developer </h6>
              </div>

              <div className='d-flex mt-3'style={{gap:"19%"}}>
                <h6>Country</h6>
                <h6>NIGERIA</h6>
              </div>

              <div className='d-flex mt-3' style={{gap:"22%"}}>
                <h6>City</h6>
                <h6>LAGOS,NIGERIA</h6>
              </div>

              <div className='d-flex mt-3' style={{gap:"19%"}}>
                <h6>Phone</h6>
                <h6>09123925653</h6>
              </div>

              <div className='d-flex mt-3' style={{gap:"19%"}}>
                <h6>Email</h6>
                <h6>agboolasamuel2020@gmail.com</h6>
              </div>

            </div>
          </div>
        </div>
      </div>
      <hr />
      <h4 className='text-center text-secondary mt-5'>Agboola Samuel Babatunde</h4>
    </div>
  )
}

