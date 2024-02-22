import React, { useEffect, useState } from 'react'
import ProfileCard from './../../components/ProfileCard/ProfileCard';
import './Profile.css';
import { useDispatch } from 'react-redux';
import authService from '../../services/authService';
import GetListAccountResponse from '../../models/responses/account/getListAccountResponse';
import GetListCertificateResponse from '../../models/responses/certificate/getListCertificateResponse';
import { useSelector } from 'react-redux';
import { userActions } from '../../store/user/userSlice';
import accountService from '../../services/accountService';
import { Paginate } from '../../models/paginate';
import certificateService from '../../services/certificateService';
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';
import { Link } from 'react-router-dom';
import { Dropdown, Image } from 'react-bootstrap';
import Switch from 'react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import ProfileToaster from '../../components/ProfileToaster/ProfileToaster';
import ProfileRadar from '../../components/ProfileRadar/ProfileRadar';
import examResultService from '../../services/examResultService';
import GetListExamResultResponse from '../../models/responses/examResult/getListExamResultResponse';
import GetListAccountBadgeResponse from '../../models/responses/accountBadge/getListAccountBadgeResponse';
import accountBadgeService from '../../services/accountBadgeService';
import socialMediaService from '../../services/socialMediaService';
import GetListSocialMediaResponse from '../../models/responses/socialMedia/getListSocialMediaResponse';
import { Timeline } from 'antd';
import { Progress } from 'semantic-ui-react';

import { DEFAULT_PROFILE_PHOTO } from '../../environment/environment';



export default function Profile() {
  const [account, setAccount] = useState<GetListAccountResponse>();
  const [certificates, setCertificates] = useState<Paginate<GetListCertificateResponse>>();
  const [examResults, setExamResults] = useState<Paginate<GetListExamResultResponse>>();
  const userState = useSelector((state: any) => state.user);
  const user = authService.getUserInfo();
  const dispatch = useDispatch();
  const [accountBadges, setAccountBadges] = useState<Paginate<GetListAccountBadgeResponse>>();
  const [socialMedias, setSocialMedias] = useState<Paginate<GetListSocialMediaResponse>>();


  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
  };

  const [inputValue, setInputValue] = useState<string>("https://tobeto.com/profiller/95452f1d");

  const handleCopyClick = () => {
    const copyTextElement = document.querySelector(".copy-text") as HTMLElement;
    const input = copyTextElement.querySelector("input.text") as HTMLInputElement;

    input.select();
    document.execCommand("copy");
    copyTextElement.classList.add("active");
    window.getSelection()?.removeAllRanges();

    setTimeout(() => {
      copyTextElement.classList.remove("active");
    }, 2500);
  };



  const heatMapRows = () => {
    return (
      <HeatMap
        value={heatmapData}
        monthLabels={[]}
        weekLabels={[]}
        rectProps={{
          rx: 7,
        }}
        width={800}
        rectSize={11}
        startDate={startDate}
        endDate={endDate}
        rectRender={(props:any, data:any,) => {
          if (!data || !data.count || data.count === 0)
            return <Tooltip placement="top" content={`Herhangi bir aktiviteniz yok : ${0}`}>
              <rect {...props}></rect>
            </Tooltip>
          else
            return (
              <Tooltip
                placement="top"
                content={`${data.date
                  .split('/')
                  .reverse()
                  .map((part:any) => part.padStart(2, '0'))
                  .join('/')} : ${data.count + ' adet aktivite'}`}
              >
                <rect {...props}></rect>
              </Tooltip>
            );
        }}
        style={{ color: '#ad001d' }}
        panelColors={{
          0: '#cacaca',
          1: '#b6f', //1-9
          10: '#93f', //10-19
          20: '#5c1f99', //20-29
          30: '#361259', //30 ve Ã¼zeri

        }}

      />
    )
  }
  const heatmapData = [

    { date: '2023/01/11', count: 2 },
    { date: '2023/04/12', count: 2 },
    { date: '2023/05/01', count: 5 },
    { date: '2023/05/02', count: 5 },
    { date: '2023/05/03', count: 1 },
    { date: '2023/05/04', count: 11 },
    { date: '2023/06/08', count: 4 },
    { date: '2023/07/07', count: 30 },
    { date: '2023/8/12', count: 5 },
    { date: '2023/9/12', count: 13 },
    { date: '2023/10/12', count: 8 },
    { date: '2023/11/12', count: 3 },
    { date: '2023/12/2', count: 3 }
  ];

  const startDate = new Date('2023/01/01');
  const endDate = new Date(new Date(startDate).setDate(startDate.getDate() + 370));
  const [heatmapWidth, setHeatmapWidth] = useState(window.innerWidth - 20);
  const handleResize = () => {
    setHeatmapWidth(window.innerWidth - 20);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (!userState.user) {
      dispatch(userActions.getUserInfo())

      return;
    }

    accountService.getByAccountId(user.id).then(result => {
      console.log("girdi")
      setAccount(result.data);
    });
    certificateService.getByAccountId(userState.user.id, 0, 5).then(result => {
      console.log("girdi")

      setCertificates(result.data)
    });
    examResultService.getByAccountId(user.id).then(result => {
      setExamResults(result.data)

    })
    accountService.getByAccountId(userState.user.id).then(result => {
      setAccount(result.data);
      console.log(result.data)
    });

    socialMediaService.getByAccountId(userState.user.id, 0, 10).then(result => {
      setSocialMedias(result.data);
    });

    accountBadgeService.getByAccountId(user.id).then(result => {
      setAccountBadges(result.data);

    });
  }, [userState]);

  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;


  return (
    <div className='profile-card'>
      <div className='container '>
        <div className='row'>
          <div className='d-flex justify-content-end dropdown-profile '>
            <Link to="/profilim/profilimi-duzenle/kisisel-bilgilerim">
              <span className='cv-edit-icon'></span>
            </Link>
            <Dropdown autoClose={false}>
              <Dropdown.Toggle id="dropdown-basic" variant='light' className="cv-share-icon">
                <img src="https://tobeto.com/share.svg" alt="ShareIcon" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="profileCustom-dropdown-menu customProfil-dropdown-menu">
                <Dropdown.Item>
                  <div className='d-flex justify-content-between dropdown-menu-profile '>
                    <p>Profilimi paylaş</p>
                    <div className="react-switch-card">
                      <label htmlFor="normal-switch">
                        <Switch
                          onChange={handleChange}
                          checked={checked}
                          onColor="#9932FF"
                          className="react-switch"
                          id="normal-switch"
                          height={20}
                          width={40}
                        />
                      </label>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id='dropdown-menu-profile'>
                  <div className='d-flex justify-content-end '>
                    <div className="input-copy-component">
                      <div>Profil Linki</div>
                      <div className="copy-text">
                        <input
                          type="text"
                          className="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={() => { handleCopyClick(); ProfileToaster({ name: "Url kopyalandı." }); }}>
                          <FontAwesomeIcon icon={faClone} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className='col-md-4'>
            <div className='profile-col-account'>
              <div className='profile-account '>
                <ul className="circles">
                  <li /><li /><li /><li /><li /><li /><li /><li /><li /><li />

                </ul>
                <img className='profile-account-img' src={account?.profilePhotoPath || DEFAULT_PROFILE_PHOTO} />
              </div>

              <div className='profile-account-field'>
                <img className='profile-icon' src='https://tobeto.com/cv-name.svg' alt='Icon' />
                <div className='profile-all-text'>
                  <span className='profile-header'> Ad Soyad  </span>
                  <span className='profile-account-text' >{account?.firstName + " " + account?.lastName || "Girilmemiş"} </span>
                </div>
              </div>

              <div className='profile-account-field'>
                <img className='profile-icon' src='https://tobeto.com/cv-date.svg' alt='Icon' />
                <div className='profile-all-text'>
                  <span className='profile-header'> Doğum Tarihi  </span>
                  <span className='profile-account-text' >
                    {account?.birthDate
                      ? new Date(account.birthDate).toLocaleString('tr-TR', options)
                      : "Girilmemiş"}
                  </span>
                </div>
              </div>

              <div className='profile-account-field'>
                <img className='profile-icon' src='https://tobeto.com/cv-mail.svg' alt='Icon' />
                <div className='profile-all-text'>
                  <span className='profile-header'> E-Posta Adresi  </span>
                  <span className='profile-account-text' >{account?.email}</span>
                </div>
              </div>
              <div className='profile-account-field'>
                <img className='profile-icon' src='https://tobeto.com/cv-phone.svg' alt='Icon' />
                <div className='profile-all-text'>
                  <span className='profile-header'>Telefon Numarası  </span>
                  <span className='profile-account-text' >{account?.phoneNumber || "Girilmemiş"} </span>
                </div>
              </div>
            </div>
            <div className='about-me  mt-3'>
              <div >
                <ProfileCard
                  key={account?.id}
                  content={account?.description}
                  title={"Hakkımda"}
                />

                <div className='certificates-section'>
                  <div className="certificates-box certificates-padding">
                    <span>Sertifikalarım</span>
                    <hr />
                    <div className='certificates-container'>
                      <div>
                        {
                          certificates?.items.map((certificate, index) => (
                            <Tooltip key={index} placement="top" content={certificate.name}>
                              <div>
                                <div className='certificate-skill'>
                                  <div className='text-truncate'>
                                    <div className='file-container'>
                                      {
                                        certificate.name.slice(0, 25)
                                      }...
                                      <Image className='pdf-png-icon'
                                        src={certificate.description.includes("pdf") ? "/assets/Icons/profile-settings/pdf.png" : "/assets/Icons/profile-settings/png.png"}
                                        alt={certificate.description.includes("pdf") ? "pdf icon" : "png icon"}
                                      />
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </Tooltip>
                          ))
                        }
                      </div>
                      {/* <div>Henüz bir sertifika yüklemedin.</div> */}
                    </div>
                  </div>
                </div>
                <div className='sm-card '>
                  <ProfileCard
                    title={
                      <div className='sm-header'>
                        <span>Medya Hesaplarım</span>
                      </div>
                    }
                    content={
                      <div className='sm-card-content'>
                        {socialMedias?.items.map((socialMedia, index) => (
                          <div className='sm-icon' key={index}>
                            <Image src={socialMedia.iconPath} alt={socialMedia.name} />
                          </div>
                        ))}
                        {socialMedias?.items.length === 0 && (
                          <p>Hesap eklenmedi. Eklemek için buraya tıklayın.</p>
                        )}
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className='col-md-8'>
            <ProfileCard
              title={<div className='profile-card-work-success'>
                <span >Tobeto İşte Başarı Modelim</span>
                <Link to="/profilim/degerlendirmeler/rapor/tobeto-iste-basari-yetkinlikleri/1">
                  <img src="https://tobeto.com/eye.svg" alt="eyeIcon" />
                </Link>
              </div>}
              content={
                <div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <ProfileRadar />
                    </div>
                  </div>
                </div>}
            />
            <br />
            <div className='col-md-12'>
              <ProfileCard
                title={"Tobeto Seviye Testlerim"}
                content={
                  <div className='row'>
                    {examResults?.items.map((examResult) => (
                      <div className="col-md-6">
                        <div className="exam-cart">
                          <div className="exam-cart-top">
                            <p className='exam-name'>{examResult.examName}</p>
                            <p className='profile-exam-time'>{new Date(examResult.createdDate).toLocaleDateString('tr-TR')}</p>
                          </div>
                          <div className="bottom">
                            <p className='exam-result'>{examResult.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                }
              />
              <ProfileCard
                title={
                  "Yetkinlik Rozetlerim"
                }
                content={
                  <div className="profile-badge-container">
                    {accountBadges?.items.map((accountBadge) => (
                      <div className="profile-badge">
                        <img src={String(accountBadge.badgeThumbnail)} alt="" />
                      </div>
                    ))}
                  </div>

                }
              />
            </div>


            <div className='col-md-12'>
              <ProfileCard
                title={"Tobeto Seviye Testlerim"}
                content={
                  <div className='row'>
                    {examResults?.items.map((examResult) => (
                      <div className="col-md-6">
                        <div className="exam-cart">
                          <div className="exam-cart-top">
                            <p className='exam-name'>{examResult.examName}</p>
                            <p className='profile-exam-time'>{new Date(examResult.createdDate).toLocaleDateString('tr-TR')}</p>
                          </div>
                          <div className="bottom">
                            <p className='exam-result'>{examResult.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                }
              />
              <ProfileCard
                title={
                  "Yetkinlik Rozetlerim"
                }
                content={
                  <div className="profile-badge-container">
                    {accountBadges?.items.map((accountBadge) => (
                      <div className="profile-badge">
                        <img src={String(accountBadge.badgeThumbnail)} alt="" />
                      </div>
                    ))}
                  </div>

                }
              />
            </div>

            <div className='col-md-12'>
              <div className="ActivityMapContainer">
                <div className="activityMapContent activityMapPadding">
                  <div className="ActivityMapHeader">
                    <span>Aktivite Haritam</span>
                    <hr />
                  </div>

                  <div className='abc-heatmap'>
                    {heatMapRows()}
                  </div>

                </div>
              </div>
            </div>
            <div className='sm-card col-md-8'>
              <ProfileCard
                title={
                  <div className='sm-header'>
                    <span>Eğitim Hayatım ve Deneyimlerim</span>
                  </div>
                }
                content={
                  <div className='sm-card-content'>
                    <div className='timeline'>
                      <div className='line'>
                        <div className='circle'>
                        </div>
                      </div>
                      {/* <p>Henüz bir eğitim ve deneyim bilgisi eklemedin. Eklemek için buraya tıklayın.</p> */}
                    </div>
                  </div>
                }
              />
            </div>
          </div>
          <div className='col-md-4 col-12'>
            {/* Soldakiler buraya */}

            <ProfileCard
              title={"Yetkinliklerim"}
              content={
                <div className='abilities-content'>
                  <div className='abilities-box'>
                    <span className='abilities-text'>
                      .NET
                    </span>
                  </div>
                  <div className='abilities-box'>
                    <span className='abilities-text'>
                      JAVA
                    </span>
                  </div>
                </div>
              } />
            <ProfileCard title={"Yabancı Dillerim"}
              content={
                <div className='languages-content'>
                  <div className='languages-box'>
                    <div className='languages-box-title'>
                    <span className='languages-text'>
                      İngilizce
                    </span>
                    <br />
                    <span className='languages-subtext'>
                      İleri Seviye
                    </span>
                    </div>
                  </div>
                  <div className='languages-box'>
                    <span className='languages-text'>
                      İspanyolca
                    </span>
                    <br />
                    <span className='languages-subtext'>
                      İleri Seviye
                    </span>
                  </div>
                </div>
              } />

          </div>

        </div>
        <div className='col-md-8 col-12'>


        </div>
      </div>
    </div>
  )
}