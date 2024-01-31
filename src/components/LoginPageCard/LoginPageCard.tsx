import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap'
import TobetoTextInput from '../../utilities/customFormControls/TobetoTextInput';
import "./LoginPageCard.css"
import authService from '../../services/authService';

export default function LoginPageCard() {
    const initialValues = { email: "", password: "" }

    // const schema = Yup.object({
    //     email: Yup.string().required("email zorunlu"),
    //     password: Yup.number().required("password zorunlu.")
    // });
    const handleButtonClick = (values: any) => {

    };
    return (

        <div className="container login-page-card bg-front-white">
            <div className="row">
                <div className="col-md-6 login-content">
                    <div className="login-container">
                        <img className='tobeto-icon' src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" alt="" />
                        {/* <Form className='login-form'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="E-Posta" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Şifre" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                            <Button type="submit">
                                Giriş Yap
                            </Button>
                            <button className='transparent-button'> Şifremi Unuttum </button>
                            <p>
                                Henüz üye değil misin?{" "}
                                <a href="/kayit-ol" className='register'>
                                    Kayıt Ol
                                </a>
                            </p>
                        </Form>  */}

                        <Formik
                            initialValues={initialValues}
                            // validationSchema={schema
                            onSubmit={(values) => {

                                authService.login(values).then(response => {

                                    localStorage.setItem("token", response.data.token);
                                })
                            }}

                        >

                            <Form className='login-form'>
                                <TobetoTextInput className="mb-4" name="email" placeholder="E-Posta" placeholderTextColor="#fff" />
                                <TobetoTextInput className="mb-4" name="password" type="password" placeholder="Şifre" />
                                <Button className="mb-4" type="submit">  Giriş Yap</Button>
                                <Button className='transparent-button'> Şifremi Unuttum </Button>
                                <p>
                                    Henüz üye değil misin?{" "}
                                    <a href="/kayit-ol" className='register'>
                                        Kayıt Ol
                                    </a>
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div >

    )
}
