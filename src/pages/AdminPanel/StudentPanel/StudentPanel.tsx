import React, { useEffect, useState } from 'react'
import './StudentPanel.css'
import { Tooltip } from 'antd'
import GetListAccountResponse from '../../../models/responses/account/getListAccountResponse';
import accountService from '../../../services/accountService';
import { Paginate } from '../../../models/paginate';
import { IoSearch } from 'react-icons/io5';
import { RiPencilFill } from 'react-icons/ri';
import Modals from '../../../components/Modal/Modals';
import { Form, Formik } from 'formik'
import { Button, Col, Row } from 'react-bootstrap';
import TobetoSelect from '../../../utilities/customFormControls/TobetoSelect';
import TobetoTextInput from '../../../utilities/customFormControls/TobetoTextInput';
import { GetListEducationProgramResponse } from '../../../models/responses/educationProgram/getListEducationProgramResponse';
import educationProgramService from '../../../services/educationProgramService';



export default function StudentPanel() {

    const [accounts, setAccounts] = useState<Paginate<GetListAccountResponse>>();
    const [originalAccounts, setOriginalAccounts] = useState<Paginate<GetListAccountResponse>>();
    const [showModal, setShowModal] = useState(false);
    const [addClick, setAddClick] = useState<boolean>(false)
    const [updateClick, setUpdateClick] = useState<boolean>(false)
    const [educationPrograms, setEducationPrograms] = useState<Paginate<GetListEducationProgramResponse>>();





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
        accountService.getAll(0, 100).then(result => {
            setAccounts(result.data)
        });
        getAccounts();

        educationProgramService.getAll(0, 100).then(result => {
            setEducationPrograms(result.data)
        })

    }, [])

    useEffect(() => {

    }, []);

    const getAccounts = () => {
        accountService.getAll(0, 100).then(result => {
            setAccounts(result.data);
            setOriginalAccounts(result.data);
        });
    };


    const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value.toLowerCase();

        if (originalAccounts) {
            if (searchText.length > 0) {
                const searchTerms = searchText.split(" ");
                const newFilteredItems = originalAccounts.items.filter(account =>
                    searchTerms.every(term =>
                        account.firstName.toLowerCase().includes(term) ||
                        account.lastName.toLowerCase().includes(term)
                    )
                );
                const filteredItems: Paginate<GetListAccountResponse> = {
                    from: 0,
                    index: 0,
                    size: newFilteredItems.length,
                    count: newFilteredItems.length,
                    pages: 1,
                    items: newFilteredItems,
                    hasPrevious: false,
                    hasNext: false,
                };
                setAccounts(filteredItems);
            } else {
                setAccounts(originalAccounts);
            }
        }
    };




    return (
        <div className='container'>
            <div className="row student-panel-content">

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
                                <th className='student-id'>TC Kimlik No</th>
                                <th className="student-name">Ad Soyad</th>
                                <th className='student-class'>Sınıfı</th>
                                <th className='student-mail'>E-mail</th>
                                <th className='td-icons text-center'>İşlem</th>
                            </tr>
                        </thead>

                        <tbody className='student-panel-table-body' >
                            {
                                accounts?.items.map((account) => (
                                    <tr>
                                        <td className='student-id'>{account.nationalId}</td>
                                        <td className="student-name">{account.firstName + " " + account.lastName}</td>
                                        <td className='student-class'>{account.firstName}</td>
                                        <td className='student-mail'>{account.email}</td>
                                        <td className='td-icons '>
                                            <Tooltip placement="top" title={"Silme"}>
                                                <span className="trash-icon"></span>
                                            </Tooltip>
                                            <Tooltip placement="top" title="Öğrenci Sınıfı Güncelleme">
                                                <RiPencilFill onClick={handleUpdatedClick} className='edit-icon' />
                                            </Tooltip>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <Modals
                className="student-modal"
                show={showModal}
                onHide={() => closeModal()}
                header={true}
                title={
                    updateClick ? "Öğrenci Sınıfı Güncelleme" : "Öğrenci Ekleme"
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
                                    <Col md={4}>
                                        <TobetoSelect
                                            name="socialMediaId"
                                            className="mb-4"
                                            component="select">
                                            <option value="SocialMedia">Sınıf Seçiniz</option>
                                            {educationPrograms?.items.map((educationProgram) => (
                                                <option value={String(educationProgram.id)}>
                                                    {educationProgram.name}
                                                </option>
                                            ))}
                                        </TobetoSelect>
                                    </Col>
                                    <Col md={8}>
                                        <TobetoTextInput
                                            disabled
                                            className="mb-4"
                                            name="url"
                                            value="Ad Soyad"
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
        </div>
    )
}
