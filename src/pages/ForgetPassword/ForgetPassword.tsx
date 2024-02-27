import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import TobetoTextInput from '../../utilities/customFormControls/TobetoTextInput';
import { Paginate } from '../../models/paginate';
import userService from '../../services/userService';
import authService from '../../services/authService';
import GetUserResponse from '../../models/responses/user/getUserResponse';
import "./ForgetPassword.css";

export default function ForgetPassword() {

    const [users, setUsers] = useState<GetUserResponse>();
    const user = authService.getUserInfo();

    useEffect(() => {
        userService.getById(user.id).then(result => {
            setUsers(result.data)
        })
    }, [])

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    return (
        <div className="row">
            <div className="container text-center">


                <div className='forget-password-page col-md-6'>
                    <h1>Şifre Sıfırlama</h1>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={(values) => {

                        }}>
                        <Form className="login-form text-center">
                            <Row>
                                <Col className='offset-1  mb-4' md={10}>
                                    <TobetoTextInput
                                        className="text-center"
                                        type="text"
                                        name="firstName"
                                    />
                                </Col>
                            </Row>

                            <Button className="mb-4 forget-button   " type="submit">
                                Gönder
                            </Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}