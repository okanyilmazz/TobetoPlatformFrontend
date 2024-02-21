import React, { useEffect, useState } from 'react'
import "./LanguagePage.css"
import DeleteCard from '../../components/DeleteCard/DeleteCard';
import ProfileToaster from '../../components/ProfileToaster/ProfileToaster';
import languageLevelService from '../../services/languageLevelService';
import languageService from '../../services/languageService';
import { Paginate } from '../../models/paginate';
import GetListLanguageResponse from '../../models/responses/language/getListLanguageResponse';
import GetListLanguageLevelResponse from '../../models/responses/languageLevel/getListLanguageLevelResponse';
import { useLocation } from 'react-router-dom';
import authService from '../../services/authService';
import Forms from 'react-bootstrap/Form';
import DeleteLanguageRequest from '../../models/requests/language/deleteLanguageRequest';
import SidebarCard from '../../components/SidebarCard/SidebarCard';


export default function LanguagePage() {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];
    const user = authService.getUserInfo();

    const [languages, setLanguages] = useState<Paginate<GetListLanguageResponse>>();
    const [languageLevels, setLanguageLevels] = useState<Paginate<GetListLanguageLevelResponse>>();
    const [showDeleteCard, setShowDeleteCard] = useState(false);
    const [deleteRequest, setDeleteRequest] = useState<DeleteLanguageRequest | null>(null);

    useEffect(() => {
        languageService.getAll(0, 10).then((result) => {
            setLanguages(result.data)
        });

        languageLevelService.getAll(0, 10).then((result) => {
            setLanguageLevels(result.data)
        });

    }, [])

    const languageAndLevelsData = [
        { language: "Türkçe", level: "Orta Seviye" },
        { language: "Fransızca", level: "Başlangıç Seviye" },
    ];


    const handleShowDeleteCardClick = () => {
        setShowDeleteCard(true);
    };

    const handleDeleteConfirmation = () => {
        if (deleteRequest) {
        }
        setShowDeleteCard(false);
    };
    return (
        <div className='language-page container'>
            <div className='side-bar-card'>
                <SidebarCard />
            </div>

            <div className='col-md-9 col-lg-9 col-12' >
                <form>
                    <div className='pe-language'>
                        <Forms.Select size="lg" id='pe-language-select'>
                            <option selected>Dil Seçiniz</option>
                            {languages?.items.map((languages, index) => (
                                <option key={index} value={String(languages.id)}>
                                    {languages.name}languages
                                </option>
                            ))}
                        </Forms.Select>
                        <Forms.Select size="lg" id='pe-language-select'>
                            <option selected>Seviye Seçiniz</option>
                            {languageLevels?.items.map((languageLevels, index) => (
                                <option key={index} value={String(languageLevels.id)}>
                                    {languageLevels.name}languages
                                </option>
                            ))}
                        </Forms.Select>
                    </div>
                    <button className="py-2 pe-language-button" /* onClick={() =>  ProfileToaster({ name: "... Kaydedildi" }); }} } */>Kaydet</button>
                </form>

                <div className='pe-result'>
                    {languageAndLevelsData.map((item, index) => (
                        <div className="pe-container" key={index}>
                            <div className="pe-edit-language">
                                <div>
                                    <span>{item.language}</span>
                                    <p>{item.level}</p>
                                </div>
                                <button className="pe-delete-button" onClick={() => { handleShowDeleteCardClick(); ProfileToaster({ name: "Yabancı dil bilgisi kaldırıldı." }); }}></button>
                            </div>
                        </div>
                    ))}
                </div>
                {showDeleteCard && <DeleteCard handleDeleteConfirmation={handleDeleteConfirmation} />}
            </div>
        </div>
    )
}
