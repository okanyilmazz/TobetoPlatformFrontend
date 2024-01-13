import React, { useState } from 'react'
import { Tabs, Tab, Container, Button } from 'react-bootstrap';
import { Card, Image } from 'semantic-ui-react'
import './Homepage.css'
import TrainingCard from '../../components/TrainingCard/TrainingCard';

export default function Homepage() {
    const [buttonContainerStyle, setButtonContainerStyle] = useState({
        backgroundColor: 'white ',
        color: 'black'
    });
    const [buttonClicked, setButtonClicked] = useState(null);

    const handleButtonClick = (buttonName:any) => {
        setButtonClicked(buttonName);
      };

    function handleContainerStyle() {
        handleButtonClick("occupation");
        setButtonContainerStyle({
            backgroundColor: '#181717',
            color: 'black'
        });
    }

    return (
        <div className='homepage bg-front-dark'>
            <div className='card-group col-md-6'>
                <Card className='col-md-6 col-sm-12 tobeto-card'>
                    <Card.Content>
                        <div className='content-left'>
                            <span>Hayalindeki teknoloji kariyerini başlat!</span>
                            <span style={{ fontStyle: 'italic' }}> İstediğin
                                <div className='word-container'>
                                    <span className='word1'>yoldan</span>
                                    <span className='word2'>hızda</span>
                                </div>
                            </span>
                            <Button className='mt-3 tobeto-card-btn'>Ücretsiz Üye Ol</Button>
                        </div>
                        <div className='content-right'>
                            <Image src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75" fluid size='small' />
                        </div>
                    </Card.Content>
                </Card>

                <Card className='col-md-6 col-sm-12 ik-card'>
                    <Card.Content>
                        <div className='content-top'>
                            <div className='content-left'>
                                <div className='text-ik'>
                                    <span>Aradığın
                                        <span style={{ color: 'rgb(0, 176, 120)', marginRight: '0', marginLeft: '5px' }}>"</span>iş<span style={{ color: 'rgb(0, 176, 120)', marginLeft: '0', marginRight: '5px', }}>"</span>
                                        Burada!</span>
                                    <div id='circle'></div>
                                </div>
                            </div>
                            <div className='content-right'>
                                <Image src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg" size='small' />
                            </div>
                        </div>

                        <div className='content-bottom'>
                            <Button>Başvur</Button>
                        </div>
                    </Card.Content>
                </Card>

            </div>
            <div className='gradient-line mt-5'>
            </div>
            <div className="">
                <div className="container tabButton ">
                    <p className='title text-white' style={{ fontSize: '41px', lineHeight: '110%' }}>Hangi Konuda <br /> Kendini<br /> Geliştirmek İstersin?</p>
                    <div className="row">
                        <div className="col-md-5">
                            <Button className='button-container'
                                style={{ width: '450px', height: '200px', ...buttonContainerStyle }}
                                onClick={() => handleButtonClick('programmingLanguage')}>

                                <h1 style={{ fontFamily: 'Poppins-Bold' }} >
                                    Teknik ve Profesyonel<br />Eğitimler
                                </h1>
                                <p style={{ opacity: '0.5', fontSize: '17px' }}>
                                    Kapsamlı beceri setlerinden, gelişmek istediğin konuyu seç, kariyerinde bir adım öne
                                    geç.
                                </p>
                            </Button>
                            <Button onClick={handleContainerStyle} className='button-container2'
                                style={{ width: '450px', height: '200px', }}>
                                <h1 className=''>
                                    Yeni bir meslek
                                </h1>
                                <p style={{ opacity: '0.5', paddingLeft: '5px', fontSize: '17px' }}>
                                    İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan eğitim yolculuğunu seç, yazılım veya
                                    profesyonel iş alanlarında tercih ettiğin yeni mesleğine doğru ilk adımını at.
                                </p>
                            </Button>
                        </div>
                        <div className="col-md-2">
                            {/* Boşluk */}
                        </div>
                        <div className="col-md-5">
                            <TrainingCard check={buttonClicked} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}