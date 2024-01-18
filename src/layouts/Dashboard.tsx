import React from 'react'
import CountryList from '../pages/CountryList'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import AboutUs from '../pages/AboutUs/AboutUs'
import EducationCard from '../components/EducationCard/EducationCard'

export default function Dashboard() {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Homepage} />
                <Route path="/aboutus" Component={AboutUs} />
            </Routes>
        </div>
    )
}
