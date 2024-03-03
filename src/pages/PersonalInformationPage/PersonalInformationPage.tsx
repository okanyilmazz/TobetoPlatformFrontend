import { useEffect, useState } from 'react';
import './PersonalInformationPage.css';
import { useLocation } from 'react-router-dom';
import { DEFAULT_PROFILE_PHOTO } from '../../environment/environment';
import { Form, Formik } from 'formik';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { GetListCountryResponse } from '../../models/responses/country/getListCountryResponse';
import { Paginate } from '../../models/paginate';
import { GetListCityResponse } from '../../models/responses/city/getListCityResponse';
import TobetoTextInput from '../../utilities/customFormControls/TobetoTextInput';
import PhoneNumberValidation from '../../components/PhoneNumberValidation/PhoneNumberValidation';
import TobetoSelect from '../../utilities/customFormControls/TobetoSelect';
import countryService from '../../services/countryService';
import cityService from '../../services/cityService';
import districtService from '../../services/districtService';
import authService from '../../services/authService';
import SidebarCard from '../../components/SidebarCard/SidebarCard';
import accountService from '../../services/accountService';
import UpdateAccountRequest from '../../models/requests/account/updateAccountRequest';
import TobetoTextArea from '../../utilities/customFormControls/TobetoTextArea';
import GetAccountResponse from '../../models/responses/account/getAccountResponse';
import UpdateAddressRequest from '../../models/requests/address/updateAddressRequest';
import addressService from '../../services/addressService';
import GetAddressResponse from '../../models/responses/address/getAddressResponse';
import UpdateUserRequest from '../../models/requests/user/updateUserRequest';
import userService from '../../services/userService';
import "./PersonalInformationPage.css";
import AddAddressRequest from '../../models/requests/address/addAddressRequest';
import ProfileToaster from '../../components/ProfileToaster/ProfileToaster';
import * as Yup from 'yup';
import GetListDistrictResponse from '../../models/responses/district/getListDistrictResponse';
import { INFO_IS_CHANGED, REQUIRED_MESSAGE } from '../../environment/messages';

export default function PersonalInformationPage() {

    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];
    const user = authService.getUserInfo();

    const [countries, setCountries] = useState<Paginate<GetListCountryResponse>>();
    const [cities, setCities] = useState<Paginate<GetListCityResponse>>();
    const [districts, setDistricts] = useState<Paginate<GetListDistrictResponse>>();
    const [phoneNumberState, setPhoneNumberState] = useState<string>();

    const [account, setAccount] = useState<GetAccountResponse>();
    const [accountAddress, setAccountAddress] = useState<GetAddressResponse>();


    const [selectedCountryId, setSelectedCountryId] = useState<any>("Ülke");
    const [selectedCityId, setSelectedCityId] = useState<any>("İl");
    const [selectedDistrictId, setSelectedDistrictId] = useState<any>("İlçe");


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
    }, []);

    useEffect(() => {
        accountService.getById(user.id).then(result => {
            setAccount(result.data);
        });

        addressService.getByAccountId(user.id).then((result) => {
            setAccountAddress(result.data)
        });
    }, [user.id])


    const formatDate = (date: any) => {
        const inputDate = new Date(date);
        const day = String(inputDate.getDate()).padStart(2, '0');
        const month = String(inputDate.getMonth() + 1).padStart(2, '0');
        const year = inputDate.getFullYear();

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate
    }

    const handleCountries = (event: any) => {
        console.log(event.target.value);

        setSelectedCountryId(event.target.value)
    }

    const handlePhone = (event: any) => {
        setPhoneNumberState(event.target.value)
    }

    const handleCities = (event: any) => {
        setSelectedCityId(event.target.value)
        districtService.getByCityId(event.target.value).then(result => {
            setDistricts(result.data)
        })
    }

    const handleDistricts = (event: any) => {
        setSelectedDistrictId(event.target.value)
    }


    const initialValues = {
        firstName: account?.firstName,
        lastName: account?.lastName || "",
        email: account?.email || "",
        birthDate: formatDate(account?.birthDate),
        country: accountAddress?.countryId,
        city: accountAddress?.cityId || "",
        district: accountAddress?.districtId,
        addressDetail: accountAddress?.addressDetail || "",
        about: account?.description || "",
        nationalId: account?.nationalId || "",
        phoneNumber: account?.phoneNumber || ""
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(REQUIRED_MESSAGE),
        lastName: Yup.string().required(REQUIRED_MESSAGE),
        birthDate: Yup.string().required(REQUIRED_MESSAGE),
        nationalId: Yup.string().required(REQUIRED_MESSAGE),
        country: Yup.string().required(REQUIRED_MESSAGE),
        city: Yup.string().required(REQUIRED_MESSAGE),
        district: Yup.string().required(REQUIRED_MESSAGE),

    });

    const updatePersonalInformation = async (values: any) => {
        console.log(accountAddress)
        if (phoneNumberState && accountAddress) {
            const updateAddress: UpdateAddressRequest = {
                id: accountAddress?.id,
                accountId: user.id,
                cityId: selectedCityId,
                countryId: selectedCountryId,
                districtId: selectedDistrictId,
                addressDetail: values.addressDetail
            }
            await addressService.update(updateAddress);

            const updateAccount: UpdateAccountRequest = {
                id: user.id,
                userId: user.id,
                birthDate: values.birthDate,
                description: values.about,
                nationalId: values.nationalId,
                phoneNumber: phoneNumberState,
                profilePhotoPath: "",
            }
            var updateResult = await accountService.update(updateAccount);

            const updateUser: UpdateUserRequest = {
                id: user.id,
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                password: ""
            }

            // var updateResult = await userService.update(updateUser); 

            if (updateResult.data) ProfileToaster({ name: INFO_IS_CHANGED });
        }
        else {
            const addAddress: AddAddressRequest = {
                accountId: user.id,
                cityId: selectedCityId,
                countryId: selectedCountryId,
                districtId: selectedDistrictId,
                addressDetail: values.addressDetail
            }
            await addressService.add(addAddress);
        }

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
                        </>
                    )}
                    <div className="profile-img-edit"></div>
                </div>
                <Row>
                    <div className="col-md-12 formik-form">
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log(values)
                                updatePersonalInformation(values);
                            }}>
                            <Form className="login-form">
                                <Row>
                                    <Col md={6}>
                                        <span className="input-area-title">Adınız*</span>
                                        <TobetoTextInput
                                            className="mb-3"
                                            type="text"
                                            name="firstName" />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Soyadınız</span>
                                        <TobetoTextInput
                                            className="mb-3"
                                            name="lastName"
                                            type="text" />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <span className="input-area-title">Telefon Numaranız*</span>
                                        <PhoneNumberValidation
                                            name="phoneNumber"
                                            phoneNumber={account?.phoneNumber}
                                            onChange={(event: any) => {
                                                handlePhone(event);
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Doğum Tarihiniz*</span>
                                        <TobetoTextInput
                                            className="mb-3"
                                            name="birthDate"
                                            type="date" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <span className="input-area-title">TC Kimlik No*</span>
                                        <TobetoTextInput
                                            type="text"
                                            name="nationalId" />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">E Posta*</span>
                                        <TobetoTextInput
                                            className="mb-4"
                                            name="email"
                                            type="eposta"
                                            disabled={false} />
                                    </Col>
                                    <span className='id-required-info'> <i>*Aboneliklerde fatura için doldurulması zorunlu alan</i> </span>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <span className="input-area-title">Ülke*</span>
                                        <TobetoSelect
                                            name="countries"
                                            className="mb-4"
                                            component="select"
                                            onChange={(event: any) => {
                                                handleCountries(event);
                                            }}
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
                                            name="city"
                                            className="mb-4"
                                            component="select"
                                            onChange={(event: any) => { handleCities(event) }}
                                        >
                                            <option value="İl">İl Seçiniz</option>
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
                                            name="districts"
                                            className="mb-4"
                                            component="select"
                                            onChange={(event: any) => { handleDistricts(event) }}>

                                            <option value="İlçe">İlçe Seçiniz</option>
                                            {districts?.items.map((district, index) => (
                                                <option key={index} value={String(district.id)}>
                                                    {district.name}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <span className="input-area-title">Mahalle/Sokak</span>
                                        <TobetoTextArea
                                            className="form-control mb-4"
                                            name="addressDetail"
                                            rows={5} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <span className="input-area-title">Hakkımda</span>
                                        <TobetoTextArea
                                            className="form-control mb-4 "
                                            type="text"
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