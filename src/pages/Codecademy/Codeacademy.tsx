import React from 'react'
import "./Codecademy.css"
import { Col, Container, Image, Row, Button } from 'react-bootstrap'


export default function Codecademy
    () {
    return (
        <div>
            <Container>
                <Row className='row1'>
                    <Col md={12}>
                        <div>
                        <p className='header'>
                            Kodlama, pek çok olasılığı içinde barındıran bir dünya.
                            <br />
                            <br />
                            Başlamak için tek gereken ise merak ve öğrenme dürtüsü.
                        </p>
                        </div>   
                    </Col>

                </Row>
                <Row className='row2'>
                    <Col md={2}>
                        <Image className='codecademy-img' src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=256&q=75'></Image>
                    </Col>
                    <Col md={10}>
                        <div>
                            <p>
                                Dünya çapında milyonlarca insanın günümüz dijital dünyasında başarılı
                                <br />
                                olmak için ihtiyaç duyduğu becerileri eğlenceli bir şekilde edinmelerine
                                <br />
                                olanak sağlayan Codecademy* içerikleri şimdi Tobeto deneyimi ile sana
                                <br />
                                daha yakın!
                            </p>
                            <p className='sub-text'>
                                *Codecademy; 2011'den beri, 50 milyondan fazla üyenin kendi için yeni bir yaşam ve kariyer geliştirmesine, projelerini hayata geçirmesine yardımcı
                                <br />
                                olan bir kodlama eğitimi platformudur.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className='row3'>
                    <Col md={12}>
                        <div>
                            <h4 className='left-header'>
                                Codecademy & Tobeto
                            </h4>
                            <p className='text'>
                                Codecademy'nin tüm kaynaklarına Tobeto aboneliği ile erişebilirsin.
                                <br />
                                <br />
                                Aboneliğin sağlayacağı Türkçe canlı dersler, alanında uzman eğitmenler ve öğrenmeni kolaylaştıracak mentör
                                <br />
                                desteğiyle ile öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve hızlandırmak için senin yanında!
                            </p>
                            <Button className='btn-signup'>
                                Hemen Abone Ol!
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <Container>
                    <Row className='animasyon'>
                        <Image className='gif' src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=1920&q=75'></Image>
                    </Row>
                </Container>

            </div>
            <div>
                <Container>
                    <Row className='Row4'>
                        <Col md={12}>
                            <div>
                                <h4>
                                    Şimdi
                                    <br />
                                    Codecademy'nin
                                    <br />
                                    zengin kataloğu ile :
                                </h4>
                                <p>
                                    Gerçek zamanlı, kendi hızında kod yaz, anında geri bildirim al, etkileşimle yaparak öğren. Öğrenme deneyimine
                                    <br />
                                    destek için makaleler, videolar ve projelerden faydalan.
                                </p>
                                <Button className='btn-signup'>
                                    Hemen Abone Ol!
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>

    )
}
