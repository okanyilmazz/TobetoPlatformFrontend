import { useEffect, useState } from 'react'
import LessonCard from '../../components/LessonCard/LessonCard'
import { Progress } from 'antd'
import { FaCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import './EducationProgramContent.css'
import { Paginate } from '../../models/paginate';
import GetListLessonResponse from '../../models/responses/lesson/getListLessonResponse';
import GetListAccountResponse from '../../models/responses/account/getListAccountResponse';
import authService from '../../services/authService';
import lessonService from '../../services/lessonService';
import lessonLikeService from '../../services/lessonLikeService';
import accountService from '../../services/accountService';
import AddLessonLikeRequest from '../../models/requests/lessonLike/addLessonLikeRequest';
import DeleteLessonLikeRequest from '../../models/requests/lessonLike/deleteLessonLikeRequest';
import { Link, useParams } from 'react-router-dom';
import LikeButton from '../../components/LikeButton/LikeButton';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EducationDrawer from '../../components/EducationDrawer/EducationDrawer';
import AddEducationProgramLikeRequest from '../../models/requests/educationProgramLike/addEducationProgramLikeRequest';
import DeleteEducationProgramLikeRequest from '../../models/requests/educationProgramLike/deleteEducationProgramLikeRequest';
import { toast } from 'react-toastify';
import { GetListEducationProgramResponse } from '../../models/responses/educationProgram/getListEducationProgramResponse';
import educationProgramService from '../../services/educationProgramService';
import { QuestionCircleOutlined } from "@ant-design/icons";
import educationProgramLikeService from '../../services/educationProgramLikeService';


export default function EducationProgramContent() {

    const { educationProgramId } = useParams();
    const [isLikedEducationProgram, setIsLikedEducationProgram] = useState(false);
    const [isLikedLesson, setIsLikedLesson] = useState(false);

    const [lessonLikeCount, setLessonLikeCount] = useState(-1);
    const [educationProgramLikeCount, setEducationProgramLikeCount] = useState(-1);

    const [educationProgram, setEducationProgram] = useState<GetListEducationProgramResponse>()
    const [lesson, setLesson] = useState<GetListLessonResponse>();

    const [lessonLikers, setLessonLikers] = useState<Paginate<GetListAccountResponse>>()
    const [educationProgramLikers, setEducationProgramLikers] = useState<Paginate<GetListAccountResponse>>()

    const [isFavorite, setIsFavorite] = useState(false);
    const user = authService.getUserInfo()
    const [openDrawer, setOpenDrawer] = useState(false);


    useEffect(() => {
        if (educationProgramId) {
            lessonService.getById("f0ce896c-7258-4f1d-ba4d-08dc2f2c25fb").then((result: any) => {
                setLesson(result.data)
            })

            educationProgramService.getById(educationProgramId).then((result: any) => {
                setEducationProgram(result.data)
            })

            accountService.getByLessonIdForLike("f0ce896c-7258-4f1d-ba4d-08dc2f2c25fb", 0, 10).then(result => {
                setLessonLikers(result.data);
            })

            accountService.getByEducationProgramIdForLike(educationProgramId, 0, 10).then(result => {
                setEducationProgramLikers(result.data);
            })
        }


    }, [user.id, lessonLikeCount, educationProgramLikeCount, educationProgramId])

    useEffect(() => {
        if (educationProgramId) {

            educationProgramLikeService.getByEducationProgramId(educationProgramId).then((result: any) => {
                const likedEducationProgramFilter = result.data.items.filter((c: any) => c.accountId === user.id)
                console.dir(likedEducationProgramFilter)
                if (likedEducationProgramFilter.length > 0) {
                    setIsLikedEducationProgram(true);
                }
                setEducationProgramLikeCount(result.data.count)
            })

            lessonLikeService.getByLessonId("f0ce896c-7258-4f1d-ba4d-08dc2f2c25fb").then(result => {
                const likedLessonFilter = result.data.items.filter((c: any) => c.accountId === user.id)
                if (likedLessonFilter.length > 0) {
                    setIsLikedLesson(true);
                }
                setLessonLikeCount(result.data.count)
            })
        }
    }, [setIsLikedEducationProgram])


    const addFavorite = () => {
        setIsFavorite(true);
        toast.success("Favorilere ekleme işlemin başarıyla gerçekleşti.");
    };
    const removeFavorite = () => {
        setIsFavorite(false);
        toast.info("Favorilerden çıkarma işlemin başarıyla gerçekleşti.");
    };

    function handleImageClick() {
        if (isFavorite) {
            removeFavorite();
        } else {
            addFavorite();
        }
        setIsFavorite(!isFavorite);
    };


    async function handleEducationProgramLikersPaginate(likersPaginateIndex: any) {
        if (educationProgramId) {
            accountService.getByEducationProgramIdForLike(educationProgramId, likersPaginateIndex - 1, 10).then(result => {
                setEducationProgramLikers(result.data);
            })
        }
    }

    async function handleLessonLikersPaginate(likersPaginateIndex: any) {
        accountService.getByLessonIdForLike("f0ce896c-7258-4f1d-ba4d-08dc2f2c25fb", likersPaginateIndex - 1, 10).then(result => {
            setLessonLikers(result.data);
        })
    }

    async function handleEducationProgramLikeFromChild(dataFromLikeButton: any) {
        if (educationProgramId) {

            if (dataFromLikeButton) {
                const addLessonLike: AddEducationProgramLikeRequest = {
                    accountId: user.id,
                    educationProgramId: educationProgramId
                }
                await educationProgramLikeService.add(addLessonLike);
                setEducationProgramLikeCount(educationProgramLikeCount + 1);
            } else {
                const deleteEducationProgramLike: DeleteEducationProgramLikeRequest = {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    accountId: user.id,
                    educationProgramId: educationProgramId
                }
                await educationProgramLikeService.deleteByAccountIdAndEducationProgramId(deleteEducationProgramLike);
                setEducationProgramLikeCount(educationProgramLikeCount - 1);
            }
        }
    }



    async function handleLessonLikeFromChild(dataFromLikeButton: any) {
        if (dataFromLikeButton) {
            const addLessonLike: AddLessonLikeRequest = {
                accountId: user.id,
                lessonId: "f0ce896c-7258-4f1d-ba4d-08dc2f2c25fb"
            }
            await lessonLikeService.add(addLessonLike);
            setLessonLikeCount(lessonLikeCount + 1);
        } else {
            const deleteLessonLike: DeleteLessonLikeRequest = {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                accountId: user.id,
                lessonId: "f0ce896c-7258-4f1d-ba4d-08dc2f2c25fb"
            }
            await lessonLikeService.deleteByAccountIdAndLessonId(deleteLessonLike);
            setLessonLikeCount(lessonLikeCount - 1);
        }
    }



    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };

    return (

        <div>
            <div className='container education-program-content mt-5'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="Activity-Detail-Header">
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-md-1">
                                        <Image
                                            className="activity-image"
                                            src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                                            alt="lesson-image" />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="Activity-title">
                                                    <h3>{educationProgram?.name}</h3>
                                                </div>
                                                <div className="date-info-container">
                                                    <div className="date-info">
                                                        <OverlayTrigger
                                                            placement="right"
                                                            overlay={
                                                                <Tooltip id="tooltip-right">
                                                                    <div className="date-tooltip">
                                                                        <div className="lesson1">
                                                                            Eğitimi nasıl tamamlayabilirim?
                                                                        </div>
                                                                        <br />
                                                                        <div className="lesson2">
                                                                            Eğitimde yer alan tüm içerikleri tamamladığında (162 / 290)
                                                                        </div>
                                                                        <br />
                                                                        <div className="lesson1">
                                                                            Eğitimi nasıl başarabilirim?
                                                                        </div>
                                                                        <br />
                                                                        <div className="lesson2">
                                                                            Eğitimde yer alan tüm içerikleri tamamladığında (162 / 290)
                                                                        </div>
                                                                    </div>
                                                                </Tooltip>
                                                            }>
                                                            <span>Bitirmek için 13 günün var</span>

                                                        </OverlayTrigger>
                                                        <div className="question-icon">
                                                            <OverlayTrigger
                                                                placement="right"
                                                                overlay={
                                                                    <Tooltip id="tooltip-right">
                                                                        <div className="date-tooltip">
                                                                            <div className="lesson1">
                                                                                Eğitimi nasıl tamamlayabilirim?
                                                                            </div>
                                                                            <br />
                                                                            <div className="lesson2">
                                                                                Eğitimde yer alan tüm içerikleri tamamladığında (162 / 290)
                                                                            </div>
                                                                            <br />
                                                                            <div className="lesson1">
                                                                                Eğitimi nasıl başarabilirim?
                                                                            </div>
                                                                            <br />
                                                                            <div className="lesson2">
                                                                                Eğitimde yer alan tüm içerikleri tamamladığında (162 / 290)
                                                                            </div>
                                                                        </div>
                                                                    </Tooltip>
                                                                }>
                                                                <QuestionCircleOutlined />
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="activity-process col-md-3">
                                                <div className="activity-score">
                                                    <div className="activity-button">
                                                        33.5 PUAN
                                                    </div>
                                                    {
                                                        <LikeButton
                                                            key={String(educationProgram?.id)}
                                                            isLiked={isLikedEducationProgram}
                                                            likeCount={educationProgramLikeCount}
                                                            likers={educationProgramLikers}
                                                            likersPaginateCount={educationProgramLikers?.pages}
                                                            likersTotalCount={educationProgramLikers?.count}
                                                            onDataFromLikeButton={handleEducationProgramLikeFromChild}
                                                            likersPaginateIndex={handleEducationProgramLikersPaginate} />
                                                    }
                                                    <img
                                                        src={
                                                            isFavorite
                                                                ? "https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/remove-favorite.svg"
                                                                : "https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/add-favorite.svg"
                                                        }

                                                        alt={isFavorite ? "remove-favorite-icon" : "add-favorite-icon"}
                                                        onClick={handleImageClick}


                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="progress-wrapper col-xs-12">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id="tooltip-top"><div className="tooltip-color">
                                                        Eğitim Tamamlama Oranı
                                                    </div></Tooltip >}
                                                >
                                                    <Progress percent={50} />
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >

                    </div>
                </div>

                <div className="row">
                    <div className='col-md-5 mt-5'>

                    </div>
                    <div className='col-md-7'>
                        <LessonCard header={
                            <div className="lesson-card-content">
                                <iframe className="lesson-card-video" src="https://www.youtube.com/embed/-AoWSjeW9T8" ></iframe>
                            </div>}
                            title={<div className='lesson-title'>{lesson?.name}</div>}
                            text={<div className='lesson-text'>Video - {lesson?.duration} dk <FaCircle className='lesson-card-icon-first' /> Başlamadın</div>}
                            button={<Button onClick={showDrawer} className='lesson-card-btn'>DETAY</Button>} />
                    </div>
                </div>
            </div>

            <div className='education-drawer-page'>
                <EducationDrawer
                    open={openDrawer}
                    onClose={onClose}
                    body={
                        <>
                            <div className='education-drawer-content'>
                                <div className='education-drawer-content-left'>
                                    <Image src='https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwJCe69nG2MNII%2bkPM%2fmZBEP' />
                                </div>
                                <div className='education-drawer-content-middle'>

                                    <div className='education-title'>
                                        <span>{lesson?.name}</span>
                                    </div>
                                    <div className='education-sub-details'>
                                        <div className='tag-blue'>
                                            <span>VİDEO</span>
                                        </div>
                                        <div className='course-detail-info'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256"><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path></svg>
                                            <span>{lesson?.duration} dk</span>
                                        </div>
                                        <div className='course-detail-info'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>
                                            <span>59</span>
                                        </div>
                                    </div>
                                    <LikeButton
                                        key={String(lesson?.id)}
                                        isLiked={isLikedLesson}
                                        likeCount={lessonLikeCount}
                                        likers={lessonLikers}
                                        likersPaginateCount={lessonLikers?.pages}
                                        likersTotalCount={lessonLikers?.count}
                                        onDataFromLikeButton={handleLessonLikeFromChild}
                                        likersPaginateIndex={handleLessonLikersPaginate} />
                                </div>
                                <div className='education-drawer-content-right'>
                                    <div className='ed-drawer-top-content'>
                                        <div className='ed-drawer-button-area'>
                                            <Button className='go-education'>EĞİTİME  GİT</Button>
                                            <Button className='more'>
                                                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="ellipsis" width="2em" height="2em" fill="currentColor" aria-hidden="true"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='ed-drawer-sub-content'>
                                        <div className='ed-drawer-text-area'>
                                            <div className='ed-drawer-course-status-info'>
                                                <span>
                                                    <div className='unit-icon unit-ongoing'></div>
                                                    Devam Ediyor</span>
                                            </div>
                                            <div className='ed-drawer-course-status-score'>
                                                <span>75.2 PUAN</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='education-drawer-content-bottom'>
                                <div className="education-drawer-info">
                                    <div className='education-drawer-categories-title title'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7f6c6c" viewBox="0 0 256 256" transform="rotate(90)">
                                            <path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"></path>
                                        </svg>
                                        <span>Kategori</span>
                                    </div>
                                    <div className='education-drawer-categories'>
                                        <span>{lesson?.lessonCategoryName}</span>
                                    </div>
                                </div>
                                <div className="education-drawer-info">
                                    <div className='education-drawer-languages-title title'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path></svg>
                                        <span>Dili</span>
                                    </div>
                                    <div className='education-drawer-languages'>
                                        <span>{lesson?.languageName}</span>
                                    </div>
                                </div>
                                <div className="education-drawer-info">
                                    <div className='education-drawer-lesson-sub-type-title title'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>
                                        <span>Alt Tip</span>

                                    </div>
                                    <div className='education-drawer-lesson-sub-type'>
                                        <span>{lesson?.lessonSubTypeName}</span>
                                    </div>
                                </div>
                                <div className="education-drawer-info">
                                    <div className='education-drawer-production-company-title title'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z"></path></svg>
                                        <span>Üretici Firma</span>
                                    </div>
                                    <div className='education-drawer-production-company'>
                                        <span> <Link to={"https://www.enocta.com/"} >{lesson?.productionCompanyName}</Link></span>
                                    </div>
                                </div>
                                <div className="education-drawer-info">
                                    <div className='education-drawer-lesson-description-title title'>
                                        <span>İçerik</span>
                                    </div>
                                    <div className='education-drawer-lesson-description'>
                                        <span>{lesson?.name}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />
            </div >
        </div>
    )
}
