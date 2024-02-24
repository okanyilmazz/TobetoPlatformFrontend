import { Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Paginate } from '../../../models/paginate';
import "./RolePanel.css"
import { RiPencilFill } from 'react-icons/ri';
import Modals from '../../../components/Modal/Modals';
import { Form, Formik } from 'formik'
import { Button, Col, Row } from 'react-bootstrap';
import TobetoSelect from '../../../utilities/customFormControls/TobetoSelect';
import TobetoTextInput from '../../../utilities/customFormControls/TobetoTextInput';
import GetListOperationClaimResponse from '../../../models/responses/operationClaim/getListOperationClaimResponse';
import operationClaimService from '../../../services/operationClaimService';



export default function RolePanel() {

    const [operationClaims, setOperationClaims] = useState<Paginate<GetListOperationClaimResponse>>();
    const [filteredOperationClaim, setFilteredOperationClaim] = useState<Paginate<GetListOperationClaimResponse>>();
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
        operationClaimService.getAll(0, 100).then(result => {
            setOperationClaims(result.data);
            setFilteredOperationClaim(result.data);
        });
    }, []);

    const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value.toLowerCase();

        if (filteredOperationClaim) {
            if (searchText.length > 0) {
                const newFilteredItems = filteredOperationClaim.items.filter(operationClaim =>
                    operationClaim.name.toLowerCase().includes(searchText)
                );
                const filteredItems: Paginate<GetListOperationClaimResponse> = {
                    from: 0,
                    index: 0,
                    size: newFilteredItems.length,
                    count: newFilteredItems.length,
                    pages: 1,
                    items: newFilteredItems,
                    hasPrevious: false,
                    hasNext: false,
                };
                setOperationClaims(filteredItems);
            } else {
                setOperationClaims(filteredOperationClaim);
            }
        }
    };


    return (
        <div className='container'>
            <div className="row role-panel-content">

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
                                <th className='role-name'>Rol Adı</th>
                                <th className='td-icons text-end '>İşlem</th>
                            </tr>
                        </thead>

                        <tbody className='role-panel-table-body'>
                            {operationClaims?.items.map((operationClaim) => (
                                <tr >
                                    <td className='role-name'>{operationClaim.name}</td>
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
                                <td className='text-center' onClick={handleAddClick} colSpan={5}>
                                    <span>Yeni rol ekle</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modals
                className="role-modal"
                show={showModal}
                onHide={() => closeModal()}
                header={true}
                title={
                    updateClick ? "Rol Güncelleme" : "Rol Ekleme"
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

                                    <Col md={8} className=' offset-2 mb-3'>
                                        <span className="input-area-title">Rol </span>

                                        <TobetoTextInput
                                            className="mb-4"
                                            name="endDate"
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
