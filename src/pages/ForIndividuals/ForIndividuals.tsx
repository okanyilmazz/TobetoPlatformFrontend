import React from 'react'
import '../ForIndividuals/ForIndividuals.css'
import { Link } from 'react-router-dom'

export const ForIndividuals = () => {
  return (

    <div className='container'>

      <div className='row individuals-common'>
        <div className="position-relative ">
          <h4 style={{ padding: '60px', fontSize: '34px', marginTop: '20px' }}>Dijital Bir Meslek İstiyorum</h4>
          <div className="vector2">
            <img src="https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg" alt="" width="150" height="150" />
          </div>
        </div>

        <div className="row mw-5xl mx-auto">
          <div className="col-lg-3 col-4">
            <div className="pack-box ">
              <a><Link to="/programlar/frontend">Front End<br />Developer</Link></a>
            </div>
          </div>

          <div className="col-lg-3 col-4">
            <div className="pack-box">
              <a><Link to="/programlar/bilgi-al"> Back End<br />Developer</Link></a>
            </div>
          </div>

          <div className=" col-lg-3 col-4">
            <div className="pack-box">
              <a><Link to="/programlar/full-stack-developer"> Full Stack<br />Developer</Link></a>
            </div>
          </div>

          <div className="col-lg-3 col-4">
            <div className="pack-box">
              <a><Link to="/programlar/web-mobile"> Web &amp; Mobile<br /> Developer</Link></a>
            </div>
          </div>

          <div className="col-lg-4  col-4">
            <div className="pack-box">
              <a><Link to="/programlar/bilgi-al">
                Veri Bilimi<br />Uzmanı</Link></a>
            </div>
          </div>

          <div className="col-lg-4 col-4">
            <div className="pack-box">
              <a><Link to="/programlar/bilgi-al">
                Siber Güvenlik <br />Uzmanı</Link></a>
            </div>
          </div>

          <div className="col-lg-4 col-4">
            <div className="pack-box">
              <a><Link to="/programlar/bilgi-al">
                UI / UX <br />Developer</Link></a>
            </div>
          </div>
          <div className='tab-link'></div>
          <a style={{ fontSize: '15px', padding: '20px' }}><Link to="/katalog">Tümünü İncele &gt;&gt;</Link></a>
        </div>

        <div className="container">
          <div className="row fw-bold">
            <a className="btn mx-auto btn-rainbow py-4 rainbow-text">
              Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye başla!
            </a>
          </div>
        </div>
        <div>
          <div style={{marginTop:'20px'}} className="gradient-line2"></div>
        </div>

        <div className="web-pack">
          <div className="vector6 justify-content-center">
            <img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg" alt="" width="130" /> </div>
          <h4 style={{ fontSize: '40px', fontWeight: '600' }} className="position-relative ">
            Profesyonel Bir Yönetici Olmak İstiyorum
            <div className="vector4">
              <img src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7_5ad2591676.svg" alt="" width="150" height="150" />
            </div>
          </h4>
        </div>
        <div className=" col-lg-2 col-4">
          <div className="pack-box">
            <a><Link to="/programlar/bilgi-al">Ürün <br /> Yönetim<br />Programı</Link></a>
          </div>
        </div>

        <div className=" col-lg-2 col-4">
          <div className="pack-box">
            <a><Link to="/programlar/bilgi-al">Dijital <br /> Pazarlama<br />Programı</Link></a>
          </div>
        </div>

        <div className=" col-lg-2 col-4">
          <div className="pack-box"><a><Link to="/programlar/bilgi-al">Proje<br />Yönetimi<br />Programı</Link></a>
          </div>
        </div>

        <div className=" col-lg-2 col-4">
          <div className="pack-box">
            <a><Link to="/programlar/bilgi-al">Yetenek<br />Yönetimi<br />Programı</Link></a>
          </div>
        </div>
      </div>
      <div className=" gradient-line2 mt-5"></div>

      <div className="position-relative text-white">
        <h4 style={{ padding: '60px', fontSize: '34px', marginTop: '20px', textAlign: 'center' }}>Kendimi Geliştirmek İstiyorum</h4>
        <div className="vector8">
          <img src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg" alt="" width="150" height="150" />
        </div>
      </div>


      <div className="shadow-lg  tag-list">

        <div className="loop">
          <div className="inner">
            <div className="tag">Planlama Organize Etme</div>
            <div className="tag">Etik</div>
            <div className="tag">Duygusal Zeka</div>
            <div className="tag">Yeni Dünya Kavramı</div>
            <div className="tag">Zaman Yönetimi</div>
            <div className="tag">Planlama Organize Etme</div>
            <div className="tag">Etik</div>
            <div className="tag">Duygusal Zeka</div>
            <div className="tag">Yeni Dünya Kavramı</div>
            <div className="tag">Yeni Dünya Kavramı</div>
            <div className="tag">Zaman Yönetimi</div>
          </div>
        </div>

        <div className="loop" >
          <div className="inner2">
            <div className="tag">Öz Farkındalık</div>
            <div className="tag">Profesyonel Duruş</div>
            <div className="tag">Zaman Yönetimi</div>
            <div className="tag">Anlaşmazlıkların Çözümü</div>
            <div className="tag">Yeni Dünya Kavramı</div>
            <div className="tag">Öz Farkındalık</div>
            <div className="tag">Profesyonel Duruş</div>
            <div className="tag">Zaman Yönetimi</div>
            <div className="tag">Anlaşmazlıkların Çözümü</div>
            <div className="tag">Yeni Dünya Kavramı</div>
          </div>
        </div>

        <div className="loop" >
          <div className="inner">
            <div className="tag">Karar Verme</div>
            <div className="tag">Sürekli Öğrenme</div>
            <div className="tag">Etkili İletişim</div>
            <div className="tag">Müzakere</div>
            <div className="tag">Anlaşmazlıkların Çözümü</div>
            <div className="tag">Karar Verme</div>
            <div className="tag">Sürekli Öğrenme</div>
            <div className="tag">Etkili İletişim</div>
            <div className="tag">Müzakere</div>
            <div className="tag">Anlaşmazlıkların Çözümü</div>
          </div>
        </div>

        <div className="loop" >
          <div className="inner2">
            <div className="tag">Sürekli Öğrenme</div>
            <div className="tag">Çeviklik</div>
            <div className="tag">Takım Olma</div>
            <div className="tag">Etik</div>
            <div className="tag">Problem Çözme</div>
            <div className="tag">Sürekli Öğrenme</div>
            <div className="tag">Çeviklik</div>
            <div className="tag">Takım Olma</div>
            <div className="tag">Etik</div>
            <div className="tag">Problem Çözme</div>
          </div>
        </div>

        <div className="loop slider " >
          <div className="inner ">
            <div className="tag">Etik</div>
            <div className="tag">Yeni Dünya Kavramı</div>
            <div className="tag">Değişime Uyum</div>
            <div className="tag">Takım Olma</div>
            <div className="tag">İnisiyatif Alma</div>
            <div className="tag">Etik</div>
            <div className="tag">Yeni Dünya Kavramı</div>
            <div className="tag">Değişime Uyum</div>
            <div className="tag">Takım Olma</div>
            <div className="tag">İnisiyatif Alma</div>
          </div>
        </div>

        <div className="loop" >
          <div className="inner2">
            <div className="tag">Kişisel Motivasyon</div>
            <div className="tag">Öz Farkındalık</div>
            <div className="tag">Pozitif Bakış</div>
            <div className="tag">Zaman Yönetimi</div>
            <div className="tag">Etkili İletişim</div>
            <div className="tag">Kişisel Motivasyon</div>
            <div className="tag">Öz Farkındalık</div>
            <div className="tag">Pozitif Bakış</div>
            <div className="tag">Zaman Yönetimi</div>
            <div className="tag">Etkili İletişim</div>
          </div>
        </div>

        <div className="loop" >
          <div className="inner">
            <div className="tag">Öz Farkındalık</div>
            <div className="tag">Değişime Uyum</div>
            <div className="tag">Kişisel Motivasyon</div>
            <div className="tag">Çeviklik</div>
            <div className="tag">Verimlilik</div>
            <div className="tag">Öz Farkındalık</div>
            <div className="tag">Değişime Uyum</div>
            <div className="tag">Kişisel Motivasyon</div>
            <div className="tag">Çeviklik</div>
            <div className="tag">Verimlilik</div>
          </div>
        </div>
        <div className="fades"></div>
      </div>





    </div>
  )
}