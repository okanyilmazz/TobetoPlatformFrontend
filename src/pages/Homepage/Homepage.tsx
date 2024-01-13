import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './Homepage.css'

export default function Homepage() {


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
        </div>
    )
}