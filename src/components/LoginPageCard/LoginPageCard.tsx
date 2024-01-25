import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./LoginPageCard.css"


export default function LoginPageCard() {


    return (

        <div className="container bg-front-white ">
            <div className="row">
                <div className="col-md-6 login-content">
                    <div className="login-container">
                        <img className='tobeto-icon' src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" alt="" />
                        <Form className='login-form'>
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

                        </Form>
                    </div>
                </div>
            </div>
        </div >


    )
}
