import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./LanguagePage.css";
import DeleteCard from '../../components/DeleteCard/DeleteCard';
import ProfileToaster from '../../components/ProfileToaster/ProfileToaster';
import languageLevelService from '../../services/languageLevelService';
import languageService from '../../services/languageService';
import { Paginate } from '../../models/paginate';
import GetListLanguageResponse from '../../models/responses/language/getListLanguageResponse';
import GetListLanguageLevelResponse from '../../models/responses/languageLevel/getListLanguageLevelResponse';
import { useLocation } from 'react-router-dom';
import authService from '../../services/authService';
import DeleteLanguageRequest from '../../models/requests/language/deleteLanguageRequest';
import SidebarCard from '../../components/SidebarCard/SidebarCard';
import accountLanguageService from '../../services/accountLanguageService';
import GetListAccountLanguageResponse from '../../models/responses/accountLanguage/getListAccountLanguageResponse';

const validationSchema = Yup.object().shape({
    /* language: Yup.string().required('Dil Seçimi Zorunludur'),
    level: Yup.string().required('Seviye Seçimi Zorunludur'), */
});

export default function LanguagePage() {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];
    const user = authService.getUserInfo();

    const [languages, setLanguages] = useState<Paginate<GetListLanguageResponse>>();
    const [languageLevels, setLanguageLevels] = useState<Paginate<GetListLanguageLevelResponse>>();
    const [accountLanguage, setAccountLanguage] = useState<Paginate<GetListAccountLanguageResponse>>();
    const [showDeleteCard, setShowDeleteCard] = useState(false);
    const [accountLanguageRequests, setAccountLanguageRequests] = useState<any>();

    useEffect(() => {
        languageService.getAll(0, 10).then((result) => {
            setLanguages(result.data)
        });

        languageLevelService.getAll(0, 10).then((result) => {
            setLanguageLevels(result.data)
        });

        accountLanguageService.getAll(0, 10).then((result) => {
            setAccountLanguage(result.data)
        });

    }, [])

    const handleShowDeleteCardClick = () => {
        setShowDeleteCard(true);
    };

    const handleDeleteConfirmation = () => {
        setShowDeleteCard(false);
    };

    return (
        <div className='language-page container'>
            <div className='side-bar-card'>
                <SidebarCard />
            </div>

            <div className='col-md-9 col-lg-9 col-12' >
                <Formik
                    initialValues={{
                        language: '',
                        level: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        if (values.language && values.level) {
                           /*  await accountLanguageService.add({
                                languageId: values.language,
                                levelId: values.level
                            }); */
                            ProfileToaster({ name: "Yabancı dil bilgisi eklendi." });
                            resetForm();
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='pe-language'>
                                <Field as="select" size="lg" id='pe-language-select' name="language" className={touched.language && errors.language ? 'form-control is-invalid' : 'form-control'}>
                                    <option value="" disabled selected>Dil Seçiniz</option>
                                    {languages?.items.map((language, index) => (
                                        <option key={index} value={String(language.id)}>
                                            {language.name}
                                        </option>
                                    ))}
                                </Field>
                                {touched.language && errors.language && <div className="invalid-feedback">{errors.language}</div>}
                                <Field as="select" size="lg" id='pe-language-select' name="level" className={touched.level && errors.level ? 'form-control is-invalid' : 'form-control'}>
                                    <option value="" disabled selected>Seviye Seçiniz</option>
                                    {languageLevels?.items.map((languageLevel, index) => (
                                        <option key={index} value={String(languageLevel.id)}>
                                            {languageLevel.name}
                                        </option>
                                    ))}
                                </Field>
                                {touched.level && errors.level && <div className="invalid-feedback">{errors.level}</div>}
                            </div>
                            <button type="submit" className="py-2 pe-language-button">Kaydet</button>
                            <div className='pe-result'>
                                {accountLanguage && accountLanguage.items.map((accountLanguage, index) => (
                                    <div className="pe-container" key={index}>
                                        <div className="pe-edit-language">
                                            <div>
                                                <span>{accountLanguage.languageName}</span>
                                                <p>{accountLanguage.languageLevelName}</p>
                                            </div>
                                            <button className="pe-delete-button" onClick={() => { handleShowDeleteCardClick(); ProfileToaster({ name: "Yabancı dil bilgisi kaldırıldı." }); }}></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {showDeleteCard && <DeleteCard handleDeleteConfirmation={handleDeleteConfirmation} />}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
