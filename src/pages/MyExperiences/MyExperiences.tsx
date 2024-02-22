import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Formik, Form, FormikValues } from "formik";
import TobetoTextInput from "../../utilities/customFormControls/TobetoTextInput";
import TobetoSelect from "../../utilities/customFormControls/TobetoSelect";
import countryService from "../../services/countryService";
import { GetListCountryResponse } from "../../models/responses/country/getListCountryResponse";
import { Paginate } from "../../models/paginate";
import cityService from "../../services/cityService";
import { GetListCityResponse } from "../../models/responses/city/getListCityResponse";
import Modals from "../../components/Modal/Modal";
import accountService from "../../services/accountService";
import GetListAccountResponse from "../../models/responses/account/getListAccountResponse";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user/userSlice";




// export default function MyExperiences() {
//     const initialValues = {
//         "institution-name": "",
//         "sector": "",
//         "work-start-date": "",
//         "position": "",
//         "city": "",
//         "work-end-date": "",
//         "work-description": ""
//     };
//     const dispatch = useDispatch();

//     const [show, setShow] = useState(false);

//     const [cities, setCities] = useState<Paginate<GetListCityResponse>>();

//     const userState = useSelector((state: any) => state.user);
//     // const [selectedCityId, setSelectedCityId] = useState<any>(NIL_UUID);

//     useEffect(() => {

//         if (!userState.user) {
//           dispatch(userActions.getUserInfo());
   
//           cityService.getAll().then(result => {
//         setCities(result.data)
//     });

//     accountService.getByAccountId(userState.user.id).then(result => {
//         setAccount(result.data);
//         console.log(result.data);
//     });


// }
//   }, [userState]);
export default function MyExperiences() {
    const initialValues = {
        "institution-name": "",
        "sector": "",
        "work-start-date": "",
        "position": "",
        "city": "",
        "work-end-date": "",
        "work-description": ""
    };

    const dispatch = useDispatch();
    const userState = useSelector((state: any) => state.user);
    const [cities, setCities] = useState<Paginate<GetListCityResponse>>();
    const [account, setAccount] = useState<GetListAccountResponse>();

    useEffect(() => {
        if (!userState.user) {
            dispatch(userActions.getUserInfo());
        }

        cityService.getAll().then((result: Paginate<GetListCityResponse>) => {
            setCities(result.data);
        });

        accountService.getByAccountId(userState.user.id).then(result => {
            setAccount(result.data);
        });
    }, [dispatch, userState.user]);

const handleSubmit = (values: FormikValues) => {
    console.log('Form submitted with values:', values);
    // Burada form değerlerini işleyebilirsiniz
    // Örnek olarak, form değerlerini bir API'ye gönderebilir veya başka bir işlem yapabilirsiniz
};

return (
    <div className='experience-page'>
        <Container>
            <Row>
                <Col md={3}>
                    sdgjhldlsfaşlkzc
                </Col>

                <Col md={9} className="experience-page formik-form">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        <Form className='login-form'>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        <span className="mb-5">Kurum Adı*</span>
                                        <TobetoTextInput className="mb-4" name="institution-name" placeholder="Kampüs 365" placeholderTextColor="#fff" />
                                        <span className="mb-5">Sektör*</span>
                                        <TobetoTextInput className="mb-4" name="sector" placeholder="Yazılım" />
                                        <span className="mb-5">İş Başlangıcı*</span>
                                        <TobetoTextInput className="mb-4" name="work-start-date" placeholder="gg.aa.yyyy" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <span className="mb-5">Pozisyon*</span>
                                        <TobetoTextInput className="mb-4" name="position" placeholder="Front-End-Developer" />
                                        <span className="mb-5">İl Seçiniz*</span>
                                        <TobetoSelect className="mb-4" name="cities" placeholder="İl Seçiniz" component="select" />
                                   
                                            <option value="Şehir">İl Seçiniz</option>
                                            {cities?.items.map((city, index) => (
                                                <option key={index} value={city.name}>
                                                    {city.name}
                                                </option>
                                            ))}
                                            <span className="mb-5">İş Bitişi*</span>
                                            <TobetoTextInput className="mb-4" name="work-end-date" placeholder="gg.aa.yyyy" />
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <span className="mb-5">İş Tanımı*</span>
                                    <TobetoTextInput className="mb-4" name="work-description" />
                                    <Button className="mb-4" type="submit">Kaydet</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    </div>
);
                                            }
