import React from "react";
import ApplyCard from "../../components/ApplyCard/ApplyCard";
import "../ForIndividuals/ForIndividuals.css";
import IstanbulCard from "../../components/IstanbulCard/IstanbulCard";
import { Link } from "react-router-dom";

export const ForIndividuals = () => {
  return (
    <div className="container forIndividuals-component">
      <div className="row">
        <div className="offset-md-2 row col-md-8 col-8 ik-cards">
          <IstanbulCard
            title={
              <span>
                Aradığın
                <span
                  style={{
                    color: "rgb(0, 176, 120)",
                    marginRight: "0",
                    marginLeft: "5px",
                  }}
                >
                  "
                </span>
                İş
                <span
                  style={{
                    color: "rgb(0, 176, 120)",
                    marginLeft: "0",
                    marginRight: "5px",
                  }}
                >
                  "
                </span>
                Burada!
              </span>
            }
            buttonStyle={{
              background: "#00b078",
              fontSize: "14px",
              padding: "10px 40px",
              marginTop: "70px",

            }}
            contentStyle={{
              alignSelf: "center",
              height: "160px"

            }}
          />
        </div>

        <div className="container text-center for-individuals-content">
          <div className=" mx-auto position-relative">
            <div className="vector">
              <img
                src="https://tobeto.s3.cloud.ngn.com.tr/03_005013e668_71411c39a1.svg"
                alt=""
                width="100"
                height="100"
              />
            </div>

            <h1 className="text-white-big">Kariyerinin kontrolü</h1>
            <h1 className="text-white-big mb-5">senin elinde</h1>
            <p className="text-white borderp">
              <a
                className="text-white"
                href="https://tobeto.com/bireyler-icin#dijital-bir-meslek"
              >
                Dijital Bir Meslek
              </a>
              &nbsp; edinmek,&nbsp;
              <a
                className="text-white"
                href="https://tobeto.com/bireyler-icin#profesyonel-bir-yonetici"
              >

                Profesyonel Bir Yönetici
              </a>
              &nbsp;olmak ya da &nbsp;
              <a
                className="text-white"
                href="https://tobeto.com/bireyler-icin#kendini-gelistirmek"
              >

                Kendini Geliştirmek
              </a>
              &nbsp; için İstediğin bölümden, istediğin kadar eğitimi seçip, eş zamanlı
              olarak alabilirsin.
            </p>
            <p className="text-white my-8 codeacademy-p">
              <a href="http://www.codecademy.com">

                <span className="codeacademy-purple"> Codecademy </span>
              </a>
              &nbsp;iş birliği ile, fark yaratmak senin elinde!
            </p>

            <a
              href="https://tobeto.com/kayit-ol"
              className="btn  btn-rainbow py-4 rainbow-text"
            >
              Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye
              başla!

            </a>
          </div>
          <div
            className="gradient-line2 mt-20"
            style={{ marginTop: "66px" }}
          ></div>
        </div>
        <div className="container want-to-start">
          <div className="mw-5xl mx-auto position-relative">
            <h4 className="text-white mb-20 text-center mx-auto position-relative">
              Bir Yerden Başlamak İstiyorum
            </h4>
            <div className="vector-loading">
              <img
                src="https://tobeto.s3.cloud.ngn.com.tr/02_1a87a6ffc1_e4d2b2db45.svg"
                alt=""
              ></img>
            </div>
            <div className="row">
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>C# Programming</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>
                    Object Oriented Programming
                    <br />
                    (OOP)
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>Windows Form Application Programming</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>
                    Microsoft <br />
                    SQL Server
                    <br />
                    Databace
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>ADONET</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>DAPPER</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>HTML-CSS-SASS</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>Javascript</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>ASPNET Core MVC</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>Git/Github</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>ReactJS</a>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>NextJS</a>
                </div>
              </div>
            </div>
            <a
              href="https://tobeto.com/katalog"
              className="tab-link mobile-mx-auto d-flex justify-content-center"
            >
              Tümünü İncele &gt;&gt;
            </a>
          </div>
          <div className="gradient-line2 mt-5 digital-job" id="dijital-bir-meslek"></div>
          <div className="row individuals-common">
            <div className="position-relative ">
              <h4
                style={{ padding: "60px", fontSize: "34px", marginTop: "20px" }}
              >
                Dijital Bir Meslek İstiyorum
              </h4>
              <div className="vector-dots">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg"
                  alt=""
                  width="150"
                  height="150"
                />
              </div>
            </div>

            <div className="row mw-5xl mx-auto">
              <div className="col-lg-3 col-4">
                <div className="pack-box ">
                  <Link to="/programlar/frontend">
                    Front End
                    <br />
                    Developer
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-4">
                <div className="pack-box">

                  <Link to="/programlar/bilgi-al">
                    {" "}
                    Back End
                    <br />
                    Developer
                  </Link>

                </div>
              </div>

              <div className=" col-lg-3 col-4">
                <div className="pack-box">

                  <Link to="/programlar/full-stack-developer">
                    {" "}
                    Full Stack
                    <br />
                    Developer
                  </Link>

                </div>
              </div>

              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <Link to="/programlar/web-mobile">
                    {" "}
                    Web &amp; Mobile
                    <br /> Developer
                  </Link>
                </div>
              </div>

              <div className="col-lg-4  col-4">
                <div className="pack-box">
                  <Link to="/programlar/bilgi-al">
                    Veri Bilimi
                    <br />
                    Uzmanı
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-4">
                <div className="pack-box">
                  <Link to="/programlar/bilgi-al">
                    Siber Güvenlik <br />
                    Uzmanı
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-4">
                <div className="pack-box">
                  <Link to="/programlar/bilgi-al">
                    UI / UX <br />
                    Developer
                  </Link>
                </div>
              </div>
              <div className="tab-link"></div>
              <Link className="view-all" to="/katalog">Tümünü İncele &gt;&gt;</Link>
            </div>

            <div className="container">
              <div className="row fw-bold">
                <a className="btn mx-auto btn-rainbow py-4 rainbow-text">
                  Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye başla!
                </a>
              </div>
            </div>
            <div>
              <div style={{ marginTop: '20px' }} className="gradient-line2"></div>
            </div>

            <div className="want-to-start">
              <div className="vector6 justify-content-center">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  alt=""
                  width="130"
                />{" "}
              </div>
              <h4
                className="position-relative want-to-manager"
              >
                Profesyonel Bir Yönetici Olmak İstiyorum
                <div className="vector-star">
                  <img
                    src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7_5ad2591676.svg"
                    alt=""
                    width="150"
                    height="150"
                  />
                </div>
              </h4>
            </div>
            <div className=" col-lg-2 col-4">
              <div className="pack-box">
                <Link to="/programlar/bilgi-al">
                  Ürün <br /> Yönetim
                  <br />
                  Programı
                </Link>
              </div>
            </div>

            <div className=" col-lg-2 col-4">
              <div className="pack-box">
                <Link to="/programlar/bilgi-al">
                  Dijital <br /> Pazarlama
                  <br />
                  Programı
                </Link>
              </div>
            </div>

            <div className=" col-lg-2 col-4">
              <div className="pack-box">
                <Link to="/programlar/bilgi-al">
                  Proje
                  <br />
                  Yönetimi
                  <br />
                  Programı
                </Link>
              </div>
            </div>

            <div className=" col-lg-2 col-4">
              <div className="pack-box">
                <Link to="/programlar/bilgi-al">
                  Yetenek
                  <br />
                  Yönetimi
                  <br />
                  Programı
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className=" gradient-line2 mt-5"></div>
          </div>
          <div className="position-relative text-white">
            <h4
              style={{
                padding: "60px",
                fontSize: "34px",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Kendimi Geliştirmek İstiyorum
            </h4>
            <div className=" vector-dots-purple">
              <img
                src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                alt=""
                width="150"
                height="150"
              />
            </div>
          </div>
          <div className="shadow-lg  spec-list">
            <div className="loop">
              <div className="inner">
                <div className="spec">Planlama Organize Etme</div>
                <div className="spec">Etik</div>
                <div className="spec">Duygusal Zeka</div>
                <div className="spec">Yeni Dünya Kavramı</div>
                <div className="spec">Zaman Yönetimi</div>
                <div className="spec">Planlama Organize Etme</div>
                <div className="spec">Etik</div>
                <div className="spec">Duygusal Zeka</div>
                <div className="spec">Yeni Dünya Kavramı</div>
                <div className="spec">Yeni Dünya Kavramı</div>
                <div className="spec">Zaman Yönetimi</div>
              </div>
            </div>

            <div className="loop">
              <div className="inner2">
                <div className="spec">Öz Farkındalık</div>
                <div className="spec">Profesyonel Duruş</div>
                <div className="spec">Zaman Yönetimi</div>
                <div className="spec">Anlaşmazlıkların Çözümü</div>
                <div className="spec">Yeni Dünya Kavramı</div>
                <div className="spec">Öz Farkındalık</div>
                <div className="spec">Profesyonel Duruş</div>
                <div className="spec">Zaman Yönetimi</div>
                <div className="spec">Anlaşmazlıkların Çözümü</div>
                <div className="spec">Yeni Dünya Kavramı</div>
              </div>
            </div>

            <div className="loop">
              <div className="inner">
                <div className="spec">Karar Verme</div>
                <div className="spec">Sürekli Öğrenme</div>
                <div className="spec">Etkili İletişim</div>
                <div className="spec">Müzakere</div>
                <div className="spec">Anlaşmazlıkların Çözümü</div>
                <div className="spec">Karar Verme</div>
                <div className="spec">Sürekli Öğrenme</div>
                <div className="spec">Etkili İletişim</div>
                <div className="spec">Müzakere</div>
                <div className="spec">Anlaşmazlıkların Çözümü</div>
              </div>
            </div>

            <div className="loop">
              <div className="inner2">
                <div className="spec">Sürekli Öğrenme</div>
                <div className="spec">Çeviklik</div>
                <div className="spec">Takım Olma</div>
                <div className="spec">Etik</div>
                <div className="spec">Problem Çözme</div>
                <div className="spec">Sürekli Öğrenme</div>
                <div className="spec">Çeviklik</div>
                <div className="spec">Takım Olma</div>
                <div className="spec">Etik</div>
                <div className="spec">Problem Çözme</div>
              </div>
            </div>

            <div className="loop slider ">
              <div className="inner ">
                <div className="spec">Etik</div>
                <div className="spec">Yeni Dünya Kavramı</div>
                <div className="spec">Değişime Uyum</div>
                <div className="spec">Takım Olma</div>
                <div className="spec">İnisiyatif Alma</div>
                <div className="spec">Etik</div>
                <div className="spec">Yeni Dünya Kavramı</div>
                <div className="spec">Değişime Uyum</div>
                <div className="spec">Takım Olma</div>
                <div className="spec">İnisiyatif Alma</div>
              </div>
            </div>

            <div className="loop">
              <div className="inner2">
                <div className="spec">Kişisel Motivasyon</div>
                <div className="spec">Öz Farkındalık</div>
                <div className="spec">Pozitif Bakış</div>
                <div className="spec">Zaman Yönetimi</div>
                <div className="spec">Etkili İletişim</div>
                <div className="spec">Kişisel Motivasyon</div>
                <div className="spec">Öz Farkındalık</div>
                <div className="spec">Pozitif Bakış</div>
                <div className="spec">Zaman Yönetimi</div>
                <div className="spec">Etkili İletişim</div>
              </div>
            </div>

            <div className="loop">
              <div className="inner">
                <div className="spec">Öz Farkındalık</div>
                <div className="spec">Değişime Uyum</div>
                <div className="spec">Kişisel Motivasyon</div>
                <div className="spec">Çeviklik</div>
                <div className="spec">Verimlilik</div>
                <div className="spec">Öz Farkındalık</div>
                <div className="spec">Değişime Uyum</div>
                <div className="spec">Kişisel Motivasyon</div>
                <div className="spec">Çeviklik</div>
                <div className="spec">Verimlilik</div>
              </div>
            </div>
            <div className="fades"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
