import { Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import ForInstitutionsPage from '../../pages/ForInstitutionsPage/ForInstitutionsPage'
import PlatformPage from '../../pages/PlatformPage/PlatformPage'
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard'
import { ForIndividuals } from '../../pages/ForIndividuals/ForIndividuals';
import Calendar from '../../pages/Calendar/Calendar';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUp from '../../pages/SignUp/SignUp';


type Props = {}

const RouteDefinitions = (props: Props) => {
    return (
        <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/hakkimizda" Component={AboutUs} />
            <Route path="/kurumlar-icin" Component={ForInstitutionsPage} />
            <Route path="/bireyler-icin" Component={ForIndividuals} />
            <Route path="/takvim-anasayfa" Component={Calendar} />
            <Route path="/platform" Component={PlatformPage} />
            <Route path="/basvuru" Component={ApplicationCard} />
            <Route path="/giris" Component={LoginPage} />
            <Route path="/kayit-ol" Component={SignUp} />
        </Routes>
    )
}
export default RouteDefinitions;