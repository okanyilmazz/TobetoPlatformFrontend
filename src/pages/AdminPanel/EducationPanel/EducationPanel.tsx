import React, { useEffect, useState } from 'react';
import './EducationPanel.css';
import { Tooltip } from 'antd';
import { Paginate } from '../../../models/paginate';
import { GetListEducationProgramResponse } from '../../../models/responses/educationProgram/getListEducationProgramResponse';
import educationProgramService from '../../../services/educationProgramService';
import { IoSearch } from 'react-icons/io5';
import Modals from '../../../components/Modal/Modals';
import { RiPencilFill } from 'react-icons/ri';
import { Form, Formik } from 'formik'
import { Button, Col, Row } from 'react-bootstrap';
import TobetoSelect from '../../../utilities/customFormControls/TobetoSelect';
import TobetoTextInput from '../../../utilities/customFormControls/TobetoTextInput';

export default function EducationPanel() {
    const [educationPrograms, setEducationPrograms] = useState<Paginate<GetListEducationProgramResponse>>();
    const [originalEducationPrograms, setOriginalEducationPrograms] = useState<Paginate<GetListEducationProgramResponse>>();
    const [showModal, setShowModal] = useState(false);

    const [addClick, setAddClick] = useState<boolean>(false)
    const [updateClick, setUpdateClick] = useState<boolean>(false)



    const handleAddClick = () => {
        setShowModal(true);
        setAddClick(true)
    };

    const handleUpdatedClick = () => {
        setShowModal(true);
        setUpdateClick(true);
    };

    const closeModal = () => {
        setUpdateClick(false);
        setAddClick(false);
        setShowModal(false)
    }

    useEffect(() => {
        educationProgramService.getAll(0, 100).then(result => {
            setEducationPrograms(result.data);
            setOriginalEducationPrograms(result.data);
        });
    }, []);

    const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value.toLowerCase();

        if (originalEducationPrograms) {
            if (searchText.length > 0) {
                const newFilteredItems = originalEducationPrograms.items.filter(program =>
                    program.name.toLowerCase().includes(searchText)
                );
                const filteredItems: Paginate<GetListEducationProgramResponse> = {
                    from: 0,
                    index: 0,
                    size: newFilteredItems.length,
                    count: newFilteredItems.length,
                    pages: 1,
                    items: newFilteredItems,
                    hasPrevious: false,
                    hasNext: false,
                };
                setEducationPrograms(filteredItems);
            } else {
                setEducationPrograms(originalEducationPrograms);
            }
        }
    };


    return (
        <div className='container'>
            <div className="row education-panel-content">

                <div className="search">
                    <div className="input-container">
                        <input type="text" id="search" onChange={handleInputFilter} placeholder="Arama" />
                        <IoSearch className="search-icon" />
                    </div>
                </div>

                <div className="table-responsive-sm">
                    <table className="mt-8 corpTable table table-hover">
                        <thead>
                            <tr>
                                <th className='education-name'>Eğitim Adı</th>
                                <th className="education-start-date">Başlangıç Tarihi</th>
                                <th className='education-end-date'>Bitiş Tarihi</th>
                                <th className='education-price'>Eğitim Ücreti</th>
                                <th className='education-count'>Öğrenci Sayısı</th>
                                <th className='td-icons text-center'>İşlem</th>
                            </tr>
                        </thead>

                        <tbody className='education-panel-table-body' >
                            {educationPrograms?.items.map((educationProgram) => (
                                <tr >
                                    <td className='education-name'>{educationProgram.name}</td>
                                    <td className="education-start-date">{new Date(educationProgram.startDate).toLocaleDateString()}</td>
                                    <td className='education-end-date'>{new Date(educationProgram.deadline).toLocaleDateString()}</td>
                                    <td className='education-price'>{educationProgram.price}</td>
                                    <td className='education-price'>{educationProgram.price}</td>
                                    <td className='td-icons '>

                                        <Tooltip placement="top" title={"Silme"}>
                                            <span className="trash-icon"></span>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Düzenleme">
                                            <RiPencilFill onClick={handleUpdatedClick} className='edit-icon' />
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))}
                            <tr >
                                <td className='text-center' onClick={handleAddClick} colSpan={10}>
                                    <span>Yeni eğitim programı ekle</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modals
                className="education-modal"
                show={showModal}
                onHide={() => closeModal()}

                header={true}
                title={
                    updateClick ? "Eğitim Programı Güncelleme" : "Eğitim Programı Ekleme"
                }
                body={
                    <div className="formik-form">
                        <Formik
                            initialValues={{
                                title: "",

                            }}
                            onSubmit={(values) => {

                            }}>
                            <Form className="update-modal-form" >
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title">Eğitim Adı </span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="title"
                                            placeholderTextColor="#fff"
                                        />
                                    </Col>

                                    <Col md={6}>
                                        <span className="input-area-title">Açıklama </span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="description"
                                            placeholderTextColor="#fff"
                                        />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title">ThumbnailPath</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="thumbnailPath"
                                            placeholderTextColor="#fff"
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Süre (sn)</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="duration"
                                            placeholderTextColor="#fff"
                                        />

                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title">Yükleyen Kişi</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="authorizedPerson"
                                            placeholderTextColor="#fff" />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Ücret</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="price"
                                            placeholderTextColor="#fff" />

                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title">Başlangıç Tarihi</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="startDate"
                                            type="date"
                                            placeholderTextColor="#fff" />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Bitiş Tarihi</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="deadline"
                                            type="date"
                                            placeholderTextColor="#fff" />

                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title">Seviye</span>

                                        <TobetoSelect
                                            name="educationProgramLevelId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {educationPrograms?.items.map((educationProgram) => (
                                                <option value={String(educationProgram.id)}>
                                                    {/* {educationProgram.educationProgramLevelId} */}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Eğitimler</span>

                                        <TobetoSelect
                                            name="educationProgramDevelopmentId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {educationPrograms?.items.map((educationProgram) => (
                                                <option value={String(educationProgram.id)}>
                                                    {/* {educationProgram.educationProgramDevelopmentId} */}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title">Rozet</span>

                                        <TobetoSelect
                                            name="badgeId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {educationPrograms?.items.map((educationProgram) => (
                                                <option value={String(educationProgram.id)}>
                                                    {/* {educationProgram.badgeId} */}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>

                                </Row>
                                <div className='form-buttons'>
                                    <Button className="mb-4" type="submit" style={updateClick ? { display: 'block' } : { display: 'none' }}   >
                                        Güncelle
                                    </Button>
                                    <Button className="mb-4" type="submit" style={addClick ? { display: 'block' } : { display: 'none' }}   >
                                        Kaydet
                                    </Button>
                                    <Button className="mb-4" onClick={() => closeModal()}>
                                        Kapat
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                }

            />
        </div>
    );
}
