import React from 'react'
import { Image } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import "./AdminPanel.css"
import { useSelector } from 'react-redux';
import StudentPanel from './StudentPanel/StudentPanel';
import EducationPanel from './EducationPanel/EducationPanel';
import AnnouncementPanel from './AnnouncementPanel/AnnouncementPanel';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import LessonPanel from './LessonPanel/LessonPanel';
import SessionPanel from './SessionPanel/SessionPanel';
import RolePanel from './RolePanel/RolePanel';
import UserPanel from './UserPanel/UserPanel';


export default function AdminPanel() {

    const navigate = useNavigate();
    const location = useLocation();
    const userState = useSelector((state: any) => state.user);


    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];


    return (
        <div className="container admin-panel ">
            <div className="row">
                <section >
                </section>

                <div className="sidebar-card col-md-3">
                    <ul>
                        <li onClick={() => navigate("/admin-panel/kullanicilar")} className={lastPathSegment === "kullanicilar" ? 'active-item active-edit' : ''}>
                            <div className='sidebar-icon'>
                                <Image src='/assets/Icons/users.svg' />

                            </div>
                            <div className='sidebar-text'>
                                <span>Kullanıcılar</span>
                            </div>
                        </li>
                        <li onClick={() => navigate("/admin-panel/ogrenciler")} className={lastPathSegment === "ogrenciler" ? 'active-item active-edit' : ''}>
                            <div className='sidebar-icon'>
                                <Image src='/assets/Icons/profile-settings/user.svg' />
                            </div>
                            <div className='sidebar-text'>
                                <span>Öğrenciler</span>
                            </div>
                        </li>
                        <li onClick={() => navigate("/admin-panel/dersler")} className={lastPathSegment === "dersler" ? 'active-item active-edit' : ''}>
                            <div className='sidebar-icon'>
                                <Image src='/assets/Icons/profile-settings/book.svg' />
                            </div>
                            <div className='sidebar-text'>
                                <span>Dersler</span>
                            </div>
                        </li>
                        <li onClick={() => navigate("/admin-panel/duyurular")} className={lastPathSegment === "duyurular" ? 'active-item active-edit' : ''}>
                            <div className='sidebar-icon'>
                                <TfiEmail />
                            </div>
                            <div className='sidebar-text'>
                                <span>Duyurular</span>
                            </div>
                        </li>
                        <li onClick={() => navigate("/admin-panel/egitimler")} className={lastPathSegment === "egitimler" ? 'active-item active-edit' : ''}>
                            <div className='sidebar-icon'>
                                <MdOutlineCastForEducation />

                            </div>
                            <div className='sidebar-text'>
                                <span>Eğitim Programları</span>
                            </div>
                        </li>
                        <li onClick={() => navigate("/admin-panel/oturumlar")} className={lastPathSegment === "oturumlar" ? 'active-item active-edit' : ''}>
                            <div className='sidebar-icon'>
                                <Image src='/assets/Icons/session.png' width={24} height={24} />


                            </div>
                            <div className='sidebar-text'>
                                <span>Oturumlar</span>
                            </div>
                        </li>
                        <li onClick={() => navigate("/admin-panel/roller")} className={lastPathSegment === "roller" ? 'active-item active-edit' : ''}>
                            <div className='sidebar-icon'>
                                <FaRankingStar />

                            </div>
                            <div className='sidebar-text'>
                                <span>Roller</span>
                            </div>
                        </li>


                    </ul>
                </div>

                <div className="col-md-9" style={lastPathSegment === "kullanicilar" ? { display: 'block' } : { display: 'none' }}>
                    <UserPanel />
                </div>
                <div className="col-md-9" style={lastPathSegment === "ogrenciler" ? { display: 'block' } : { display: 'none' }}>
                    <StudentPanel />
                </div>
                <div className="col-md-9" style={lastPathSegment === "dersler" ? { display: 'block' } : { display: 'none' }}>
                    <LessonPanel />
                </div>

                <div className="col-md-9" style={lastPathSegment === "duyurular" ? { display: 'block' } : { display: 'none' }}>
                    <AnnouncementPanel />
                </div>

                <div className="col-md-9" style={lastPathSegment === "egitimler" ? { display: 'block' } : { display: 'none' }}>
                    <EducationPanel />
                </div>
                <div className="col-md-9" style={lastPathSegment === "oturumlar" ? { display: 'block' } : { display: 'none' }}>
                    <SessionPanel />
                </div>

                <div className="col-md-9" style={lastPathSegment === "roller" ? { display: 'block' } : { display: 'none' }}>
                    <RolePanel />
                </div>

            </div >
        </div >



    )
}
