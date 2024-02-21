import React, { useEffect, useState } from 'react'
import './PersonalInformationPage.css'
import { useLocation } from 'react-router-dom';
import GetListAccountResponse from '../../models/responses/account/getListAccountResponse';
import { DEFAULT_PROFILE_PHOTO } from '../../environment/environment';
import { Form, Formik } from 'formik';
import { Button, Col, Image, Row } from 'react-bootstrap';
import TobetoTextInput from '../../utilities/customFormControls/TobetoTextInput';
import PhoneNumberValidation from '../../components/PhoneNumberValidation/PhoneNumberValidation';
import TobetoSelect from '../../utilities/customFormControls/TobetoSelect';
import countryService from '../../services/countryService';
import cityService from '../../services/cityService';
import districtService from '../../services/districtService';
import { userActions } from '../../store/user/userSlice';
import { GetListCountryResponse } from '../../models/responses/country/getListCountryResponse';
import { Paginate } from '../../models/paginate';
import { GetListCityResponse } from '../../models/responses/city/getListCityResponse';
import GetListDistrictResponse from '../../models/responses/district/getListDistrictResponse';
import { useDispatch } from 'react-redux';
import authService from '../../services/authService';
import "./PersonalInformationPage.css"
import SidebarCard from '../../components/SidebarCard/SidebarCard';
import accountService from '../../services/accountService';
export default function PersonalInformationPage() {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];
    const user = authService.getUserInfo();

    const [countries, setCountries] = useState<Paginate<GetListCountryResponse>>();
    const [cities, setCities] = useState<Paginate<GetListCityResponse>>();
    const [districts, setDistricts] = useState<Paginate<GetListDistrictResponse>>();
    const [account, setAccount] = useState<GetListAccountResponse>();

    const [selectedCountryId, setSelectedCountryId] = useState<any>("Ülke");
    const [selectedCityId, setSelectedCityId] = useState<any>("İl");

    useEffect(() => {
        countryService.getAll(0, 10).then((result) => {
            setCountries(result.data);
        });

        cityService.getAll(0, 10).then((result) => {
            setCities(result.data)
        });

        districtService.getAll(0, 10).then((result) => {
            setDistricts(result.data)
        });

        accountService.getByAccountId(user.id).then(result => {
            setAccount(result.data);
        });
    }, []);

    const formatDate = (date: any) => {
        const inputDate = new Date(date);
        const day = String(inputDate.getDate()).padStart(2, '0');
        const month = String(inputDate.getMonth() + 1).padStart(2, '0');
        const year = inputDate.getFullYear();

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate
    }


    const initialValues = {
        email: account?.email,
        password: "",
        birthDate: account?.birthDate,
        country: "",
        street: "",
        about: ""
    };

    const handleCountries = (event: any) => {
        setSelectedCountryId(event.target.value)
    }

    const handleCities = (event: any) => {
        setSelectedCityId(event.target.value)
        districtService.getByCityId(event.target.value).then(result => {
            setDistricts(result.data)
        })
    }
    return (
        <div className='personal-information-page container'>

            <div className='side-bar-card'>
                <SidebarCard />
            </div>


            <div className="profile-details-page col-md-9 col-lg-9 col-12">
                <div className="profile-details-img">
                    <Image
                        src={account?.profilePhotoPath || DEFAULT_PROFILE_PHOTO}
                        alt="" />
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
                            }}>
                            <Form className="login-form">
                                <Row>
                                    <Col md={6}>
                                        <span className="input-area-title">Adınız*</span>
                                        <TobetoTextInput
                                            className=""
                                            type="text"
                                            name="firstName"
                                            value={account?.firstName} />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Soyadınız</span>
                                        <TobetoTextInput
                                            className="mb-4"
                                            name="lastName"
                                            type="text"
                                            value={account?.lastName} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <span className="input-area-title">Telefon Numaranız*</span>
                                        <PhoneNumberValidation
                                            phoneNumber={account?.phoneNumber} />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Doğum Tarihiniz*</span>
                                        <TobetoTextInput
                                            className="mb-4"
                                            name="birthDate"
                                            type="date"
                                            value={formatDate(account?.birthDate)} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <span className="input-area-title">TC Kimlik No*</span>
                                        <TobetoTextInput
                                            className=""
                                            type="text"
                                            name="nationalId"
                                            value={account?.nationalId} />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">E Posta*</span>
                                        <TobetoTextInput
                                            className="mb-4"
                                            name="lastName"
                                            type="eposta"
                                            value={account?.email} />
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
                                            value={selectedCountryId}>
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
                                            value={selectedCityId}>

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
                                            component="select">

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
                                            rows={5} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <span className="input-area-title">Hakkımda</span>
                                        <textarea
                                            className="form-control mb-4 "
                                            name="about"
                                            placeholder="Kendini Kısaca Tanıt"
                                            rows={5} />
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
    )
}
