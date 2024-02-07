import { useEffect, useState } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import mediaNewService from "../../services/mediaNewService";
import { Paginate } from "../../models/paginate";
import GetListMediaNewResponse from "../../models/responses/mediaNew/getListMediaNewResponse";
import { useNavigate } from "react-router-dom";
import "./MediaNews.css";

export default function MediaNews(props: any) {
  const [mediaNews, setMediaNews] = useState<Paginate<GetListMediaNewResponse>>();

  useEffect(() => {
    mediaNewService.getAll().then((result) => {
      setMediaNews(result.data);
    });
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/basinda-biz-details/${props.id}`);
  }
  return (
    <div className="media-news-page container">
      <h1 className="witp-content title-card">Basında Biz</h1>
      <div className="media-news-page-card">
        {mediaNews?.items.map((mediaNew) => (
          <PhotoCard
            key={mediaNew.id}
            thumbnailPath={mediaNew.thumbnailPath}
            description={mediaNew.description}
            title={mediaNew.title}
            releaseDate={mediaNew.releaseDate}
            id={mediaNew.id}
          />
        ))}
      </div>
    </div>
  );
}

// {
//   educationPrograms?.items.map((educationProgram) => (
//       <EducationCard
//           title={educationProgram.name}
//           date={formatCustomDate(educationProgram.startDate)} />
//   ))
// }


// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import "./WeInThePress.css"
// import Card from 'react-bootstrap/Card';
// import BlogCard from "../../components/BlogCard/BlogCard";

// export default function WeInThePress() {
//   return (


//     <div className='container'>
//       <h1 className='witp-content title-card'>Basında Biz</h1>
//       <div >
//         <BlogCard title={'İlk Kampüs Buluşması Gerçekleşti'} description={"İstanbul Kodluyor projesi kapsamında Türkiye'nin dört bir yanından gençler İstanbul'da bir araya geldi."} thumbnailPath={"https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_27976354d2.JPG"} path={"/basinda-biz/ilk-kampus-bulusmasi-gerceklesti"} date={'7 Eki 2023'} />
//         <BlogCard title={"Türkiye'nin İlk Sosyal Etki Tahvili: İstanbul Ko..."} description={"Türkiye’nin İlk Sosyal Etki Tahvili: “İstanbul Kodluyor” Projesi Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü koordinas..."} imageSrc={"https://tobeto.s3.cloud.ngn.com.tr/89a7a4a5_ed31_47a7_a4f9_af9fed165671_3_d5e83483d4.jpg"} path={"/basinda-biz/turkiyenin-ilk-sosyal-etki-tahvili-istanbul-kodluyor"} date={'15 Ağu 2023'} />
//         <BlogCard title={'Enocta İstanbul Kodluyor Projesinin Uyg...'} description={"Tobeto &amp; Enocta olarak Türkiye’nin ilk sosyal etki tahvili olan İstanbul Kodluyor Projesi’nin uygulayıcısı olmaktan gurur duyuyoruz!"} imageSrc={"https://tobeto.s3.cloud.ngn.com.tr/dsc05541_9385daed25.jpg"} path={"/basinda-biz/tobeto-and-enocta-istanbul-kodluyor-projesinin-uygulayicisi-oldu"} date={'14 Ağu 2023'} />
//         <BlogCard title={"Boğaziçi Üniversitesi'nde Basın Lansmanı Gerçekl..."} description={"Boğaziçi Üniversitesi'nde “Türkiye’nin İlk Sosyal Etki Tahvili: İstanbul Kodluyor Projesi” lansmanı gerçekleşti."} imageSrc={"https://tobeto.s3.cloud.ngn.com.tr/dsc05466_a3892e2b2d.jpg"} path={"/basinda-biz/bogazici-universitesinde-basin-lansmani-gerceklesti"} date={'14 Ağu 2023'} />
//         <BlogCard title={"Tobeto &amp; Enocta İstanbul Kodluyor Projesinin Uyg..."} description={"İstanbul Kodluyor projesi kapsamında Türkiye'nin dört bir yanından gençler İstanbul'da bir araya geldi."} imageSrc={"https://tobeto.s3.cloud.ngn.com.tr/Microsoft_Teams_image_1_b0c0449e13.png"} path={"/basinda-biz/tobeto-and-enocta-istanbul-kodluyor-projesinin-uygulayicisi-oldu"} date={'14 Ağu 2023'} />
//       </div>
//     </div>
//   )
// }
// export default function WeInThePress() {
//   return (
//     <div className="weinthepress-container">
//       <div className="row weinthepress-blogcard">
//         <div className="col-md-3">
//           <Card style={{ borderRadius: "20px" }}>
//             <div style={{ position: 'relative' }}>
//               <Card.Img style={{ borderRadius: "20px", width: '100%' }} src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg" />
//               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//               </div>
//               <div className="card-catalog">
//                 <Card.Title className="catalog-cart-title mt-3">
//                   <h1> İlk Kampüs Buluşması Gerçekleşti</h1>
//                 </Card.Title>
//                 <Card.Text className="catalog-cart-text">
//                   <p>İstanbul Kodluyor projesi kapsamında Türkiye'nin dört bir yanından gençler İstanbul'da bir araya geldi.</p>
//                 </Card.Text>
//               </div>
//             </div>
//           </Card>
//         </div>

//       </div>
//     </div>

//     <div className="container">
//       <div className="row text-center rumeysa">
//         <h2 className="text-white ms-4">Basında Biz</h2>
//       </div>
//       <section className="blogcards-wrapper">
//         <div className="blogcard-grid-space">
//           <a className="blogcard" href="/basinda-biz/ilk-kampus-bulusmasi-gerceklesti">
//             <div>
//               <h1> İlk Kampüs Buluşması Gerçekleşti</h1>
//               <span className="item-decsription"> İstanbul Kodluyor projesi kapsamında Türkiye'nin dört bir yanından gençler İstanbul'da bir araya geldi.</span>
//               <div className="date">7 Eki 2023</div>
//             </div>
//           </a>
//         </div>
//         <div className="blogcard-grid-space">
//           {/* Other blog cards go here */}
//         </div>
//       </section>
//     </div>
//   );
// }


//</div>
//         <div className="blogcard-grid-space">
//             <a className="blogcard" href="/basinda-biz/tobeto-and-enocta-istanbul-kodluyor-projesinin-uygulayicisi-oldu">
//                 <div>
//                     <h1> Tobeto &amp; Enocta İstanbul Kodluyor Projesinin Uyg...</h1>
//                     <span className="item-decsription"> Tobeto &amp; Enocta olarak Türkiye’nin ilk sosyal etki tahvili olan İstanbul Kodluyor Projesi’nin uygulayıcısı olmaktan gurur duyuyoruz!</span>
//                     <div className="date">14 Ağu 2023
//                     </div>
//                 </div>
//             </a>
//         </div>
//         <div className="container">
//         <div className="row">
//             <div className="col-md-3">
//                 <Card style={{ borderRadius: "20px" }}>
//                     <div style={{ position: 'relative' }}>
//                         <Card.Img style={{ borderRadius: "20px", width: '100%' }} src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg" />
//                         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//                             <button className="btn ">
//                                 <img src="https://tobeto.com/entry.svg" alt="" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="card-catalog">
//                         <Card.Title className="catalog-cart-title mt-3">  Gürkan İlişen 4s 14dk</Card.Title>
//                         <Card.Text className="catalog-cart-text">
//                             <p>Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu</p>
//                         </Card.Text>
//                     </div>
//                 </Card>
//             </div>

//         </div>


//)
//} */
/*

<a class="blogcard" href="/basinda-biz/bogazici-universitesinde-basin-lansmani-gerceklesti" style="--bg-img: url(https://tobeto.s3.cloud.ngn.com.tr/dsc05466_a3892e2b2d.jpg);"><div><h1> Boğaziçi Üniversitesi'nde Basın Lansmanı Gerçekl...</h1><span class="item-decsription"> Boğaziçi Üniversitesi'nde “Türkiye’nin İlk Sosyal Etki Tahvili: İstanbul Kodluyor Projesi” lansmanı gerçekleşti.</span><div class="date">14 Ağu 2023</div></div></a>
 <div className="blogcard-grid-space">
                        <a className="blogcard" href="/basinda-biz/bogazici-universitesinde-basin-lansmani-gerceklesti">
                            <div className="image-container">
                            <img src = "https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_27976354d2.JPG"></img>
                            <div className='image-text'>
                                <h1> Boğaziçi Üniversitesi'nde Basın Lansmanı Gerçekl...</h1>
                                <span className="item-decsription"> Boğaziçi Üniversitesi'nde “Türkiye’nin İlk Sosyal Etki Tahvili: İstanbul Kodluyor Projesi” lansmanı gerçekleşti.</span>
                                <div className="date">14 Ağu 2023
                                </div>
                            </div>
                            </div>
                        </a>
  </div>

           <Link to='/bla-bla'
            <img src="https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_27976354d2.JPG" alt="Boğaziçi Üniversitesi Lansman" />
           <Link>
           <a class="blogcard" href="/bloglar/web-api-nedir-programlama-yaziliminin-arayuezue-nasil-calisir" style="--bg-img: url(https://tobeto.s3.cloud.ngn.com.tr/kapak1_e51463a0b9.png);"><div><h1> Web API Nedir? Programlama Yazılımının Arayüzü N...</h1><span class="item-decsription"> Farklı yazılım uygulamaları arasında sorunsuz iletişim ve etkileşimi kolaylaştıran bir protokoller, kurallar ve araçlar koleksiyonundan oluş...</span><div class="date">19 Tem 2023</div></div></a>
           <a class="blogcard" href="/bloglar/yapay-zeka-chatbot-iste-gelecegin-iletisim-araci" style="--bg-img: url(https://tobeto.s3.cloud.ngn.com.tr/kapak_b44991529e.jpg);"><div><h1> Yapay Zeka Chatbot: İşte Geleceğin İletişim Arac...</h1><span class="item-decsription"> Chatbot teknolojisi, sanal konuşma aracıları geliştirmek için yapay zeka ve doğal dil işleme (NLP) kullanan büyüleyici bir yeniliktir. Bu ar...</span><div class="date">5 Tem 2023</div></div></a>
 */




// <div className="container">
//     <div className="row">
//         <div className="col-md-3">
//             <Card style={{ borderRadius: "20px", position: 'relative' }}>
//                 <div style={{ position: 'relative' }}>
//                     <Card.Img style={{ borderRadius: "20px", width: '100%' }} src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg" />
//                     <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//                         <button className="btn ">
//                             <img src="https://tobeto.com/entry.svg" alt="" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="card-catalog">
//                     <Card.Title className="catalog-cart-title mt-3">Gürkan İlişen 4s 14dk</Card.Title>
//                     <Card.Text className="catalog-cart-text">
//                         <p>Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu</p>
//                     </Card.Text>
//                 </div>
//                 <div className="card-date">
//                     <p style={{ position: 'absolute', top: '10px', right: '10px', color: '#fff', zIndex: 1 }}>17 Ocak 2024</p>
//                 </div>
//             </Card>
//         </div>
//     </div>
// </div>