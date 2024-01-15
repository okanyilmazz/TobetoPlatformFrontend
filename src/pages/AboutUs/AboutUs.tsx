import React from 'react'
import "./AboutUs.css"
import { Col, Container, Image, Row } from 'react-bootstrap'

function AboutUs() {
    return (
        <div className=' bg-front-dark  '  >
            <Container >
                <Row className='aboutUs'>
                    <Col md={2}>
                        <Image className='about-icon' src="https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg" thumbnail />
                    </Col>
                    <Col md={4}>
                        <p>
                            Tobeto,
                            <br />
                            "headhunting" yaklaşımını
                            <br />
                            <span className='headfarming'>"headfarming" </span>olarak <br />
                            değiştirmeyi <br />

                            hedefleyen, eğitim ve gelişim odaklı <br />
                            dijital
                            bir platformdur
                        </p>
                    </Col>
                    <Col md={6}>
                        <video controls className='aboutUs-video' src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"    ></video>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AboutUs

