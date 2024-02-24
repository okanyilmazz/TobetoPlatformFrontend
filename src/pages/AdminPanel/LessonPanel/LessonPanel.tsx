import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import "./LessonPanel.css"
import GetListLessonResponse from '../../../models/responses/lesson/getListLessonResponse';
import { Paginate } from '../../../models/paginate';
import lessonService from '../../../services/lessonService';
import { Tooltip } from 'antd';
import { RiPencilFill } from 'react-icons/ri'
import Modals from '../../../components/Modal/Modals';
import { Form, Formik } from 'formik'
import { Button, Col, Row } from 'react-bootstrap';
import TobetoSelect from '../../../utilities/customFormControls/TobetoSelect';
import TobetoTextInput from '../../../utilities/customFormControls/TobetoTextInput';


export default function LessonPanel() {

    const [lessons, setLessons] = useState<Paginate<GetListLessonResponse>>();
    const [filteredLessons, setFilteredLessons] = useState<Paginate<GetListLessonResponse>>();
    const [showModal, setShowModal] = useState(false); // Modalın gösterilip gösterilmeyeceğini tutan bir durum
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
        lessonService.getAll(0, 100).then(result => {
            setLessons(result.data);
            setFilteredLessons(result.data); // Orijinal eğitim programlarını sakla
        });
    }, []);

    const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value.toLowerCase();

        if (filteredLessons) {
            if (searchText.length > 0) {
                const newFilteredItems = filteredLessons.items.filter(lesson =>
                    lesson.name.toLowerCase().includes(searchText)
                );
                const filteredItems: Paginate<GetListLessonResponse> = {
                    from: 0,
                    index: 0,
                    size: newFilteredItems.length,
                    count: newFilteredItems.length,
                    pages: 1,
                    items: newFilteredItems,
                    hasPrevious: false,
                    hasNext: false,
                };
                setLessons(filteredItems);
            } else {
                setLessons(filteredLessons); // Orijinal eğitim programlarını geri yükle
            }
        }
    };




    return (
        <div className='container'>
            <div className="row lesson-panel-content">

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
                                <th className='lesson-name'>Ders Adı</th>
                                <th className="lesson-start-date">Başlangıç Tarihi</th>
                                <th className='lesson-end-date'>Bitiş Tarihi</th>
                                <th className='lesson-production-company-name'>Şirket Adı</th>
                                <th className='td-icons text-center'>İşlem</th>
                            </tr>
                        </thead>

                        <tbody className='lesson-panel-table-body' >
                            {
                                lessons?.items.map((lesson) => (
                                    <tr>
                                        <td className='lesson-name'>{lesson.name}</td>
                                        <td className='lesson-end-date'>{new Date(lesson.startDate).toLocaleDateString()}</td>
                                        <td className="lesson-start-date">{new Date(lesson.endDate).toLocaleDateString()}</td>
                                        <td className='lesson-production-company-name'>{lesson.productionCompanyName}</td>
                                        <td className='td-icons '>

                                            <Tooltip placement="top" title={"Silme"}>
                                                <span className="trash-icon"></span>
                                            </Tooltip>
                                            <Tooltip placement="top" title="Düzenleme">
                                                <RiPencilFill onClick={handleUpdatedClick} className='edit-icon' />
                                            </Tooltip>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr >
                                <td className='text-center' onClick={handleAddClick} colSpan={5}>
                                    <span>Yeni ders ekle</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modals
                className="lesson-modal"
                show={showModal}
                onHide={() => closeModal()}
                header={true}
                title={
                    updateClick ? "Ders Güncelleme" : "Ders Ekleme"
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
                                        <span className="input-area-title">İsim</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="name"
                                            placeholderTextColor="#fff" />
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Süre (sn)</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="duration"
                                            placeholderTextColor="#fff"
                                            type="number" />

                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title">Ders Dili</span>

                                        <TobetoSelect
                                            name="languageId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {lessons?.items.map((lesson) => (
                                                <option value={String(lesson.id)}>
                                                    {/* {lesson.} */}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Modül</span>

                                        <TobetoSelect
                                            name="lessonModuleId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz </option>
                                            {lessons?.items.map((lesson) => (
                                                <option value={String(lesson.id)}>
                                                    {lesson.lessonModuleName}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title"> Alt Tip</span>

                                        <TobetoSelect
                                            name="lessonSubTypeId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {lessons?.items.map((lesson) => (
                                                <option value={String(lesson.id)}>
                                                    {lesson.lessonSubTypeName}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Kategori</span>

                                        <TobetoSelect
                                            name="lessonCategoryId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {lessons?.items.map((lesson) => (
                                                <option value={String(lesson.id)}>
                                                    {lesson.lessonCategoryName}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                </Row>
                                <Row >

                                    <Col md={6}>
                                        <span className="input-area-title">Üretici Firma</span>

                                        <TobetoSelect
                                            name="productionCompanyId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {lessons?.items.map((lesson) => (
                                                <option value={String(lesson.id)}>
                                                    {lesson.productionCompanyName}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Başlangıç Tarihi</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="startDate"
                                            type="date"
                                            placeholderTextColor="#fff" />
                                    </Col>
                                </Row>
                                <Row >

                                    <Col md={6}>
                                        <span className="input-area-title">Bitiş Tarihi</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="endDate"
                                            type="date"
                                            placeholderTextColor="#fff" />

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
        </div >
    )
}
