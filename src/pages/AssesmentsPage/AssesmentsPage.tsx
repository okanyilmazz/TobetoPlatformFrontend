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
import Modals from '../../components/Modal/Modal';

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
        <div className="container bg-front-white reviews-page    a">
            <div className="row bg-front-white">
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
                                        show={subjectStates[exam.name] || false}
                                        onHide={() => handleClose(exam.name)}
                                        examDetails={exam.name}
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
                                                            Bu sınav 25 sorudan oluşmakta olup sınav süresi 30 dakikadır. Sınav çoktan seçmeli test şeklinde olup sınavı
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
            </div>
        </div>
    );
}