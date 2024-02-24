import { Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Paginate } from '../../../models/paginate';
import GetListSessionResponse from '../../../models/responses/session/getListSessionResponse';
import sessionService from '../../../services/sessionService';
import "./SessionPanel.css"
import { RiPencilFill } from 'react-icons/ri';
import Modals from '../../../components/Modal/Modals';
import { Form, Formik } from 'formik'
import { Button, Col, Row } from 'react-bootstrap';
import TobetoSelect from '../../../utilities/customFormControls/TobetoSelect';
import TobetoTextInput from '../../../utilities/customFormControls/TobetoTextInput';
import Select, { ActionMeta, MultiValue } from 'react-select';



export default function SessionPanel() {

    const [sessions, setSessions] = useState<Paginate<GetListSessionResponse>>();
    const [filteredSessions, setFilteredSessions] = useState<Paginate<GetListSessionResponse>>();

    const [addClick, setAddClick] = useState<boolean>(false)
    const [updateClick, setUpdateClick] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false);




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
        sessionService.getAll(0, 100).then(result => {
            setSessions(result.data);
            setFilteredSessions(result.data);
        });
    }, []);



    const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value.toLowerCase();

        if (filteredSessions) {
            if (searchText.length > 0) {
                const newFilteredItems = filteredSessions.items.filter(session =>
                    session.occupationClassName.toLowerCase().includes(searchText)
                );
                const filteredItems: Paginate<GetListSessionResponse> = {
                    from: 0,
                    index: 0,
                    size: newFilteredItems.length,
                    count: newFilteredItems.length,
                    pages: 1,
                    items: newFilteredItems,
                    hasPrevious: false,
                    hasNext: false,
                };
                setSessions(filteredItems);
            } else {
                setSessions(filteredSessions);
            }
        }
    };


    return (
        <div className='container'>
            <div className="row session-panel-content">

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
                                <th className='session-occupation-name'>Sınıf Adı</th>
                                <th className="session-start-date">Başlangıç Tarihi</th>
                                <th className='session-end-date'>Bitiş Tarihi</th>
                                <th className='td-icons text-center'>İşlem</th>
                            </tr>
                        </thead>

                        <tbody className='session-panel-table-body' >
                            {
                                sessions?.items.map((session) => (
                                    <tr>
                                        <td className='session-occupation-name'>{session.occupationClassName}</td>
                                        <td className="session-start-date">{new Date(session.startDate).toLocaleDateString()}</td>
                                        <td className='session-end-date'>{new Date(session.endDate).toLocaleDateString()}</td>
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
                                    <span>Yeni oturum ekle</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modals
                className="session-modal"
                show={showModal}
                onHide={() => closeModal()}
                header={true}
                title={
                    updateClick ? "Oturum Güncelleme" : "Oturum  Ekleme"
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
                                        <span className="input-area-title">Mesleki Sınıf</span>

                                        <TobetoSelect
                                            name="occupationClassId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Seçiniz*</option>
                                            {sessions?.items.map((session) => (
                                                <option value={String(session.id)}>
                                                    {session.occupationClassName}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                    <Col md={6}>
                                        <span className="input-area-title">Kayıt Link</span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="recordPath"
                                            placeholder="http://"
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
                                            name="endDate"
                                            type="date"
                                            placeholderTextColor="#fff" />

                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={6}>
                                        <span className="input-area-title"></span>

                                        <span className="input-area-title">Eğitmen Adı</span>

                                        <Select className='mb-4 '
                                            defaultValue={null}
                                            options={sessions?.items.map(session => ({
                                                value: session.occupationClassName,
                                                label: session.occupationClassName
                                            }))}

                                            isMulti
                                            name="colors"
                                            classNamePrefix="select"
                                            placeholder="Organizasyon"
                                        // onChange={handleProjectSelect}
                                        />
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
