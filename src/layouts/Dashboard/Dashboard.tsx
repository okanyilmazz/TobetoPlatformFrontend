import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage/Homepage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import EducationCard from '../../components/EducationCard/EducationCard'
import ForInstitutionsPage from '../../pages/ForInstitutionsPage/ForInstitutionsPage'
import { ForIndividuals } from '../../pages/ForIndividuals/ForIndividuals'
import Calendar from '../../pages/Calendar/Calendar'
import LoginPage from '../../pages/LoginPage/LoginPage'

export default function Dashboard() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/" Component={Homepage} />
                <Route path="/hakkimizda" Component={AboutUs} />
                <Route path="/kurumlar-icin" Component={ForInstitutionsPage} />
                <Route path="/bireyler-icin" Component={ForIndividuals} />
                <Route path="/takvim-anasayfa" Component={Calendar} />
                <Route path='/giris' Component={LoginPage} />
            </Routes>
        </div>
    )
}
