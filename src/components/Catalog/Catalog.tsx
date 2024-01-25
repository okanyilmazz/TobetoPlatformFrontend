import React, { useState, useEffect } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import "./Catalog.css"

export default function Catalog() {
    const [selectedEducationId, setselectedEducationId] = useState(-1);

    useEffect(() => {
        console.log(selectedEducationId);
    }, [selectedEducationId]);

    const educations = [
        { id: 7 as number, name: "Tüm Eğitimler" as string },
        { id: 5 as number, name: "Dijital Gelişim" as string },
        { id: 6 as number, name: "Profesyonel Gelişim" as string }
    ];

    const levels = [
        { id: 1 as number, name: "Tüm Seviyeler" as string },
        { id: 2 as number, name: "Başlangıç" as string },
        { id: 3 as number, name: "Orta" as string },
        { id: 4 as number, name: "İleri" as string }
    ]
    const subjects: { id: number; name: string }[] = [
        { id: 1, name: 'Tüm Konular' },
        { id: 2, name: 'C#' },
        { id: 3, name: 'Çeşitlilik ve Kapsayıcılık' },
        { id: 4, name: 'Başarı ve Sonuç Odaklılık' },
        { id: 5, name: 'Takım Bilinci' },
        { id: 6, name: 'Etkili İletişim ve İlişki Yönetimi' },
        { id: 7, name: 'Karar Verme' },
        { id: 8, name: 'Profesyonellik' },
        { id: 9, name: 'Kişisel Motivasyon' },
        { id: 10, name: 'Problem Çözme' },
        { id: 11, name: 'Yenilikçilik ve Yaratıcılık' },
        { id: 12, name: 'Verimlilik ve Zaman Yönetimi' },
        { id: 13, name: 'Müzakere Becerileri' },
        { id: 14, name: 'Duygusal Zeka' },
        { id: 15, name: 'Çevik Düşünme' },
        { id: 16, name: 'Esneklik' },
        { id: 17, name: 'Sürekli Gelişim' },
        { id: 18, name: 'Ticari Odaklılık' },
        { id: 19, name: 'Çatışma Çözme' },
        { id: 20, name: 'Azim ve Direnç' },
        { id: 21, name: 'Proaktif Olma' },
        { id: 22, name: 'Kariyer Yönetimi' },
        { id: 23, name: 'Stres Yönetimi' },
        { id: 24, name: 'Kritik Düşünme' },
        { id: 25, name: 'Kişisel Güç ve Güvenilirlik' },
        { id: 26, name: 'Özdisiplin' },
        { id: 27, name: 'Programlama' },
        { id: 28, name: 'Yazılım Geliştirme' },
        { id: 29, name: 'Finansta Mükemmellik' },
        { id: 30, name: 'IK\'da Mükemmellik' },
        { id: 31, name: 'Bilişim Teknolojileri' },
        { id: 32, name: 'İş İngilizcesi' },
        { id: 33, name: 'Müşteri Duyarlılık' },
        { id: 34, name: 'Proje Yönetimi' },
        { id: 35, name: 'Ekip Yönetimi' },
        { id: 36, name: 'Stratejik Düşünme' },
        { id: 37, name: 'Liderlikte İletişim' },
        { id: 38, name: 'UI/UX Tasarımı' },
        { id: 39, name: 'VUCA Dünyası' },
        { id: 40, name: 'Dijital Dünyada Sosyal Medya İletişimi' },
        { id: 41, name: 'Büyük Veri' },
        { id: 42, name: 'Dijital Dönüşüm' },
        { id: 43, name: 'Dijital Okuryazarlık' },
        { id: 44, name: 'Sürdürülebilirlik' },
        { id: 45, name: 'Mutluluk' },
        { id: 46, name: 'Kişisel Gelişim' },
    ];
    const programmingLanguages = [
        { id: 1 as number, name: "Tüm Diller" as string },
        { id: 2 as number, name: "ASP.NET" as string },
        { id: 3 as number, name: "Bootstrap" as string },
        { id: 4 as number, name: "SASS" as string },
        { id: 5 as number, name: "JavaScript" as string },
        { id: 6 as number, name: "jQuery" as string },
        { id: 7 as number, name: "AJAX" as string },
        { id: 8 as number, name: "SQL" as string },
        { id: 9 as number, name: "C#" as string },
        { id: 10 as number, name: "HTML" as string },
        { id: 11 as number, name: "CSS" as string },
        { id: 12 as number, name: "Javascript" as string },
        { id: 13 as number, name: "React" as string },
    ];
    const instructors = [
        { id: 1 as number, name: "Tüm Eğitmenler" as string },
        { id: 2 as number, name: "Eğitmen Dojo" as string },
        { id: 3 as number, name: "Roiva Eğitmen" as string },
        { id: 4 as number, name: "Veli Bahçeci" as string },
        { id: 5 as number, name: "Ahmet Çetinkaya" as string },
        { id: 6 as number, name: "İrem Balcı" as string },
        { id: 7 as number, name: "Cem Bayraktaroğlu" as string },
        { id: 8 as number, name: "Denizhan Dursun" as string },
        { id: 9 as number, name: "Halit Enes Kalaycı" as string },
        { id: 10 as number, name: "Kadir Murat Başaren" as string },
        { id: 11 as number, name: "Gürkan İlişen" as string },
        { id: 12 as number, name: "Aykut Baştuğ" as string },
        { id: 13 as number, name: "Mehmet Emin Kortak" as string },
        { id: 14 as number, name: "Engin Demiroğ" as string },
        { id: 15 as number, name: "Serkan Tekin" as string },
        { id: 16 as number, name: "Semih Karduz" as string },
        { id: 17 as number, name: "Barbaros Ciga" as string },
        { id: 18 as number, name: "Ali Seyhan" as string },
        { id: 19 as number, name: "Kader Yavuz" as string },
    ];

    const statuses = [
        { id: 1 as number, name: "Tüm Eğitimler" as string },
        { id: 2 as number, name: "Alınan Tüm Eğitimler" as string },
        { id: 3 as number, name: "Henüz Başlanmamış Eğitimler" as string },
        { id: 4 as number, name: "Tamamlanan Eğitimler" as string },
        { id: 5 as number, name: "Devam Eden Eğitimler" as string },
    ];

    const handleRadioChange = (id: number) => {
        setselectedEducationId(id);
    };

    return (
        <div className="row">
            <div className='catalog-content' >

                <Accordion alwaysOpen defaultActiveKey="0" >

                    <Accordion.Item eventKey="0">
                        <h2 className='accordion-title'>Filtrele</h2>
                        <hr />
                        <Accordion.Header className='accordion-forMe'>Bana Özel</Accordion.Header>

                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='accordion-title'>Kategori</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Control type="text" placeholder="Arama" />
                                <Form.Check
                                    inline
                                    label="Tüm Eğitimler"
                                    name="category"
                                    type='radio'
                                    id={'0'}
                                />
                                <Form.Check
                                    inline
                                    label="Ücretli Eğitimler"
                                    name="category"
                                    type='radio'
                                    id={'1'}
                                />
                                <Form.Check
                                    inline
                                    label="Ücretsiz Eğitimler"
                                    name="category"
                                    type='radio'
                                    id={'2'}
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className='accordion-title'>Eğitimler</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Control type="text" placeholder="Arama" />
                                {educations.map((education) => (
                                    <Form.Check
                                        key={education.id}
                                        type="radio"
                                        id={education.id.toString()}
                                        name="education"
                                        label={education.name}
                                        value={education.id}
                                        checked={selectedEducationId === education.id}
                                        onChange={() => handleRadioChange(education.id)}
                                    />
                                ))}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className='accordion-title'>Seviye</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Control type="text" placeholder="Arama" />
                                {levels.map((level) => (
                                    <Form.Check
                                        key={level.id}
                                        type="radio"
                                        id={level.id.toString()}
                                        name="level"
                                        label={level.name}
                                        value={level.id}
                                        checked={selectedEducationId === level.id}
                                        onChange={() => handleRadioChange(level.id)}
                                    />
                                ))}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header className='accordion-title' >Konu</Accordion.Header>
                        <Accordion.Body className='scrollable-content' >
                            <Form>
                                <Form.Control type="text" placeholder="Arama" />
                                {subjects.map((subject) => (
                                    <Form.Check
                                        key={subject.id}
                                        type="radio"
                                        id={subject.id.toString()}
                                        name="subject"
                                        label={subject.name}
                                        value={subject.id}
                                        checked={selectedEducationId === subject.id}
                                        onChange={() => handleRadioChange(subject.id)}
                                    />
                                ))}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header className='accordion-title' >Yazılım Dili</Accordion.Header>
                        <Accordion.Body className='scrollable-content' >
                            <Form>
                                <Form.Control type="text" placeholder="Arama" />
                                {programmingLanguages.map((programmingLanguage) => (
                                    <Form.Check
                                        key={programmingLanguage.id}
                                        type="radio"
                                        id={programmingLanguage.id.toString()}
                                        name="programmingLanguage"
                                        label={programmingLanguage.name}
                                        value={programmingLanguage.id}
                                        checked={selectedEducationId === programmingLanguage.id}
                                        onChange={() => handleRadioChange(programmingLanguage.id)}
                                    />
                                ))}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header className='accordion-title' >Eğitmen</Accordion.Header>
                        <Accordion.Body className='scrollable-content'>
                            <Form>
                                <Form.Control type="text" placeholder="Arama" />
                                {instructors.map((instructor) => (
                                    <Form.Check
                                        key={instructor.id}
                                        type="radio"
                                        id={instructor.id.toString()}
                                        name="instructor"
                                        label={instructor.name}
                                        value={instructor.id}
                                        checked={selectedEducationId === instructor.id}
                                        onChange={() => handleRadioChange(instructor.id)}
                                    />
                                ))}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header className='accordion-title' >Durum</Accordion.Header>
                        <Accordion.Body className='scrollable-content' style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            <Form>
                                <Form.Control type="text" placeholder="Arama" />
                                {statuses.map((status) => (
                                    <Form.Check
                                        key={status.id}
                                        type="radio"
                                        id={status.id.toString()}
                                        name="status"
                                        label={status.name}
                                        value={status.id}
                                        checked={selectedEducationId === status.id}
                                        onChange={() => handleRadioChange(status.id)}
                                    />
                                ))}
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>

    );
}