import React from 'react'
import CountryList from '../pages/CountryList'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'

export default function Dashboard() {
    return (
        <div>

            {/* <CountryList></CountryList> */}

            <Routes>
                <Route path="/" Component={Homepage} />
            </Routes>
        </div>
    )
}
