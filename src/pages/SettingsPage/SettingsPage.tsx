import React from 'react'
import './SettingsPage.css'
import SidebarCard from '../../components/SidebarCard/SidebarCard'
import { Form, Formik } from 'formik'
import TobetoTextInput from '../../utilities/customFormControls/TobetoTextInput'
import ChangePasswordRequest from '../../models/requests/auth/changePasswordRequest'
import authService from '../../services/authService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/auth/authSlice'
import * as Yup from 'yup';

export default function SettingsPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = authService.getUserInfo();

    const handleChangePassword = async (values: any) => {
        const changePasswordRequest: ChangePasswordRequest = {
            userId: user.id,
            newPassword: values.newPassword,
            oldPassword: values.oldPassword
        }
        const result = await authService.changePassword(changePasswordRequest)
        if (result.data) {
            dispatch(authActions.removeToken());
            navigate("/giris");
            toast.success("Şifreniz başarıyla değiştirildi.")
        }
    }

    const validationSchema = Yup.object({
        newPassword: Yup.string().required('Şifre alanı boş geçilemez.'),
        oldPassword: Yup.string().required('Şifre alanı boş geçilemez.'),
        confirmPassword: Yup.string().required('Şifre alanı boş geçilemez.')
    })
    return (
        <div className='settings-p container' >
            <div className='side-bar-card'>
                <SidebarCard />
            </div>
            <Formik
                initialValues={{
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }}
                onSubmit={(values) => {
                    if (values.newPassword === values.confirmPassword) handleChangePassword(values)
                    else toast.error("Şifreler uyuşmamaktadır.");
                }}
            >
                <Form className="login-form">
                    <div className="settings-container row mt-5 col-md-12">
                        <div className="pswrd-row row  mb-2">
                            <div className="npt col-12 col-md-4 mb-6">
                                <label className="input-title">Eski Şifre*</label>
                                <TobetoTextInput name="oldPassword" className='tbt-input' type="password" placeholder='Eski Şifre' />
                            </div>
                            <div className="npt col-12 col-md-4 mb-6">
                                <label className="input-title">Yeni Şifre*</label>
                                <TobetoTextInput name="newPassword" className='tbt-input' type="password" placeholder='Yeni Şifre' />
                            </div>
                            <div className="npt col-12 col-md-4 mb-6">
                                <label className="input-title">Yeni Şifre Tekrar*</label>
                                <TobetoTextInput name="confirmPassword" className='tbt-input' type="password" placeholder='Yeni Şifre Tekrar' />
                            </div>
                        </div>
                        <div className='row-btn row'>
                            <div className='col-12 col-md-6'>
                                <button className="btn btn-primary w-100" type='submit'>Şifre Değiştir
                                </button>
                            </div>
                            <div className='col-md-6 col-12'>
                                <button className="btn btn-danger mb-2 w-100">Üyeliği Sonlandır
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}