import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import "./AssesmentsPage.css";
import examService from '../../services/examService';
import { Paginate } from '../../models/paginate';
import GetListExamResponse from '../../models/responses/exam/getListExamResponse';
import { useDispatch, useSelector } from 'react-redux';
import GetListExamResultResponse from '../../models/responses/examResult/getListExamResultResponse';
import examResultService from '../../services/examResultService';
import { userActions } from '../../store/user/userSlice';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Modals from '../../components/Modal/Modals';
import { Link } from 'react-router-dom';

export default function AssesmentsPage() {

    const [exams, setExams] = useState<Paginate<GetListExamResponse>>()
    const [examResults, setExamResults] = useState<Paginate<GetListExamResultResponse>>();

    const userState = useSelector((state: any) => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!userState.user) {
            dispatch(userActions.getUserInfo());
            return;
        }

        examResultService.getByAccountId(userState.user.id).then(result => {
            setExamResults(result.data);
            console.log("EXAM RESULT = ");
            console.dir(result.data);
        });

        examService.getByAccountId(userState.user.id, 0, 5).then(result => {
            setExams(result.data);
        });

    }, [userState])



    const [subjectStates, setSubjectStates] = useState<{ [key: string]: boolean }>({});

    const handleShow = (subjectName: string) => {
        setSubjectStates((prevStates) => ({
            ...prevStates,
            [subjectName]: true,
        }));
    };

    const handleClose = (subjectName: string) => {
        setSubjectStates((prevStates) => ({
            ...prevStates,
            [subjectName]: false,
        }));
    };

    return (
        <div className="container bg-front-white reviews-page">
            <div className="row bg-front-white">
                <div className="assesment-head container">
                    <h1 className='assesment-title'><span className='assesment-span'>Yetkin</span>liklerini ücretsiz ölç, <span className='assesment-span'>bilgi</span>lerini test et.</h1>
                </div>
                <div className='assesment-img'>
                    <img src='https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg' />
                </div>
                <div className='assesment-rapor container'>

                    <h1 >Tobeto İşte Başarı Modeli</h1>
                    <p>80 soru ile yetkinliklerini <b>ölç,</b> önerilen eğitimleri <b>tamamla,</b> rozetini <b>kazan.</b></p>
                    <Link to='/'>
                        <button className="assesment-btn">Raporu Görüntüle</button>
                    </Link>
                </div>

                <div className="col-md-6">
                    <div className="reviews-cart-1">
                        <span>Yazılımda Başarı Testi</span>
                        <p>Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b> </p>
                        <label className="text-white">&gt;&gt;&gt;</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="reviews-cart-2">
                        {exams?.items.map((exam, index) => {
                            const filteredResults = examResults?.items.filter(examResult =>
                                examResult.examId === exam.id
                            );
                            console.log(filteredResults?.length);
                            return (
                                <div className={filteredResults && filteredResults?.length > 0 ? 'cart-slim  has-results' : 'cart-slim'} key={index}>
                                    {
                                        filteredResults && filteredResults?.length > 0 ?
                                            (<div className='exam-circle-bar'>

                                                <CircularProgressbar
                                                    value={filteredResults[0].result}
                                                    text={String(filteredResults[0].result)}
                                                    styles={buildStyles({ textColor: '#fff', pathColor: '#9d3dfd' })}
                                                />
                                            </div>) :
                                            null
                                    }

                                    <span>
                                        {exam.name}
                                    </span>

                                    <div className='cart-slim-button'  >
                                        <Button onClick={() => handleShow(exam.name)}>
                                            {filteredResults && filteredResults.length > 0 ? 'Raporu Görüntüle' : ' Başla'}
                                        </Button>
                                    </div>
                                    <Modals
                                        header={true}
                                        show={subjectStates[exam.name] || false}
                                        onHide={() => handleClose(exam.name)}
                                        title={exam.name}

                                        body={
                                            <>
                                                {filteredResults && filteredResults.length > 0 ? (
                                                    <div className="exam-result-box">
                                                        <div className="correct">
                                                            <span>{filteredResults[0].correctOptionCount}</span> <br />
                                                            Doğru
                                                        </div>
                                                        <div className="inCorrect">
                                                            <span>{filteredResults[0].inCorrectOptionCount}</span> <br />
                                                            Yanlış
                                                        </div>
                                                        <div className="empty">
                                                            <span> {filteredResults[0].emptyOptionCount}</span> <br /> Boş
                                                        </div>
                                                        <div className="result">
                                                            <span> {(filteredResults[0].result)} </span> <br /> puan
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="exam-details-box">
                                                        <p>
                                                            Bu sınav {exam.questionCount} sorudan oluşmakta olup sınav süresi {exam.duration} dakikadır. Sınavın türü {exam.questionTypeNames.join(', ')} şeklinde olup sınavı
                                                            yarıda bıraktığınız taktirde çözdüğünüz kısım kadarıyla değerlendirileceksiniz.
                                                        </p>
                                                        <br />
                                                        <span> Sınav Süresi: {exam.duration} dakika</span> <br />
                                                        <span> Soru Sayısı: {exam.questionCount}</span> <br />
                                                        <span> Soru Tipi: {exam.questionTypeNames.join(', ')}</span> <br />
                                                    </div>
                                                )}
                                            </>
                                        }
                                        footerShow={true}
                                        footer={
                                            <Button className='cart-slim-close-button' variant="modal-button" onClick={() => handleClose(exam.name)}>
                                                Kapat
                                            </Button>
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className='assesment-line '>
                </div>
                <div className='assesment-text '>
                    <h1 className='assesment-title'><span className='assesment-span'>Aboneliğe özel</span> değerlendirme araçları için</h1>

                </div>
                <div className='container mt-5'>
                    <div className='assesment-content row'>
                        <div className='assesment-col1 col-md-6'>
                            <h1>Kazanım Odaklı Testler</h1><br />
                            <p>Dijital gelişim kategorisindeki eğitimlere <br />
                                başlamadan öncekonuyla ilgili bilgin <br />
                                ölçülür ve seviyene göre yönlendirilirsin.</p>
                        </div>
                        <div className='assesment-col2 col-md-6'>
                            <h1>Huawei Talent Interview <br />
                                Teknik Bilgi Sınavı*</h1>
                            <p><b><i>Sertifika alabilmen için,</i> </b>eğitim <br />
                                yolculuğunun sonunda teknik <br />
                                yetkinliklerin ve kod bilgin ölçülür. <br />

                                <br />
                                4400+ soru | 30+ programlama dili <br />
                                4 zorluk seviyesi
                                <br /></p>
                            <span> *Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}