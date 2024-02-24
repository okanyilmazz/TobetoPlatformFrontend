import React, { useEffect, useState } from 'react'
import "./SocialMediaPage.css"
import { Button, Col, FormControl, Image, InputGroup, Row } from 'react-bootstrap'
import { Form, Formik } from 'formik'
import TobetoTextInput from '../../utilities/customFormControls/TobetoTextInput'
import TobetoSelect from '../../utilities/customFormControls/TobetoSelect'
import GetListAccountSocialMediaResponse from '../../models/responses/accountSocialMedia/getListAccountSocialMediaResponse'
import { RiPencilFill } from 'react-icons/ri'
import { toast } from 'react-toastify'
import Modals from '../../components/Modal/Modals'
import { Paginate } from '../../models/paginate'
import AddAccountSocialMediaRequest from '../../models/requests/accountSocialMedia/addAccountSocialMediaRequest'
import DeleteAccountSocialMediaRequest from '../../models/requests/accountSocialMedia/deleteAccountSocialMediaRequest'
import UpdateAccountSocialMediaRequest from '../../models/requests/accountSocialMedia/updateAccountSocialMediaRequest'
import GetListSocialMediaResponse from '../../models/responses/socialMedia/getListSocialMediaResponse'
import accountSocialMediaService from '../../services/accountSocialMediaService'
import authService from '../../services/authService'
import { useLocation } from 'react-router-dom'
import socialMediaService from '../../services/socialMediaService'
import SidebarCard from '../../components/SidebarCard/SidebarCard'
export default function SocialMediaPage() {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];

    const user = authService.getUserInfo();
    const [selectedAccountSocialMedia, setSelectedAccountSocialMedia] = useState<GetListAccountSocialMediaResponse>();
    const [socialMedias, setSocialMedias] = useState<Paginate<GetListSocialMediaResponse>>();
    const [accountSocialMedias, setAccountSocialMedias] = useState<Paginate<GetListAccountSocialMediaResponse>>();
    const [showAccountSocialMediaUpdateModal, setShowAccountSocialMediaUpdateModal] = useState(false)

    useEffect(() => {
        socialMediaService.getAll(0, 5).then((result) => {
            setSocialMedias(result.data);
        });

        accountSocialMediaService.getByAccountId(user.id, 0, 3).then((result) => {
            console.log(result.data);
            setAccountSocialMedias(result.data);
        })
    }, [])

    const socialMediaInitialValues = {
        socialMediaId: "",
        url: ""
    }

    const handleDeleteAccountSocialMedia = async (accountSocialMedia: any) => {
        const deleteAccountSocialMedia: DeleteAccountSocialMediaRequest = {
            id: accountSocialMedia.id
        }
        await accountSocialMediaService.delete(deleteAccountSocialMedia);
        getAccountSocialMedia();
    }

    const handleCloseAccountSocialMediaUpdateModal = () => {
        setShowAccountSocialMediaUpdateModal(false);
    }

    const handleOpenAccountSocialMediaUpdateModal = (accountSocialMedia: any) => {
        setShowAccountSocialMediaUpdateModal(true);
        setSelectedAccountSocialMedia(accountSocialMedia);
    }

    const handleAddAccountSocialMedia = async (accountSocialMedia: any) => {
        const addAccountSocialMedia: AddAccountSocialMediaRequest = {
            accountId: user.id,
            socialMediaId: accountSocialMedia.socialMediaId,
            url: accountSocialMedia.url
        }
        await accountSocialMediaService.add(addAccountSocialMedia);
        getAccountSocialMedia();
    }

    const handleUpdateAccountSocialMedia = async (accountSocialMedia: any) => {
        if (selectedAccountSocialMedia) {
            const updateAccountSocialMedia: UpdateAccountSocialMediaRequest = {
                id: selectedAccountSocialMedia?.id,
                accountId: user.id,
                socialMediaId: accountSocialMedia.socialMediaId,
                url: accountSocialMedia.url
            }
            await accountSocialMediaService.update(updateAccountSocialMedia);
            getAccountSocialMedia();
            toast.success("Sosyal medya güncellendi");
            setShowAccountSocialMediaUpdateModal(false);
        }
    }

    const getAccountSocialMedia = () => {
        accountSocialMediaService.getByAccountId(user.id, 0, 3).then((result) => {
            console.log(result.data);
            setAccountSocialMedias(result.data);
        })
    }

    return (
        <div className='social-media-page container'>
            <div className='side-bar-card'>
                <SidebarCard />
            </div>

            <div className="row mt-5 col-md-9 col-lg-9 col-12">
                <div className="formik-form">
                    <Formik
                        initialValues={socialMediaInitialValues}
                        onSubmit={(values) => {
                            handleAddAccountSocialMedia(values)
                        }}>
                        <Form className="login-form" style={accountSocialMedias?.count === 3 ? { display: 'none' } : { display: 'block' }}>
                            <Row >
                                <Col md={4}>
                                    <TobetoSelect
                                        name="socialMediaId"
                                        className="mb-4"
                                        component="select">
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
                                        name="url"
                                        placeholder="http://"
                                        placeholderTextColor="#fff"
                                    />
                                </Col>
                            </Row>
                            <Button className="mb-4" type="submit">
                                Kaydet
                            </Button>
                        </Form>
                    </Formik>
                    <Row>
                        <Col>
                            {accountSocialMedias?.items.map((accountSocialMedia) => (
                                <>
                                    <div className="social-media-content">
                                        <label className="social-media-text">{accountSocialMedia.socialMediaName}</label>
                                        <InputGroup size="lg">
                                            <InputGroup.Text id="social-media-icon">
                                                <Image width={20} height={20} src={accountSocialMedia.iconPath} />
                                            </InputGroup.Text>
                                            <FormControl className="social-media-form" disabled value={accountSocialMedia.url} />
                                            <InputGroup.Text id="social-media-icon">
                                                <Button className="social-media-delete-btn" onClick={() => handleDeleteAccountSocialMedia(accountSocialMedia)}>
                                                    <Image src="/assets/Icons/profile-settings/trash.svg" width={24} height={24} alt="Delete" />
                                                </Button>
                                                <Button className="social-media-edit-btn" onClick={() => handleOpenAccountSocialMediaUpdateModal(accountSocialMedia)}>
                                                    <RiPencilFill className="lu-pencil" />
                                                </Button>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                    <Modals
                                        className={"update-modal"}
                                        show={showAccountSocialMediaUpdateModal}
                                        header={true}
                                        title={"Medya Hesabı Güncelleme"}
                                        onHide={handleCloseAccountSocialMediaUpdateModal}
                                        body={
                                            <div className="formik-form">
                                                <Formik
                                                    initialValues={{
                                                        socialMediaId: selectedAccountSocialMedia?.socialMediaId,
                                                        url: selectedAccountSocialMedia?.url
                                                    }}
                                                    onSubmit={(values) => {
                                                        handleUpdateAccountSocialMedia(values)
                                                    }}>
                                                    <Form className="update-modal-form" style={accountSocialMedias?.count === 3 ? { display: 'none' } : { display: 'block' }}>
                                                        <Row >
                                                            <Col md={4}>
                                                                <TobetoSelect
                                                                    name="socialMediaId"
                                                                    className="mb-4"
                                                                    component="select">
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
                                                                    name="url"
                                                                    placeholder="http://"
                                                                    placeholderTextColor="#fff" />
                                                            </Col>
                                                        </Row>
                                                        <div className='form-buttons'>
                                                            <Button className="mb-4" type="submit">
                                                                Güncelle
                                                            </Button>
                                                            <Button className="mb-4" onClick={handleCloseAccountSocialMediaUpdateModal}>
                                                                Kapat
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                </Formik>
                                            </div>
                                        }
                                        footerShow={false} />
                                </>
                            ))}
                            <p style={accountSocialMedias?.count === 3 ? { display: 'contents' } : { display: 'none' }} className="social-media-span-text">En fazla 3 adet medya seçimi yapılabilir.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
