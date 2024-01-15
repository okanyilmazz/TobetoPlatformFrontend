import React from 'react'
import "./AboutUs.css"
import { Col, Container, Image, Row } from 'react-bootstrap'

function AboutUs() {
    return (
        <div className=' bg-front-dark about-content'  >
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
                <Row className='container mt-5'>
                    <Col md={12} >
                        <p className='text-area text-white'>
                            Geleceğin mesleklerindeki yetenek açığını, geleneksel "headhunting" yaklaşımının <b>"headfarming" </b>olarak değişmesiyle çözülebileceğine inanarak yola çıktık. <br /><br />

                            Tobeto, "headfarming" yaklaşımıyla yeteneği potansiyel olarak değerlendirir, en kıymetli olacağı alanda yetiştirir, değer yaratacağı projeler ve kurumlarla eşleştirir. Bu fırsata <b>Y.E.S. (Yetiş-Eşleş-Sürdür) </b>diyen herkesi Tobeto’lu olmaya çağırıyoruz.<br /><br />

                            Günümüzde iş bulmak, bir projeye dahil olmak veya kariyerinde yükselmek gibi değer yaratma yolları için en önemli unsurların başında <b>dijital beceri</b> sahibi olmak geliyor. Tam da bu ihtiyaçları kapsamak üzere, Tobeto'da eğitim içeriklerimizi hem dijital beceri sahibi olmak isteyen yeteneklerin teknik beceri kazanması hem de genç profesyonellerin, ihtiyaçlarına uygun olarak yenilenmeleri ve yetkinliklerini geliştirmelerini kapsayacak şekilde tek platformda birleştirdik.<br /><br />

                            Tobeto’da <b>hem bireylere hem de kurumlara</b> hizmet eden yapımızla, doğru yetenekle doğru pozisyonun sürdürülebilir bir şekilde eşleşmesine ve birlikte gelişmelerine alan açıyoruz. Kurum içi çözümlere destek veriyor, eğitim ve istihdam arasında köprü görevini üstleniyoruz.

                        </p>


                    </Col>


                </Row>
            </Container>

            <div className='text-white'>
                <div className='aboutUs-container'>
                    <div className='container' >
                        <div className="row">
                            <div className="about-list">
                                <ul>
                                    <div className="list-item">
                                        <h1 className='tobeto-header'>Tobeto farkı;</h1>
                                        <li> <b>Codecademy </b> ile uluslararası geçerliliğe sahip sertifika fırsatı</li> <br />
                                        <li> <b>Abonelik</b>modeliyle eğitime erişim</li><br />
                                        <li>Çeşitlendirilmiş <b> değerlendirme </b> araçlarıyla gelişim alanlarını tanıma</li><br />
                                        <li> <b> Fark yaratan </b>  bir gelişim süreci</li><br />
                                        <li>Mesleki eğitimlerin yanı sıra <b>kişisel ve profesyonel gelişim</b> imkanı</li><br />
                                        <li>Alanında uzman eğitmenlerle  <b> canlı dersler</b></li><br />
                                        <li><b> Mentör </b>   desteği</li><br />
                                        <li>Online ve canlı derslerle <b>hibrit</b> yaklaşım</li><br />
                                        <li><b> Zengin </b>   eğitim kütüphanesi</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >




    )
}

export default AboutUs

