
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage/Homepage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import ForInstitutionsPage from '../../pages/ForInstitutionsPage/ForInstitutionsPage'
import { ForIndividuals } from '../../pages/ForIndividuals/ForIndividuals'
import Calendar from '../../pages/Calendar/Calendar'


export default function Dashboard() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" Component={Homepage} />
                <Route path="/hakkimizda" Component={AboutUs} />
                <Route path="/kurumlar-icin" Component={ForInstitutionsPage} />
                <Route path="/bireyler-icin" Component={ForIndividuals} />
                <Route path="/takvim-anasayfa" Component={Calendar} />
            </Routes>
        </div>
    )
}
