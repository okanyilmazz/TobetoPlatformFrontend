
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage/Homepage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import ForInstitutionsPage from '../../pages/ForInstitutionsPage/ForInstitutionsPage'


export default function Dashboard() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" Component={Homepage} />
                <Route path="/aboutus" Component={AboutUs} />
                <Route path="/about" Component={AboutUs} />
                <Route path="/for-institutions" Component={ForInstitutionsPage} />
            </Routes>
        </div>
    )
}
