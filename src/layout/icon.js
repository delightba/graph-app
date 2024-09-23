import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import { MinusOutlined } from '@ant-design/icons'
import { PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd';
import { AppRegistration, Email, Error, Login, NoSim, People, QuestionMarkRounded } from '@mui/icons-material';

const items = [
    {

        key: '1',
        label: <div className='text-secondary fs-5'>Components</div>,
        children: <div className='text-primary ms-3'>
            <div>
                <h6>Alerts</h6>
                <h6>Accordions</h6>
                <h6>Badges</h6>
                <h6>Breadcrumbs</h6>
                <h6>Buttons</h6>
                <h6>Cards</h6>
                <h6>Carousel</h6>
                <h6>List groups</h6>
            </div>
        </div>,
    },
]
const item = [
    {
        key: '1',
        label: <div className='text-secondary fs-5'>Tables</div>,
        children: <div className='text-primary ms-3'>
            <div>
                <h6>General tables</h6>
                <h6>Data tables</h6>
            </div>
        </div>,
    },
]

export default function Icons() {
  return (
    <div>

<div style={{ marginLeft: '1.7rem' }}>
                    <div className='d-flex gap-2'>
                        <GridViewIcon style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/dashboard'}>Dashboard</Link>
                    </div>

                    <div>
                        <Collapse accordion defaultActiveKey={['6']} ghost items={items}
                            expandIconPosition='right'
                            expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} /> : <PlusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} />}
                        />
                    </div>

                    <div>
                        <Collapse accordion defaultActiveKey={['6']} ghost items={item}
                            expandIconPosition='right'
                            expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} /> : <PlusOutlined style={{ background: 'purple', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} />}
                        />
                    </div>

                    <div className='d-flex gap-2 mt-2'>
                        <People style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/profile'}>Profile</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <QuestionMarkRounded style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/faq'}>FAQ</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <Email style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/contact'}>CONTACT</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <AppRegistration style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/register'}>REGISTER</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <Login style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/login'}>LOGIN</Link>
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <Error style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/notfound'}>Error 404</Link>
                    </div>

                    <div className='d-flex gap-2' style={{ marginTop: '3rem' }}>
                        <NoSim style={{ color: "#BACDDB" }} />
                        <Link style={{ textDecoration: 'none', color: "#03346E" }} to={'/blank'}>Blank</Link>
                    </div>
                </div>
    </div>
  )
}
