import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Formik, Form } from "formik";
import * as Yup from 'yup'; 
import TobetoTextInput from "../../utilities/customFormControls/TobetoTextInput";
import TobetoSelect from "../../utilities/customFormControls/TobetoSelect";
import { GetListCityResponse } from "../../models/responses/city/getListCityResponse";
import accountService from "../../services/accountService";
import { Paginate } from "../../models/paginate";
import cityService from "../../services/cityService";
import GetAccountResponse from "../../models/responses/account/getAccountResponse";


export default function MyExperiences() {
    const [cities, setCities] = useState<Paginate<GetListCityResponse>>();
    const [account, setAccount] = useState<GetAccountResponse>();
    const [workExperiences, setWorkExperiences] = useState<Paginate<GetListWorkExperienceResponse>>();
    const user = authService.getUserInfo();
    const [showDeleteCard, setShowDeleteCard] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const closeModal = () => {
        setShowModal(false)
    }


    const initialValues = {
        "institution-name": "",
        "sector": "",
        "work-start-date": "",
        "position": "",
        "city": "",
        "work-end-date": "",
        "work-description": ""
    };

    const validationSchema = Yup.object().shape({
        companyName: Yup.string()
            .required('Doldurulması zorunlu alan*')
            .min(5, 'En az 5 karakter girmelisiniz'),
        department: Yup.string()
            .required('Doldurulması zorunlu alan*')
            .min(5, 'En az 5 karakter girmelisiniz'),
        industry: Yup.string()
            .required('Doldurulması zorunlu alan*')
            .min(5, 'En az 5 karakter girmelisiniz'),
        cityId: Yup.string().required('Doldurulması zorunlu alan*'),
        startDate: Yup.date().required('Doldurulması zorunlu alan*'),
        endDate: Yup.date().required('Doldurulması zorunlu alan*'),
    });

    const getWorkExperience = () => {
        workExperienceService.getByAccountId(user.id).then((result) => {
            console.log(result.data);
            setWorkExperiences(result.data);
        })
    }

    const deleteWorkExperience = async (workExperience: any) => {
        const deleteWorkExperience: DeleteWorkExperienceRequest = {
            id: workExperience.id,
        }

        await workExperienceService.delete(deleteWorkExperience);
        setShowDeleteCard(false);
        getWorkExperience();;
    }

    const handleAddWorkExperience = async (workExperience: any) => {
        const addWorkExperience: AddWorkExperienceRequest = {
            accountId: user.id,
            cityId: workExperience.cityId,
            industry: workExperience.industry,
            companyName: workExperience.companyName,
            department: workExperience.department,
            description: workExperience.description,
            startDate: workExperience.startDate,
            endDate: workExperience.endDate,
        }
        console.log(addWorkExperience);

        await workExperienceService.add(addWorkExperience);
        getWorkExperience();
    }

    const dispatch = useDispatch();
    const userState = useSelector((state: any) => state.user);
    const [cities, setCities] = useState<Paginate<GetListCityResponse>>();
    const [account, setAccount] = useState<GetAccountResponse>();

    useEffect(() => {
        if (!userState.user) {
            dispatch(userActions.getUserInfo());
        }

        cityService.getAll(0, 100).then((result: any) => {
            setCities(result.data);
        });

        accountService.getById(userState.user.id).then(result => {
            setAccount(result.data);
        });
    }, [dispatch, userState.user]);

    const handleSubmit = (values: FormikValues) => {
        console.log('Form submitted with values:', values);
    };

    return (
        <div className='experience-page'>
            <Container>
                <Row>
                    <Col md={3}>
                        <SidebarCard />
                    </Col>

                    <Col md={9} className="experience-page formik-form">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handleAddWorkExperience(values)
                            }}
                            onSubmit={handleSubmit}>

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

                            {({ errors, touched }) => (
                                <Form className='login-form'>
                                    <Row>
                                        <Col md={6}>
                                            <div>
                                                <span className="mb-5">Kurum Adı*</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    name="companyName"
                                                    placeholder="Kampüs 365"
                                                    placeholderTextColor="#fff" />
                                                <span className="mb-5">Sektör*</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    name="industry"
                                                    placeholder="Yazılım" />
                                                <span className="mb-5">İş Başlangıcı*</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    name="startDate"
                                                    type="date"
                                                    placeholder="gg.aa.yyyy" />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div>
                                                <span className="mb-5">Pozisyon*</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    name="department"
                                                    placeholder="Front-End-Developer" />
                                                <span className="mb-5">Şehir Seçiniz*</span>
                                                <TobetoSelect
                                                    className="mb-4"
                                                    name="cityId"
                                                    placeholder="İl Seçiniz"
                                                    component="select">
                                                    <option value="Şehir">İl Seçiniz</option>
                                                    {cities?.items.map((city, index) => (
                                                        <option key={index} value={String(city.id)}>
                                                            {city.name}
                                                        </option>
                                                    ))}
                                                </TobetoSelect>
                                                <span className="mb-5">İş Bitişi*</span>
                                                <TobetoTextInput
                                                    className="mb-4"
                                                    type="date"
                                                    name="endDate"
                                                    placeholder="gg.aa.yyyy" />
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <span className="mb-5">İş Açıklaması*</span>
                                            <TobetoTextArea
                                                className="mb-4 form-control"
                                                name="work-description"
                                                rows={5} />
                                            <Button className="mb-4" type="submit">Kaydet</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                        {workExperiences?.items.map((workExperience, index) => (

                            <div className="my-grade">
                                <div className="grade-header">
                                    <div className="grade-date">
                                        <img className='grade-back-img' src="https://tobeto.com/grade-date.svg" alt="Grade Date" />
                                        <p>
                                            {`${new Date(workExperience.startDate).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' })} - 
    ${new Date(workExperience.endDate).toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' })}`}
                                        </p>

                                    </div>
                                </div>
                                <div className="grade-details">
                                    <div className="grade-details-col">
                                        <span className="grade-details-header">Kurum Adı</span>
                                        <span className="grade-details-content">{workExperience.companyName}</span>
                                    </div>
                                    <div className="grade-details-col">
                                        <div className="grade-details-header">Pozisyon</div>
                                        <div className="grade-details-content">{workExperience.department}</div>
                                    </div>
                                    <div className="grade-details-col">
                                        <div className="grade-details-header">Sektör</div>
                                        <div className="grade-details-content"> {workExperience.industry} </div>
                                    </div>
                                    <div className="grade-details-col">
                                        <div className="grade-details-header">Şehir</div>
                                        <div className="grade-details-content"> İstanbul</div>
                                    </div>
                                    <div>
                                        <span className="grade-delete" onClick={() => setShowDeleteCard(true)}>
                                        </span>

                                        <span className="grade-info" onClick={() => setShowModal(true)}></span>
                                    </div>
                                </div>

                                <Modals
                                    className="user-modal"
                                    show={showModal}
                                    onHide={() => closeModal()}
                                    header={true}
                                    title={
                                        <div className="user-modal-description"  >
                                            <p>İş Açıklaması</p>

                                        </div>
                                    }
                                    body={
                                        workExperience.department
                                    }
                                    footerShow={true}
                                    footer={
                                        <div className="user-modal-footer-button"  >
                                            <Button className="mb-4" onClick={() => closeModal()}>
                                                Kapat
                                            </Button>
                                        </div>
                                    }
                                />
                                {showDeleteCard && (
                                    <DeleteCard
                                        show={showDeleteCard}
                                        handleClose={() => setShowDeleteCard(false)}
                                        handleDelete={() => deleteWorkExperience(workExperience)}
                                        body="deneyimi"
                                    />
                                )}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
