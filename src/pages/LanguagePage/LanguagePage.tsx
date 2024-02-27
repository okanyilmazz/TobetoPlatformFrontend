import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
import SidebarCard from '../../components/SidebarCard/SidebarCard';
import accountLanguageService from '../../services/accountLanguageService';
import GetListAccountLanguageResponse from '../../models/responses/accountLanguage/getListAccountLanguageResponse';
import AddAccountLanguageRequest from '../../models/requests/accountLanguage/addAccountLanguageRequest';
import DeleteAccountLanguageRequest from '../../models/requests/accountLanguage/deleteAccountLanguageRequest';

const validationSchema = Yup.object().shape({
    language: Yup.string().required('Doldurulması zorunlu alan*'),
    level: Yup.string().required('Doldurulması zorunlu alan*'),
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
    const [selectedLanguage, setSelectedLanguage] = useState<GetListAccountLanguageResponse | null>(null);

    useEffect(() => {
        languageService.getAll(0, 10).then((result) => {
            setLanguages(result.data)
        });

        languageLevelService.getAll(0, 10).then((result) => {
            setLanguageLevels(result.data)
        });

        accountLanguageService.getByAccountId(user.id).then((result) => {
            console.log(result.data);
            setAccountLanguage(result.data);
        })

    }, [])

    const getAccountLanguage = () => {
        accountLanguageService.getByAccountId(user.id).then((result) => {
            setAccountLanguage(result.data);
            console.log(result.data);
        })
    }

    const addAccountLanguage = async (values: any) => {
        const selectedLanguageName = languages?.items.find(language => language.id === values.language)?.name;
        const selectedLevelName = languageLevels?.items.find(level => level.id === values.level)?.name;

        const isAlreadyAdded = accountLanguage?.items.some(item => item.languageName === selectedLanguageName && item.languageLevelName === selectedLevelName);

        if (!isAlreadyAdded) {
            const addAccountLangauge: AddAccountLanguageRequest = {
                accountId: user.id,
                languageId: values.language,
                languageLevelId: values.level,
            }
            await accountLanguageService.add(addAccountLangauge)
            getAccountLanguage();
            ProfileToaster({ name: "Yabancı dil bilgisi eklendi" });
        } else {
            ProfileToaster({ name: "Bu dil zaten mevcut" });
        }
    }

    const deleteAccountLanguage = async () => {
        if (selectedLanguage) {
            const deleteAccountLanguage: DeleteAccountLanguageRequest = {
                id: selectedLanguage.id
            }
            await accountLanguageService.delete(deleteAccountLanguage)
            getAccountLanguage();
            setShowDeleteCard(false);
            ProfileToaster({ name: "Yabancı dil kaldırıldı" });
        }
    }

    const handleShowDeleteCardClick = (language: GetListAccountLanguageResponse) => {
        setSelectedLanguage(language);
        setShowDeleteCard(true);
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
                    onSubmit={(values, { resetForm }) => {
                        addAccountLanguage(values);
                        resetForm();
                    }}                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='pe-language-container'>
                                <div className='pe-language'>
                                    <div className="pe-language-select">
                                        <Field as="select" size="lg" id='pe-language-select' name="language" className={touched.language && errors.language ? 'form-control is-invalid' : 'form-control'}>
                                            <option value="" disabled selected>Dil Seçiniz</option>
                                            {languages?.items.map((language, index) => (
                                                <option key={index} value={String(language.id)}>
                                                    {language.name}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="language" component="div" className="pe-invalid-feedback" />
                                    </div>
                                </div>
                                <div className='pe-language'>
                                    <div className="pe-language-select">
                                        <Field as="select" size="lg" id='pe-language-select' name="level" className={touched.level && errors.level ? 'form-control is-invalid' : 'form-control'}>
                                            <option value="" disabled selected>Seviye Seçiniz</option>
                                            {languageLevels?.items.map((languageLevel, index) => (
                                                <option key={index} value={String(languageLevel.id)}>
                                                    {languageLevel.name}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="level" component="div" className="pe-invalid-feedback" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="py-2 pe-language-button">Kaydet</button>
                        </Form>
                    )}
                </Formik>
                <div className='pe-result'>
                    {accountLanguage && accountLanguage.items.map((accountLanguage, index) => (
                        <div className="pe-container" key={index}>
                            <div className="pe-edit-language">
                                <div>
                                    <span>{accountLanguage.languageName}</span>
                                    <p>{accountLanguage.languageLevelName}</p>
                                </div>
                                <button className="pe-delete-button" onClick={() => { handleShowDeleteCardClick(accountLanguage); }}></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showDeleteCard && (
                <DeleteCard
                    show={showDeleteCard}
                    handleClose={() => setShowDeleteCard(false)}
                    handleDelete={() => deleteAccountLanguage()}
                    body="yabancı dili"
                />
            )}
        </div>
    )
}
