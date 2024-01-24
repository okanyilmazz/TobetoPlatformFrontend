import { Button, Image, Tab, Tabs } from 'react-bootstrap'
import './PlatformPage.css'
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard'
import EducationCard from '../../components/EducationCard/EducationCard'
import SurveyCard from '../../components/SurveyCard/SurveyCard'
import AnnouncementCard from '../../components/AnnouncementCard/AnnouncementCard'

export default function PlatformPage() {
    return (
        <div className='platform bg-front-white'>
            <div className="platform-content bg-front-white">
                <section>
                    <div className='container'>
                        <div className='content-title'>
                            <span> <span className='tobeto-text'>TOBETO'</span>ya hoş geldin</span>
                            <span className='user-name'>Okan</span>
                        </div>
                        <div className='tobeto-slogan'>
                            <span>Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!</span>
                        </div>
                    </div>
                </section>

                <section className='middle-section container'>
                    <div className='row'>
                        <div id='ik-logo'>
                            <Image src='https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg'></Image>
                        </div>

                        <div className="ik-slogan">
                            <span>Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.</span>
                            <span>Aradığın
                                <span className='quote' id='left-quote'>”</span>iş<span className='quote' id='right-quote'>”</span>
                                Burada!</span>
                        </div>

                        <div className='platform-tab-menu'>
                            <Tabs
                                defaultActiveKey="applications"
                                id="uncontrolled-tab-example"
                                className="mb-3 tab-menu"
                            >
                                <Tab eventKey="applications" title="Başvurularım">
                                    <div className='tab-application-content'>
                                        <ApplicationCard />
                                    </div>
                                </Tab>
                                <Tab eventKey="educations" title="Eğitimlerim">
                                    <div className='tab-application-content'>
                                        <EducationCard />
                                    </div>
                                </Tab>
                                <Tab eventKey="contacts" title="Duyuru ve Haberlerim">
                                    <AnnouncementCard />
                                </Tab>
                                <Tab eventKey="surveys" title="Anketlerim">
                                    <div className='tab-application-content'>
                                        <SurveyCard />
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </section>

                <section className='bottom-section container'>
                    <div className='bottom-section-title'>
                        <span>Sınavlarım</span>
                    </div>
                    <div className='exam-details'>
                        <div className='exam-details-left'>
                            <span className='exam-title'>Herkes İçin Kodlama 1A Değerlendirme Sınavı</span>
                            <span className='exam-name'>Herkes İçin Kodlama - 1A</span>
                            <div className='exam-time'>
                                <span >45 Dakika</span>
                            </div>
                        </div>
                        <div className='exam-details-right'>
                            <span className='status'></span>
                        </div>
                    </div>
                </section>

                <section className='section-card container'>
                    <div className='create-profile'>
                        <span>Profilini oluştur</span>
                        <Button>Başla</Button>
                    </div>
                    <div className='self-assessment'>
                        <span>Kendini değerlendir</span>
                        <Button>Başla</Button>
                    </div>
                    <div className='start-learning'>
                        <span>Öğrenmeye başla</span>
                        <Button>Başla</Button>
                    </div>

                </section>

            </div>
        </div>
    )
}
