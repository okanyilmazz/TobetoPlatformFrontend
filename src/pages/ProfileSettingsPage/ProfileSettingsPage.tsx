import './ProfileSettingsPage.css'
import { Button, Col, Image, Row, } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dashboard } from '@uppy/react';
import Uppy from '@uppy/core'
import certificateService from '../../services/certificateService';
import { useDispatch, useSelector } from 'react-redux';
import StatusBar from '@uppy/status-bar';
import Modals from '../../components/Modal/Modal';
import TobetoTextInput from "../../utilities/customFormControls/TobetoTextInput";
import { Form, Formik } from "formik";
import { FormControl, InputGroup } from "react-bootstrap"; // Import Col and Row from react-bootstrap
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
import { Paginate } from '../../models/paginate';
import GetListSkillResponse from '../../models/responses/skill/getListSkillResponse';
import skillService from '../../services/skillService';
import TobetoSelect from '../../utilities/customFormControls/TobetoSelect';
import CreatableSelect from 'react-select/creatable';
import { GetListCountryResponse } from '../../models/responses/country/getListCountryResponse';
import { GetListCityResponse } from '../../models/responses/city/getListCityResponse';
import GetListDistrictResponse from '../../models/responses/district/getListDistrictResponse';
import GetListAccountResponse from '../../models/responses/account/getListAccountResponse';
import authService from '../../services/authService';
import { userActions } from '../../store/user/userSlice';
import countryService from '../../services/countryService';
import cityService from '../../services/cityService';
import accountService from '../../services/accountService';
import districtService from '../../services/districtService';
import PhoneNumberValidation from '../../components/PhoneNumberValidation/PhoneNumberValidation';


export default function ProfileSettingsPage() {

    const [countries, setCountries] = useState<Paginate<GetListCountryResponse>>();
    const [cities, setCities] = useState<Paginate<GetListCityResponse>>();
    const [districts, setDistricts] = useState<Paginate<GetListDistrictResponse>>();
    const [account, setAccount] = useState<GetListAccountResponse>();
    const user = authService.getUserInfo();
    const userState = useSelector((state: any) => state.user);
    const [socialMedias, setSocialMedias] = useState<Paginate<GetListSocialMediaResponse>>();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];
    const [shows, setShows] = useState(false)
    const [showDeleteCard, setShowDeleteCard] = useState(false);
    const [languages, setLanguages] = useState<Paginate<GetListLanguageResponse>>();
    const [languageLevels, setLanguageLevels] = useState<Paginate<GetListLanguageLevelResponse>>();
    const [deleteRequest, setDeleteRequest] = useState<DeleteLanguageRequest | null>(null);
    const [selectedCountryId, setSelectedCountryId] = useState<any>("Ülke");
    const [selectedCityId, setSelectedCityId] = useState<any>("İl");
    const [skills, setSkills] = useState<Paginate<GetListSkillResponse>>();
    const defaultProfilePhotoPath = 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=128&q=75';
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const initialValues = {
        email: account?.email,
        password: "",
        birthDate: account?.birthDate,
        country: "",
        street: "",
        about: "",
        link: "",
        socialMedia: "Seçiniz*"
    };


    const uppy = new Uppy({
        autoProceed: false,
        restrictions: {
            maxNumberOfFiles: 1,
            allowedFileTypes: ['.pdf', '.jpg', '.jpeg', '.png'],
        }
    })

    uppy.use(StatusBar);
    const handleSvgClick = () => {
        setShows(true);
    };

    const handleClose = () => {
        setShows(false);
    };

    useEffect(() => {
        console.log(userState.user);
        if (!userState.user) {
            dispatch(userActions.getUserInfo());

            countryService.getAll(0, 10).then((result) => {
                setCountries(result.data);
                console.dir(result.data);

            });

            cityService.getAll(0, 10).then(result => {
                setCities(result.data)
            });

            districtService.getAll(0, 10).then(result => {
                setDistricts(result.data)
            });

            accountService.getByAccountId(user.id).then(result => {
                setAccount(result.data);
            });

            socialMediaService.getAll(0, 5).then((result) => {
                setSocialMedias(result.data);
            });

            languageService.getAll(0, 10).then(response => {
                setLanguages(response.data)
            });

            languageLevelService.getAll(0, 10).then(response => {
                setLanguageLevels(response.data)
            });

            skillService.getAll(0, 25).then((result) => {
                setSkills(result.data);
            });
        }
    }, [userState]);


    const handleCountries = (event: any) => {
        console.log(event.target.value);
        setSelectedCountryId(event.target.value)
    }

    const handleCities = (event: any) => {
        console.log(event.target.value);

        setSelectedCityId(event.target.value)
        districtService.getByCityId(event.target.value).then(result => {
            setDistricts(result.data)
        })
    }


    const handleClick = () => {
        setShowDeleteCard(true);
    };

    const handleDeleteConfirmation = () => {
        console.log('Öğeleri silme işlemi gerçekleştiriliyor...');
        if (deleteRequest) {
        }
        setShowDeleteCard(false);
    };


    const languageAndLevelsData = [
        { language: "Türkçe", level: "Orta Seviye" },
        { language: "Fransızca", level: "Başlangıç Seviye" },
    ];

    useEffect(() => {
        socialMediaService.getAll(0, 5).then((result) => {
            setSocialMedias(result.data);
        });
    }, []);


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


    return (
        <div className='profile-settings-page container'>
            <div className="sidebar col-md-3 col-lg-3 col-12">
                <ul>
                    <li onClick={() => navigate("/profilim/profilimi-duzenle/kisisel-bilgilerim")} className={lastPathSegment === "kisisel-bilgilerim" ? 'active-item active-edit' : ''}>
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
                    <li onClick={() => navigate("/profilim/profilimi-duzenle/ayarlar")} className={lastPathSegment === "ayarlar" ? 'active-item active-edit' : ''}>
                        <div className='sidebar-icon'>
                            <Image src='/assets/Icons/profile-settings/settings.svg' />
                        </div>
                        <div className='sidebar-text'>
                            <span>Ayarlar</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='profile-settings-content col-md-9 col-lg-9 col-12'>

                <div style={lastPathSegment === "kisisel-bilgilerim" ? { display: 'block' } : { display: 'none' }}>
                    <div className="profile-details-page">
                        <div className="profile-details-img">
                            <img
                                src={account?.profilePhotoPath || defaultProfilePhotoPath}
                                alt=""
                            />
                            {account?.profilePhotoPath && (
                                <>
                                    <div className="profile-img-delete"></div>
                                    <div className="profile-img-edit"></div>
                                </>
                            )}
                        </div>

                        <Row>
                            <div className="col-md-12 formik-form">
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={(values) => {
                                        console.log("Form submitted with values:", values);
                                    }}
                                >
                                    <Form className="login-form">
                                        <Row>
                                            <Col md={6}>
                                                <span className="input-area-title">Adınız*</span>
                                                <TobetoTextInput
                                                    className=""
                                                    type="text"
                                                    name="firstName"
                                                    value={account?.userName}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <span className="input-area-title">Soyadınız</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    name="lastName"
                                                    type="text"
                                                    value={user.lastName}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <span className="input-area-title">Telefon Numaranız*</span>
                                                <PhoneNumberValidation />

                                            </Col>
                                            <Col md={6}>
                                                <span className="input-area-title">Doğum Tarihiniz*</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    name="birthDate"
                                                    type="date"
                                                    date={account?.birthDate}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <span className="input-area-title">TC Kimlik No*</span>
                                                <TobetoTextInput
                                                    className=""
                                                    type="text"
                                                    name="nationalId"
                                                    value={account?.nationalId}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <span className="input-area-title">E Posta*</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    name="lastName"
                                                    type="eposta"
                                                    value={user.eposta}
                                                />
                                            </Col>
                                            <span className='id-required-info'> <i>*Aboneliklerde fatura için doldurulması zorunlu alan</i> </span>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <span className="input-area-title">Ülke*</span>
                                                <TobetoSelect
                                                    name="country"
                                                    className="mb-4"
                                                    component="select"
                                                    onChange={(event: any) => { handleCountries(event) }}
                                                    value={selectedCountryId}
                                                >
                                                    <option value="Ülke">Ülke Seçiniz*</option>
                                                    {countries?.items.map((country, index) => (
                                                        <option key={index} value={String(country.id)}>
                                                            {country.name}
                                                        </option>
                                                    ))}
                                                </TobetoSelect>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <span className="input-area-title">İl</span>

                                                <TobetoSelect
                                                    disabled={!selectedCountryId || selectedCountryId === "Ülke"}
                                                    name="cities"
                                                    className="mb-4"
                                                    component="select"
                                                    onChange={(event: any) => { handleCities(event) }}
                                                    value={selectedCityId}
                                                >
                                                    <option value="Ülke">İl Seçiniz</option>
                                                    {cities?.items.map((city, index) => (
                                                        <option key={index} value={String(city.id)}>
                                                            {city.name}
                                                        </option>
                                                    ))}
                                                </TobetoSelect>

                                            </Col>
                                            <Col md={6}>
                                                <span className="input-area-title">İlçe</span>
                                                <TobetoSelect
                                                    disabled={!selectedCityId || selectedCityId === "İl"}
                                                    name="district"
                                                    className="mb-4"
                                                    component="select"
                                                >
                                                    <option value="İlçe">İlçe Seçiniz</option>
                                                    {districts?.items.map((district, index) => (
                                                        <option key={index} value={district.name}>
                                                            {district.name}
                                                        </option>
                                                    ))}
                                                </TobetoSelect>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <span className="input-area-title">Mahalle/Sokak</span>
                                                <textarea
                                                    className="form-control mb-4"
                                                    name="about"
                                                    rows={5}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <span className="input-area-title">Hakkımda</span>
                                                <textarea
                                                    className="form-control mb-4 "
                                                    name="about"
                                                    placeholder="Kendini Kısaca Tanıt"
                                                    rows={5}
                                                />
                                            </Col>
                                        </Row>

                                        <Button className="mb-4" type="submit">
                                            Kaydet
                                        </Button>
                                    </Form>
                                </Formik>
                            </div>
                        </Row>
                    </div>
                </div>

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
                                <option selected>Dil Seçiniz</option>
                                {languages?.items.map((languages, index) => (
                                    <option key={index} value={String(languages.id)}>
                                        {languages.name}languages
                                    </option>
                                ))}
                            </Forms.Select>
                            <Forms.Select size="lg" id='pe-language-select'>
                                <option selected>Seviye Seçiniz</option>
                                {languageLevels?.items.map((languageLevels, index) => (
                                    <option key={index} value={String(languageLevels.id)}>
                                        {languageLevels.name}languages
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

                <div className="col-md-12" style={lastPathSegment === "yetkinliklerim" ? { display: 'block' } : { display: 'none' }}>
                    <Row>
                        <div className="col-md-12 formik-form"> {/* Use col-md-12 to occupy full width */}
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values) => {
                                    console.log("Form submitted with values:", values);
                                }}
                            >
                                <Form className="login-form">
                                    <Row>
                                        <Col md={12}>
                                            <span className="skill-input-label">Yetkinlik</span>

                                            <div className='skill-select-area'>
                                                <CreatableSelect
                                                    // isMulti
                                                    isClearable
                                                    // onCreateOption={handleAdd}
                                                    options={skills?.items.map((skill) => ({
                                                        value: skill.id,
                                                        label: skill.name
                                                    }))}
                                                    placeholder="Seçiniz"
                                                    className="skill-select"
                                                />

                                            </div>
                                        </Col>
                                    </Row>

                                    <Button className="login-button" type="submit">
                                        Kaydet
                                    </Button>
                                </Form>
                            </Formik>
                        </div>
                    </Row>
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
                                                <div className="input-wrapper">
                                                    <label className="input-label-text">{socialMedia.name}</label>
                                                    <InputGroup size="lg">
                                                        <InputGroup.Text id="input-group-text">
                                                            <img src={socialMedia.iconPath} />
                                                        </InputGroup.Text>
                                                        <FormControl aria-label="Amount (to the nearest dollar)" />
                                                        <InputGroup.Text id="input-group-text">
                                                            <button className="delete-btn">
                                                                <img src="https://tobeto.com/trash.svg" alt="Delete" />
                                                            </button>
                                                            <button className="edit-btn">
                                                                <RiPencilFill className="lu-pencil" />
                                                            </button>
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </div>
                                            ))}
                                            <p className="span-text">En fazla 3 adet medya seçimi yapılabilir.</p>
                                        </Col>
                                    </Row>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div >
                <div style={lastPathSegment === "ayarlar" ? { display: 'block' } : { display: 'none' }}>
                    <div className="pgn-npt col-12 col-md-12">
                        <div className="pswrd-row row mb-2">
                            <div className="npt col-12 col-md-4 mb-6">
                                <label className="input-title">Eski Şifre*</label>
                                <input name="currentPassword" className='tbt-input' type="password" placeholder='Eski Şifre' />
                            </div>
                            <div className="npt col-12 col-md-4 mb-6">
                                <label className="input-title">Yeni Şifre*</label>
                                <input name="currentPassword" className='tbt-input' type="password" placeholder='Yeni Şifre' />
                            </div>
                            <div className="npt col-12 col-md-4 mb-6">
                                <label className="input-title">Yeni Şifre Tekrar*</label>
                                <input name="currentPassword" className='tbt-input' type="password" placeholder='Yeni Şifre Tekrar' />
                            </div>
                        </div>
                        <div className='row-btn row'>
                            <div className='col-12 col-md-6'>
                                <button className="btn btn-primary w-100">Şifre Değiştir
                                </button>
                            </div>
                            <div className='col-md-6 col-12'>
                                <button className="btn btn-danger mb-2 w-100">Üyeliği Sonlandır
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
