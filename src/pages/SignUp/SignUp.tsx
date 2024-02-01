import "./SignUp.css"
import { Col, Container, Image, Row, Button, Form } from 'react-bootstrap'
import { Formik } from 'formik';
import TobetoTextInput from '../../utilities/customFormControls/TobetoTextInput';
import authService from '../../services/authService';
import IstanbulCard2 from "../../components/IstanbulCard2/IstanbulCard2";


export default function SignUp() {

    const initialValues = { email: "", password: "" }
    const handleButtonClick = (values: any) => {
    };
    return (
        <Container className="sign-up-page">
            <Row>
                <Col md={6}>
                    <div className='rainbow-card'>
                        <Image className='tobeto-logo' src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" thumbnail />
                        <Formik
                            initialValues={initialValues}
                            // validationSchema={schema
                            onSubmit={(values) => {

                                authService.login(values).then(response => {

                                    localStorage.setItem("token", response.data.token);
                                })
                            }}

                        >

                            <Form className='sign-up-form'> 
                            <h3 className="mb-5">
                                Hemen Kayıt Ol
                            </h3>
                                <TobetoTextInput className="form-name mb-4" name="firstname" type="text" placeholder="Ad*" />
                                <TobetoTextInput className="form-lastname mb-4" name="lastname" type="text" placeholder="Soyad*" />
                                <TobetoTextInput className="form-email mb-4" name="email" type="text" placeholder="E-Posta*" />
                                <TobetoTextInput className="form-password mb-4" name="password" type="password" placeholder="Şifre*" />
                                <TobetoTextInput className="form-password-control mb-4" name="password-control" type="password" placeholder="Şifre Tekrar*" />
                                <Button className="rainbow-card-button" type="submit">  Kayıt Ol</Button>
                            
                            </Form>
                        </Formik>

                        {/* <form action="true">
                            <h3>
                                Hemen Kayıt Ol
                            </h3>
                            <input name="firstName" className="form-control mt-6" type="text" placeholder="Ad*"></input>
                            <input name="lastName" className="form-control mt-6" type="text" placeholder="Soyad*"></input>
                            <input name="email" className="form-control mt-6" type="email" placeholder="E-Posta*"></input>
                            <input name="password" className="form-control mt-6" type="password" placeholder="Şifre*"></input>
                            <input name="passwordAgain" className="form-control mt-6" type="password" placeholder="Şifre Tekrar*"></input>
                            <Button className='rainbow-card-button'>
                                Kayıt Ol
                            </Button>
                        </form> */}
                        <Col md={12}>
                            <div className='rainbow-card-2'>
                                <small>
                                    Zaten bir hesabın var mı?
                                    <span className="decorated-text-login"> Giriş Yap</span>
                                </small>

                            </div>
                        </Col>

                    </div>
                </Col>
                <Col md={6}>
                    <IstanbulCard2>

                        
                    </IstanbulCard2>
                    {/* <div className='rainbow-card-ik'>
                        <Image className='istanbul-kodluyor-logo' src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" thumbnail />
                        <Image className='banner-vertical' src="https://tobeto.com/_next/static/media/dotv.9454a9b6.svg" thumbnail />
                        <Image className='banner-horizontal' src="https://tobeto.com/_next/static/media/doth.d78dd392.svg" thumbnail />
                        <Button className='rainbow-card-ik-button'>
                            Başvur
                        </Button>
                    </div> */}
                </Col>
            </Row>
        </Container>

    )
}