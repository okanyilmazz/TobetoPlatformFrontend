import React, { useState } from 'react';
import './AnnouncementCard.css';
import Modals from '../Modal/Modal';

export default function AnnouncementCard(props: any) {
    const [modalShow, setModalShow] = useState(false);
    const [read, setRead] = useState(false); // Her duyuru için okunma durumunu tutacak state

    const handleRead = () => {
        setRead(true); // Duyuru okundu olarak işaretlenir
        // Burada, ilgili duyurunun kimliğini veritabanına kaydedebilir veya bir fonksiyon çağırabilirsiniz
    };

    return (
        <div className={`announcement-card-content row ${read ? 'read' : ''}`}>
            <div className='content col-md-4'>
                <div className='announcement-header'>
                    <span>{props.announcementTypeName}</span>
                    <span>{props.projectName}</span>
                </div>
                <div className='announcement-name'>
                    <span>{props.announcementName}</span>
                </div>
                <div className='announcement-footer'>
                    <span>{props.announcementDate}</span>
                    <span onClick={() => { setModalShow(true); handleRead(); }}>Devamını Oku</span> {/* Devamını Oku'ya tıklandığında modalı açmak ve duyuruyu okundu olarak işaretlemek için */}
                </div>
            </div>
            <Modals
                header={true}
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={props.projectName}
                body={props.announcementDescription}
            />
        </div>
    );
}
