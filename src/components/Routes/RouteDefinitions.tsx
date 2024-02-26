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
import AssesmentsPage from '../../pages/AssesmentsPage/AssesmentsPage';
import EducationsPage from '../../pages/EducationsPage/EducationsPage';
import EducationProgramContent from '../../pages/EducationProgramContent/EducationProgramContent';
import CertificatePage from '../../pages/CertificatePage/CertificatePage';
import SkillPage from '../../pages/SkillPage/SkillPage';
import SocialMediaPage from '../../pages/SocialMediaPage/SocialMediaPage';
import LanguagePage from '../../pages/LanguagePage/LanguagePage';
import PersonalInformationPage from '../../pages/PersonalInformationPage/PersonalInformationPage';
import AnalysisReport from '../../pages/AnalysisReport/AnalysisReport';
import SessionsPage from '../../pages/SessionsPage/SessionsPage';
import AdminPanel from '../../pages/AdminPanel/AdminPanel';
import EducationalBackgroundPage from '../../pages/EducationalBackgroundPage/EducationalBackgroundPage';




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
            <Route path="/kayit-ol" Component={Homepage} />
            <Route path="/kayit-ol" Component={Codecademy} />
            <Route path="/katalog" Component={CatalogPage} />
            <Route path="/codecademy" Component={Codecademy} />
            <Route path="/platform-katalog" Component={CatalogPage} />
            <Route path="/degerlendirmeler" Component={AssesmentsPage} />
            <Route path="/egitimlerim" Component={EducationsPage} />
            <Route path="/profilim/profilimi-duzenle/sertifikalarim" Component={CertificatePage} />
            <Route path="/profilim/profilimi-duzenle/yetkinliklerim" Component={SkillPage} />
            <Route path="/profilim/profilimi-duzenle/medya-hesaplarim" Component={SocialMediaPage} />
            <Route path="/profilim/profilimi-duzenle/yabanci-dil" Component={LanguagePage} />
            <Route path="/profilim/profilimi-duzenle/kisisel-bilgilerim" Component={PersonalInformationPage} />
            <Route path="/profilim/profilimi-duzenle/egitim-hayatim" Component={EducationalBackgroundPage} />
            <Route path="/egitimlerim/egitim-detaylari/:educationProgramId" Component={EducationProgramContent} />
            <Route path="/profilim/degerlendirmeler/rapor/tobeto-iste-basari-yetkinlikleri/1" Component={AnalysisReport} />
            <Route path="/egitimlerim/egitim-detaylari/:educationProgramId" Component={SessionsPage} />
            <Route path="/admin-panel" Component={AdminPanel} />
            <Route path="/admin-panel/ogrenciler" Component={AdminPanel} />
            <Route path="/admin-panel/dersler" Component={AdminPanel} />
            <Route path="/admin-panel/duyurular" Component={AdminPanel} />
            <Route path="/admin-panel/egitimler" Component={AdminPanel} />
            <Route path="/admin-panel/oturumlar" Component={AdminPanel} />
            <Route path="/admin-panel/egitimler" Component={AdminPanel} />
            <Route path="/admin-panel/roller" Component={AdminPanel} />
            <Route path="/admin-panel/kullanicilar" Component={AdminPanel} />

        </Routes>
    )
}
export default RouteDefinitions;