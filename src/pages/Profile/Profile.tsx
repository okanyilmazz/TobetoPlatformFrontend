import { useEffect, useState } from 'react'
import ProfileCard from './../../components/ProfileCard/ProfileCard';
import './Profile.css';
import { useDispatch } from 'react-redux';
import authService from '../../services/authService';
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
import { DEFAULT_PROFILE_PHOTO } from '../../environment/environment';
import GetAccountResponse from '../../models/responses/account/getAccountResponse';
import accountLanguageService from '../../services/accountLanguageService';
import GetListAccountLanguageResponse from '../../models/responses/accountLanguage/getListAccountLanguageResponse';
import GetAccountLanguageResponse from '../../models/responses/accountLanguage/getAccountLanguageResponse';
import GetListSkillResponse from '../../models/responses/skill/getListSkillResponse';
import accountSkillService from '../../services/accountSkillService';
import GetListAccountSkillResponse from '../../models/responses/accountSkill/getListAccountSkillResponse';
import accountActivityMapService from '../../services/accountActivityMapService';
import GetListAccountActivityMapResponse from '../../models/responses/accountActivityMap/getListAccountActivityMapResponse';



export default function Profile() {
  const [account, setAccount] = useState<GetAccountResponse>();
  const [certificates, setCertificates] = useState<Paginate<GetListCertificateResponse>>();
  const [examResults, setExamResults] = useState<Paginate<GetListExamResultResponse>>();
  const userState = useSelector((state: any) => state.user);
  const user = authService.getUserInfo();
  const dispatch = useDispatch();
  const [accountBadges, setAccountBadges] = useState<Paginate<GetListAccountBadgeResponse>>();
  const [socialMedias, setSocialMedias] = useState<Paginate<GetListSocialMediaResponse>>();

  const [accountLanguages, setAccountLanguages] = useState<Paginate<GetListAccountLanguageResponse>>();
  const [accountSkills, setAccountSkills] = useState<Paginate<GetListAccountSkillResponse>>();
  const [activityMap, setActivityMap] = useState<Paginate<GetListAccountActivityMapResponse>>();


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

    accountService.getById(user.id).then(result => {
      setAccount(result.data);
    });

    certificateService.getByAccountId(userState.user.id, 0, 5).then(result => {
      console.log("girdi")

      setCertificates(result.data)
    });
    examResultService.getByAccountId(user.id).then(result => {
      setExamResults(result.data)

    })
    accountService.getById(userState.user.id).then(result => {
      setAccount(result.data);
      console.log(result.data)
    });

    socialMediaService.getByAccountId(userState.user.id, 0, 10).then(result => {
      setSocialMedias(result.data);
    });

    accountBadgeService.getByAccountId(user.id).then(result => {
      setAccountBadges(result.data);

    });

    accountLanguageService.getByAccountId(user.id).then(result => {
      setAccountLanguages(result.data);
    })

    accountSkillService.getByAccountId(user.id, 0, 10).then(result => {
      setAccountSkills(result.data);
      console.dir(result.data)
    })

    if (userState.user) {
      accountActivityMapService.getByAccountId(userState.user.id)
        .then(result => {
          setActivityMap(result.data);
        })
        .catch(error => {
          console.error('Aktivite haritası alınamadı:', error);
        });
    }
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
                  <div className='d-flex dropdown-menu-profile '>
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

                <ProfileCard
                  title={"Yetkinliklerim"}
                  content={
                    <div className='abilities-content'>
                      {
                        accountSkills?.items.map((accountSkill) => (
                          <div className='abilities-box'>
                            <span className='abilities-text'>
                              {accountSkill.skillName}
                            </span>
                          </div>
                        ))
                      }
                    </div>
                  } />

                <ProfileCard title={"Yabancı Dillerim"}
                  content={
                    <div className='languages-content'>

                      {
                        accountLanguages?.items.map((accountLanguage) => (
                          <div className='languages-box' key={String(accountLanguage.id)}>
                            <div className='languages-box-title'>
                              <span className='languages-text'>
                                {accountLanguage.languageName}
                              </span>
                              <br />
                              <span className='languages-subtext'>
                                {accountLanguage.languageLevelName}
                              </span>
                            </div>
                          </div>
                        ))
                      }

                    </div>
                  } />

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
              <div className='activity-map-container'>
                <div className="activity-map-content activity-map-padding">
                  <div className="activity-map-header">
                    <span>Aktivite Haritam</span>
                    <hr />
                  </div>
                  <div className="abc-heatmap">
                    <HeatMap
                      value={activityMap?.items.map(data => ({ date: data.date, count: data.activityCount }))}

                      monthLabels={[]}
                      weekLabels={[]}
                      rectProps={{
                        rx: 7,
                      }}
                      width={720}
                      rectSize={11}
                      startDate={new Date('2023/01/01')}
                      endDate={new Date(new Date('2023/01/01').setDate(new Date('2023/01/01').getDate() + 369))}
                      rectRender={(props: any, data: any) => (
                        <Tooltip
                          placement="top"
                          content={
                            data.count !== undefined
                              ? `${data.date.split('/').reverse().map((part: string) => part.padStart(2, '0')).join('/')} : ${data.count + ' adet aktivite'
                              }`
                              : 'Herhangi bir aktiviteniz yok : 0'
                          }
                        >
                          {data.count !== undefined && <rect {...props}></rect>}
                        </Tooltip>
                      )}
                      style={{ color: '#ad001d' }}
                      panelColors={{
                        0: '#cacaca',
                        1: '#b6f', //1-9
                        10: '#93f', //10-19
                        20: '#5c1f99', //20-29
                        30: '#361259', //30 ve üzeri
                      }}
                    />
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

          </div>

        </div>
        <div className='col-md-8 col-12'>


        </div>
      </div>
    </div >
  )
}