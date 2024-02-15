import './ProfileSettingsPage.css'
import { Image } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dashboard } from '@uppy/react';
import Uppy from '@uppy/core'
import certificateService from '../../services/certificateService';
import { useSelector } from 'react-redux';
import StatusBar from '@uppy/status-bar';
import Modals from '../../components/Modal/Modal';
import TobetoTextInput from "../../utilities/customFormControls/TobetoTextInput";
import { Form, Formik } from "formik";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap"; // Import Col and Row from react-bootstrap
import TobetoSelect from "../../utilities/customFormControls/TobetoSelect";
import { Paginate } from "../../models/paginate";
import GetListSocialMediaResponse from "../../models/responses/socialMedia/getListSocialMediaResponse";
import socialMediaService from "../../services/socialMediaService";
import { RiPencilFill } from "react-icons/ri";
import ProfileToaster from '../../components/ProfileToaster/ProfileToaster';
import DeleteCard from '../../components/DeleteCard/DeleteCard';
import languageService from '../../services/languageService';
import languageLevelService from '../../services/languageLevelService';
import GetListLanguageResponse from '../../models/responses/language/getListLanguageResponse';
import GetListLanguageLevelResponse from '../../models/responses/languageLevel/getListLanguageLevelResponse';
import DeleteLanguageRequest from '../../models/requests/language/deleteLanguageRequest';
import Forms from 'react-bootstrap/Form';

export default function ProfileSettingsPage() {
    const initialValues = {
        link: "",
        socialMedia: "Seçiniz*"
    };
    const [socialMedias, setSocialMedias] = useState<Paginate<GetListSocialMediaResponse>>();

    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];
    const [shows, setShows] = useState(false)
    const navigate = useNavigate();
    const [showDeleteCard, setShowDeleteCard] = useState(false);
    const [languages, setLanguages] = useState<Paginate<GetListLanguageResponse>>();
    const [languageLevels, setLanguageLevels] = useState<Paginate<GetListLanguageLevelResponse>>();
    const [deleteRequest, setDeleteRequest] = useState<DeleteLanguageRequest | null>(null);
    const userState = useSelector((state: any) => state.user);
    const uppy = new Uppy({
        autoProceed: false,
        restrictions: {
            maxNumberOfFiles: 1,
            allowedFileTypes: ['.pdf', '.jpg', '.jpeg', '.png'],
        }
    })
    uppy.use(StatusBar);

    useEffect(() => {
        socialMediaService.getAll(0, 5).then((result) => {
            setSocialMedias(result.data);
        });
    }, []);


    const handleClick = () => {
        setShowDeleteCard(true);
    };

    const handleDeleteConfirmation = () => {
        console.log('Öğeleri silme işlemi gerçekleştiriliyor...');
        if (deleteRequest) {
            // Silme isteğini burada kullanarak işlemi gerçekleştirin
        }
        setShowDeleteCard(false);
    };

    useEffect(() => {
        languageService.getAll(0, 10).then(response => {
            setLanguages(response.data)
        })
        languageLevelService.getAll(0, 10).then(response => {
            setLanguageLevels(response.data)
        })
    }, []);


    const languageAndLevelsData = [
        { language: "Türkçe", level: "Orta Seviye" },
        { language: "Fransızca", level: "Başlangıç Seviye" },
    ];


    const languageData = [
        { language: "Türkçe" },
        { language: "Fransızca" },
    ];


    const languageLevelData = [
        { languageLevel: "Başlangıç Seviye (A1-A2)" },
        { languageLevel: "Orta Seviye (B1-B2)" },
    ];


    useEffect(() => {
        uppy.on('complete', async (response) => {

            const file = response.successful[0];
            const formData = new FormData();

            formData.append('file', file.data);
            formData.append('accountId', userState.user.id);
            formData.append('name', file.name);
            formData.append('description', file.meta.name);
            formData.append('folderPath', "folder");

            await certificateService.add(formData);
            setShows(false);

        });
    }, [uppy]);

    const handleSvgClick = () => {
        setShows(true);
    };

    const handleClose = () => {
        setShows(false);
    };

    return (
        <div className='profile-settings-page container'>
            <div className="sidebar col-md-3 col-lg-3 col-12">
                <ul>
                    <li>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/user.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Kişisel Bilgilerim</span>
                        </div>
                    </li>
                    <li>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/business.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Deneyimlerim</span>
                        </div>
                    </li>
                    <li>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/book.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Eğitim Hayatım</span>
                        </div>
                    </li>
                    <li onClick={() => navigate("/profilim/profilimi-duzenle/yetkinliklerim")} className={lastPathSegment === "yetkinliklerim" ? 'active-item active-edit' : ''}>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/award.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Yetkinliklerim</span>
                        </div>
                    </li>
                    <li onClick={() => navigate("/profilim/profilimi-duzenle/sertifikalarim")} className={lastPathSegment === "sertifikalarim" ? 'active-item active-edit' : ''}>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/certificates.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Sertifikalarım</span>
                        </div>
                    </li>
                    <li onClick={() => navigate("/profilim/profilimi-duzenle/medya-hesaplarim")} className={lastPathSegment === "medya-hesaplarim" ? 'active-item active-edit' : ''}>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/globe.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Medya Hesaplarım</span>
                        </div>
                    </li>
                    <li onClick={() => navigate("/profilim/profilimi-duzenle/yabanci-dil")} className={lastPathSegment === "yabanci-dil" ? 'active-item active-edit' : ''}>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/translate.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Yabancı Dillerim</span>
                        </div>
                    </li>
                    <li>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/settings.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Ayarlar</span>

                        </div>
                    </li>
                </ul>
            </div>

            <div className='profile-settings-content col-md-8 col-lg-8 col-12'>

                <div style={lastPathSegment === "sertifikalarim" ? { display: 'block' } : { display: 'none' }}>
                    <h1 className='profile-settings-header'>Sertifikalarım</h1>
                    <div className='upload-content'>
                        <div className='upload-area' >
                            <svg onClick={handleSvgClick} width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="74" height="74" rx="37" fill="#F1E3FF" stroke="#9933FF" stroke-width="4" stroke-dasharray="2 2"></rect><path d="M47 45L40 37L33 45" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40 37V53" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M56.261 51C58.0342 50.0324 59.4349 48.5014 60.2422 46.6485C61.0495 44.7956 61.2173 42.7265 60.7191 40.7675C60.221 38.8086 59.0852 37.0715 57.4912 35.8304C55.8971 34.5892 53.9355 33.9148 51.9159 33.9135H49.6252C49.0749 31.7831 48.0493 29.8053 46.6254 28.1288C45.2015 26.4522 43.4164 25.1206 41.4044 24.234C39.3923 23.3474 37.2056 22.9289 35.0086 23.0099C32.8117 23.0909 30.6616 23.6693 28.7202 24.7018C26.7788 25.7342 25.0964 27.1937 23.7997 28.9705C22.5029 30.7474 21.6254 32.7953 21.2333 34.9605C20.8411 37.1256 20.9444 39.3515 21.5355 41.4709C22.1265 43.5904 23.1899 45.5481 24.6457 47.1969" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>Dosya Yükle</span>
                            <div>
                                <Modals
                                    header={false}
                                    footer={false}
                                    show={shows}
                                    onHide={handleClose}
                                    body={
                                        <Dashboard
                                            showSelectedFiles={true}
                                            showProgressDetails={true}
                                            uppy={uppy}
                                            plugins={['FileInput']} />
                                    }></Modals>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={lastPathSegment === "medya-hesaplarim" ? { display: 'block' } : { display: 'none' }}>
                    <div className="row mt-5">
                        <div className="formik-form">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values) => {
                                    console.log("Form submitted with values:", values);
                                }}
                            >
                                <Form className="login-form">
                                    <Row>
                                        <Col md={4}>
                                            <TobetoSelect
                                                name="socialMedia"
                                                className="mb-4"
                                                component="select"
                                            >
                                                <option value="SocialMedia">Seçiniz*</option>
                                                {socialMedias?.items.map((socialMedia, index) => (
                                                    <option key={index} value={String(socialMedia.id)}>
                                                        {socialMedia.name}
                                                    </option>
                                                ))}
                                            </TobetoSelect>
                                        </Col>
                                        <Col md={8}>
                                            <TobetoTextInput
                                                className="mb-4"
                                                name="link"
                                                placeholder="http://"
                                                placeholderTextColor="#fff"
                                            />
                                        </Col>
                                    </Row>
                                    <Button className="mb-4" type="submit">
                                        Kaydet
                                    </Button>
                                    <Row>
                                        <Col>
                                            {socialMedias?.items.slice(0, 3).map((socialMedia) => (
                                                <div className="social-media-content">
                                                    <label className="social-media-text">{socialMedia.name}</label>
                                                    <InputGroup size="lg">
                                                        <InputGroup.Text id="social-media-icon">
                                                            <img src={socialMedia.iconPath} />
                                                        </InputGroup.Text>
                                                        <FormControl className="social-media-form" aria-label="Amount (to the nearest dollar)" />
                                                        <InputGroup.Text id="social-media-icon">
                                                            <button className="social-media-delete-btn">
                                                                <img src="https://tobeto.com/trash.svg" alt="Delete" />
                                                            </button>
                                                            <button className="social-media-edit-btn">
                                                                <RiPencilFill className="lu-pencil" />
                                                            </button>
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>
                                            ))}
                                            <p className="social-media-span-text">En fazla 3 adet medya seçimi yapılabilir.</p>
                                        </Col>
                                    </Row>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div >

                <div style={lastPathSegment === "yabanci-dil" ? { display: 'block' } : { display: 'none' }}>
                <form>
                    <div className='pe-language'>
                        <Forms.Select size="lg" id='pe-language-select'>
                            <option selected>Dil Seçiniz*</option>
                            {languageData.map((item, index) => (
                                <option key={index} value={item.language}>
                                    {item.language}
                                </option>
                            ))}
                        </Forms.Select>
                        <Forms.Select size="lg" id='pe-language-select'>
                            <option selected>Seviye Seçiniz*</option>
                            {languageLevelData.map((item, index) => (
                                <option key={index} value={item.languageLevel}>
                                    {item.languageLevel}
                                </option>
                            ))}
                        </Forms.Select>
                    </div>
                    <button className="py-2 pe-language-button" /* onClick={() =>  ProfileToaster({ name: "... Kaydedildi" }); }} } */>Kaydet</button>
                </form>

                <div className='pe-result'>
                    {languageAndLevelsData.map((item, index) => (
                        <div className="pe-container" key={index}>
                            <div className="pe-edit-language">
                                <div>
                                    <span>{item.language}</span>
                                    <p>{item.level}</p>
                                </div>
                                <button className="pe-delete-button" onClick={() => { handleClick(); ProfileToaster({ name: "Yabancı dil bilgisi kaldırıldı." }); }}></button>
                            </div>
                        </div>
                    ))}
                </div>

                {showDeleteCard && <DeleteCard handleDeleteConfirmation={handleDeleteConfirmation} />}
            </div>

            </div>
        </div>
    )
}