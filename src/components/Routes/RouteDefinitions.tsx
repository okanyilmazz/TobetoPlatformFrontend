import { Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import ForInstitutionsPage from '../../pages/ForInstitutionsPage/ForInstitutionsPage'
import PlatformPage from '../../pages/PlatformPage/PlatformPage'
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard'
import { ForIndividuals } from '../../pages/ForIndividuals/ForIndividuals';
import Calendar from '../../pages/Calendar/Calendar';


import Profile from '../../pages/Profile/Profile';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import SignUp from '../../pages/SignUp/SignUp';
import Blog from '../../pages/Blog/Blog';
import MediaNews from '../../pages/MediaNews/MediaNews';
import Codecademy from '../../pages/Codecademy/Codecademy';
import ProfileSettingsPage from '../../pages/ProfileSettingsPage/ProfileSettingsPage';
import AssesmentsPage from '../../pages/AssesmentsPage/AssesmentsPage';
import EducationsPage from '../../pages/EducationsPage/EducationsPage';


type Props = {}

const RouteDefinitions = (props: Props) => {
    return (
        <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/hakkimizda" Component={AboutUs} />
            <Route path="/kurumlar-icin" Component={ForInstitutionsPage} />
            <Route path="/bireyler-icin" Component={ForIndividuals} />
            <Route path="/takvim-anasayfa" Component={Calendar} />
            <Route path="/takvim" Component={Calendar} />
            <Route path="/platform" element={<ProtectedRoute><PlatformPage /></ProtectedRoute>} />
            <Route path="/basvuru" Component={ApplicationCard} />
            <Route path="/profilim" Component={Profile} />
            <Route path="/blog" Component={Blog} />
            <Route path="/basinda-biz" Component={MediaNews} />
            <Route path="/giris" Component={LoginPage} />
            <Route path="/kayit-ol" Component={SignUp} />
            <Route path="/katalog" Component={CatalogPage} />
            <Route path="/codecademy" Component={Codecademy} />
            <Route path="/platform-katalog" Component={CatalogPage} />
            <Route path="/degerlendirmeler" Component={AssesmentsPage} />
            <Route path="/egitimlerim" Component={EducationsPage} />
            <Route path="/profilim/profilimi-duzenle/sertifikalarim" Component={ProfileSettingsPage} />
            <Route path="/profilim/profilimi-duzenle/yetkinliklerim" Component={ProfileSettingsPage} />
            <Route path="/profilim/profilimi-duzenle/medya-hesaplarim" Component={ProfileSettingsPage} />
            <Route path="/profilim/profilimi-duzenle/yabanci-dil" Component={ProfileSettingsPage} />
            <Route path="/profilim/profilimi-duzenle/kisisel-bilgilerim" Component={ProfileSettingsPage} />








        </Routes>
    )
}
export default RouteDefinitions;