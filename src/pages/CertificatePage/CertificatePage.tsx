import Uppy from '@uppy/core';
import StatusBar from '@uppy/status-bar';
import { useEffect, useState } from 'react'
import certificateService from '../../services/certificateService';
import GetListCertificateResponse from '../../models/responses/certificate/getListCertificateResponse';
import { Paginate } from '../../models/paginate';
import Modals from '../../components/Modal/Modal';
import { Tooltip } from 'antd';
import { Dashboard } from '@uppy/react';
import './CertificatePage.css'
import { useSelector } from 'react-redux';
import SidebarCard from '../../components/SidebarCard/SidebarCard';

export default function CertificatePage() {
    const userState = useSelector((state: any) => state.user);

    const [certificates, setCertificates] = useState<Paginate<GetListCertificateResponse>>();
    const [shows, setShows] = useState(false)

    const uppy = new Uppy({
        autoProceed: false,
        restrictions: {
            maxNumberOfFiles: 1,
            allowedFileTypes: ['.pdf', '.jpg', '.jpeg', '.png'],
        }
    })
    uppy.use(StatusBar);

    useEffect(() => {
        certificateService.getAll(0, 100).then((result) => {
            setCertificates(result.data);
        })
    }, [])


    useEffect(() => {
        uppy.on('complete', async (response) => {

            const file = response.successful[0];
            const formData = new FormData();

            formData.append('file', file.data);
            formData.append('accountId', userState.user.id);
            formData.append('name', file.name);
            formData.append('description', file.meta.name);
            formData.append('folderPath', "folder");
            await certificateService.add(formData);
            getCertificate();
            setShows(false);

        });
    }, [uppy]);

    const getCertificate = () => {
        certificateService.getAll(0, 100).then((result) => {
            setCertificates(result.data);
        })
    }

    const handleOpenCertificateModal = () => {
        setShows(true);
    };

    const handleCloseCertificateModal = () => {
        setShows(false);
    };

    return (
        <div className='certificate-page container'>

            <div className='side-bar-card'>
                <SidebarCard />
            </div>

            <div className='col-md-9 col-lg-9 col-12 certificate-page-content'>
                <h1 className='profile-settings-header'>Sertifikalarım</h1>
                <div className='upload-content'>
                    <div className='upload-area'>
                        <svg onClick={handleOpenCertificateModal} width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="74" height="74" rx="37" fill="#F1E3FF" stroke="#9933FF" stroke-width="4" stroke-dasharray="2 2"></rect><path d="M47 45L40 37L33 45" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40 37V53" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M56.261 51C58.0342 50.0324 59.4349 48.5014 60.2422 46.6485C61.0495 44.7956 61.2173 42.7265 60.7191 40.7675C60.221 38.8086 59.0852 37.0715 57.4912 35.8304C55.8971 34.5892 53.9355 33.9148 51.9159 33.9135H49.6252C49.0749 31.7831 48.0493 29.8053 46.6254 28.1288C45.2015 26.4522 43.4164 25.1206 41.4044 24.234C39.3923 23.3474 37.2056 22.9289 35.0086 23.0099C32.8117 23.0909 30.6616 23.6693 28.7202 24.7018C26.7788 25.7342 25.0964 27.1937 23.7997 28.9705C22.5029 30.7474 21.6254 32.7953 21.2333 34.9605C20.8411 37.1256 20.9444 39.3515 21.5355 41.4709C22.1265 43.5904 23.1899 45.5481 24.6457 47.1969" stroke="#9933FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span>Dosya Yükle</span>
                        <div>
                            <Modals
                                className="certificate-modal"
                                header={false}
                                footer={false}
                                show={shows}
                                onHide={handleCloseCertificateModal}
                                body={
                                    <Dashboard
                                        showSelectedFiles={true}
                                        showProgressDetails={true}
                                        uppy={uppy}
                                        plugins={['FileInput']} />
                                }></Modals>
                        </div>
                    </div>
                </div>

                <div className='uploaded-content'>
                    <div className="table-responsive-sm">
                        <table className="mt-8 corpTable table table-hover">
                            <thead>
                                <tr>
                                    <th className='certificate-name'>Dosya Adı</th>
                                    <th className="text-center">Dosya Türü</th>
                                    <th className='certificate-date'>Tarih</th>
                                    <th className='td-icons' style={{ textAlign: 'center' }}>İşlem</th>
                                </tr>
                            </thead>
                            <tbody className='certificate-table-body'>
                                {
                                    certificates?.items.map((certificate) => (
                                        <tr>
                                            <td className='certificate-name'>{certificate.name.slice(0, 50)}</td>
                                            <Tooltip placement="top" title={certificate.description.includes("pdf") ? "PDF" : "PNG"}>
                                                <td className={certificate.description.includes("pdf") ? "pdf_icon text-center" : "png_icon text-center"}></td>
                                            </Tooltip>
                                            <td className='certificate-date'>17.02.2024</td>
                                            <td className='td-icons'>
                                                <Tooltip placement="top" title={"İndirme"}>
                                                    <span className="file-icon"></span>
                                                </Tooltip>
                                                <Tooltip placement="top" title={"Silme"}>
                                                    <span className="trash-icon"></span>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
