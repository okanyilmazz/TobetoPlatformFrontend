import { Collapse, CollapseProps, Drawer } from 'antd';
import "./SessionsPage.css";
import { formatDate } from '@fullcalendar/core';
import { CheckCircleFilled } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { VideoCameraOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Accordion, AccordionHeader } from 'react-bootstrap';

export default function SessionsPage() {

    const [drawerVisible, setDrawerVisible] = useState(false); // Drawer'ın görünürlüğünü saklayacak state

    // Öğretmen adlarına tıklandığında drawer'ı açacak fonksiyon
    const handleTeacherClick = () => {
        setDrawerVisible(true); // Drawer'ı görünür yap
    };

    // Drawer'ı kapatmak için fonksiyon
    const handleCloseDrawer = () => {
        setDrawerVisible(false); // Drawer'ı görünmez yap
    };

    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        };
        const formattedDate = new Intl.DateTimeFormat('tr-TR', options).format(date);
        return formattedDate;
    };

    const startDate = new Date(); // Şu anki tarih ve saat
    const formattedStartDate = formatDate(startDate); // Başlangıç tarihini istediğiniz formata dönüştürün

    // Başlangıç tarihine 3 saat ekleyerek bitiş tarihini oluşturduk (örnek olarak)
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);
    const formattedEndDate = formatDate(endDate); // Bitiş tarihini istediğiniz formata dönüştürün


    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: (
                <>
                    <div className="session-collapse-title">
                        <span>  1. Oturum</span>
                        <CheckCircleFilled className='green-img' /> <span className='green-text'>Katıldın</span>

                    </div>

                </>
            ),

            children: (
                <>
                    <div className="session-collapse-info">
                        <div className="start-date date-info">
                            <span>Başlangıç</span>
                            <p>{formattedStartDate}</p>
                        </div>
                        <div className="end-date date-info">
                            <span>Bitiş</span>
                            <p>{formattedEndDate}</p>
                        </div>
                        <hr className="session-divider" />
                        <div className="session-instructor-info">
                            <div className="session-instructor-title">
                                <UserOutlined className='user-icon' />
                                <span>Eğitmen</span>
                            </div>
                            <span className='session-teacher-list'>
                                <a href="#" onClick={handleTeacherClick}>Ahmet Çetinkaya </a>{' '}
                                <a href="#" onClick={handleTeacherClick}>Engin Demiroğ</a>{' '}
                                <a href="#" onClick={handleTeacherClick}>Halit Enes Kalaycı</a>{' '}
                                <a href="#" onClick={handleTeacherClick}>Ali Seyhan</a>{' '}
                            </span>
                        </div>

                        <br />
                        <br />
                        <VideoCameraOutlined className='video-icon' /> Oturum Kayıtları
                        <br />

                        <span className='session-video'>Oturumlara ilişkin kayıtlar, canlı oturumlar tamamlandıktan sonra izlenebilir.</span>
                        <br />
                        <br />
                        <span className='video-number'>
                            916_6887_1-23.10.2023 16:30:00
                        </span>
                        <button className='session-video-recording'>
                            <span>KAYDI AÇ</span>
                        </button>
                    </div>

                </>
            )

        },

    ];


    return (
        <div className="unit-detail-session-row LXP-Collapse">
            <div className="session-title">
                Oturumlar
            </div>
            <div className='sessions-title'>
                <Collapse className="session-collapse" defaultActiveKey={['1']} ghost items={items} />
            </div>

            <Drawer
                placement="right"
                closable={false}
                onClose={handleCloseDrawer}
                visible={drawerVisible}


            >

                <div className="col-left">

                    <div className="thumb">
                        <div className="avatar">
                            <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=tWNRDTdmEPeaMJOT7f9rSDlGgl1w7KquIV5xfERtbG3W%2b6csThdF%2bq0W87ySbabuotkO1AP1JT%2fFJ1yrrQer%2bz9Rv0vHES0NXb2LMAd3jcsb1PJKHNmUvPAb%2bxcy7bR9" alt="">
                            </img>
                        </div>
                    </div>
                    <div className='info text-xs-center'>
                        <div className="instructor-fullName text-xs-center">
                            <h4>Ahmet Çetinkaya</h4>
                        </div>

                    </div>
                </div>
                <div className="col-right">
                    <div className="search-page-result text-xs-center instructor">
                        <div className="no-content">
                            <div className="no-content-icon">
                                <img src="https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/IconNoContent.svg" alt="no-content" />

                            </div>
                            <h5>Eğitmen için girilmiş herhangi bir künye bilgisi bulunmamaktadır.</h5>
                        </div>

                    </div>
                </div>
            </Drawer>



            <Accordion >
                <Accordion.Item className="homework-accordion-item" eventKey="0">
                    <Accordion.Header className='accordion-works'>Ödevler</Accordion.Header>
                    <Accordion.Body>
                        <div className="work-ss ">
                            <div className="row-middle-xs">
                                <div className="work1 col-lg-4 col-md-4 col-sm-3 col-xs-12">
                                    <div className='work-name'>
                                        <p>Intro</p>
                                    </div>
                                </div>
                                <div className="work2 col-lg-2 col-md-2 col-sm-3 col-xs-12 text-lg-center text-md-center text-sm-center text-xs-center">
                                    <div className="work-score">
                                        <span className='no-time'>

                                        </span>
                                    </div>
                                </div>
                                <div className='work3 col-lg-3 col-md-3 col-sm-3 col-xs-12 text-lg-center text-md-center text-sm-center text-xs-center'>
                                    <div className="work-status"> Gönderildi</div>
                                </div>
                            </div>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>

    );
}


