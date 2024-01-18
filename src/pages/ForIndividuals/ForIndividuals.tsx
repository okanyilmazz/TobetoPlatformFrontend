import React from "react";
import ApplyCard from "../../components/ApplyCard/ApplyCard";
import "../ForIndividuals/ForIndividuals.css";
import IstanbulKodluyorCard from "../../components/IstanbulKodluyorCard/IstanbulKodluyorCard";
import { Link } from "react-router-dom";

export const ForIndividuals = () => {
  return (
    <div className="container forIndividuals-component">
      <div className="row">
        <div className="offset-md-2 row col-md-8 col-8 ik-cards">
          <IstanbulKodluyorCard
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
              marginTop: "20px",
            }}
            contentStyle={{
              alignSelf: "center",
            }}
          />
        </div>

        <div className="container text-center">
          <div className="mw-5xl mx-auto position-relative">
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
            <p className="text-white lh-md borderp">
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
              className="btn mx-4 btn-rainbow py-4 rainbow-text"
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
        <div className="container web-pack py-20">
          <div className="mw-5xl mx-auto position-relative">
            <h4 className="text-white mb-20 text-center mx-auto position-relative">
              Bir Yerden Başlamak İstiyorum
            </h4>
            <div className="vector7">
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
          <div className="gradient-line2 mt-5" id="dijital-bir-meslek"></div>
          <div className="row individuals-common">
            <div className="position-relative ">
              <h4
                style={{ padding: "60px", fontSize: "34px", marginTop: "20px" }}
              >
                Dijital Bir Meslek İstiyorum
              </h4>
              <div className="vector2">
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
                  <a>
                    <Link to="/programlar/frontend">
                      Front End
                      <br />
                      Developer
                    </Link>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>
                    <Link to="/programlar/bilgi-al">
                      {" "}
                      Back End
                      <br />
                      Developer
                    </Link>
                  </a>
                </div>
              </div>

              <div className=" col-lg-3 col-4">
                <div className="pack-box">
                  <a>
                    <Link to="/programlar/full-stack-developer">
                      {" "}
                      Full Stack
                      <br />
                      Developer
                    </Link>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <a>
                    <Link to="/programlar/web-mobile">
                      {" "}
                      Web &amp; Mobile
                      <br /> Developer
                    </Link>
                  </a>
                </div>
              </div>

              <div className="col-lg-4  col-4">
                <div className="pack-box">
                  <a>
                    <Link to="/programlar/bilgi-al">
                      Veri Bilimi
                      <br />
                      Uzmanı
                    </Link>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-4">
                <div className="pack-box">
                  <a>
                    <Link to="/programlar/bilgi-al">
                      Siber Güvenlik <br />
                      Uzmanı
                    </Link>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-4">
                <div className="pack-box">
                  <a>
                    <Link to="/programlar/bilgi-al">
                      UI / UX <br />
                      Developer
                    </Link>
                  </a>
                </div>
              </div>
              <div className="tab-link"></div>
              <a style={{ fontSize: "15px", padding: "20px" }}>
                <Link to="/katalog">Tümünü İncele &gt;&gt;</Link>
              </a>
            </div>

            <div className="container">
              <div className="row fw-bold">
                <a className="btn mx-auto btn-rainbow py-4 rainbow-text">
                  Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye
                  başla!
                </a>
              </div>
            </div>
            <div>
              <div
                style={{ marginTop: "20px" }}
                className="gradient-line2"
              ></div>
            </div>

            <div className="web-pack">
              <div className="vector6 justify-content-center">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  alt=""
                  width="130"
                />{" "}
              </div>
              <h4
                style={{ fontSize: "40px", fontWeight: "600" }}
                className="position-relative "
              >
                Profesyonel Bir Yönetici Olmak İstiyorum
                <div className="vector4">
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
                <a>
                  <Link to="/programlar/bilgi-al">
                    Ürün <br /> Yönetim
                    <br />
                    Programı
                  </Link>
                </a>
              </div>
            </div>

            <div className=" col-lg-2 col-4">
              <div className="pack-box">
                <a>
                  <Link to="/programlar/bilgi-al">
                    Dijital <br /> Pazarlama
                    <br />
                    Programı
                  </Link>
                </a>
              </div>
            </div>

            <div className=" col-lg-2 col-4">
              <div className="pack-box">
                <a>
                  <Link to="/programlar/bilgi-al">
                    Proje
                    <br />
                    Yönetimi
                    <br />
                    Programı
                  </Link>
                </a>
              </div>
            </div>

            <div className=" col-lg-2 col-4">
              <div className="pack-box">
                <a>
                  <Link to="/programlar/bilgi-al">
                    Yetenek
                    <br />
                    Yönetimi
                    <br />
                    Programı
                  </Link>
                </a>
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
            <div className="vector8">
              <img
                src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                alt=""
                width="150"
                height="150"
              />
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

            <div className="loop">
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

            <div className="loop">
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

            <div className="loop">
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

            <div className="loop slider ">
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

            <div className="loop">
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

            <div className="loop">
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
      </div>
    </div>
  );
};
