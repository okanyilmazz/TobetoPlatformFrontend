
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
import HeatMap from '@uiw/react-heat-map';
import { Tooltip, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import ProfileRadar from '../../components/ProfileRadar/ProfileRadar';
import 'react-toastify/dist/ReactToastify.css';
import ProfileToaster from '../../components/ProfileToaster/ProfileToaster';
import UiwTooltip from '@uiw/react-tooltip';



export default function Profile() {
  const [account, setAccount] = useState<GetListAccountResponse>();
  const [certificates, setCertificates] = useState<Paginate<GetListCertificateResponse>>();
  const userState = useSelector((state: any) => state.user);
  const user = authService.getUserInfo();
  const dispatch = useDispatch();

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
        rectRender={(props, data,) => {
          if (!data || !data.count || data.count == 0)
            return <UiwTooltip placement="top" content={`Herhangi bir aktiviteniz yok : ${0}`}>
              <rect {...props}></rect>
            </UiwTooltip>
          else
            return (
              <UiwTooltip
                placement="top"
                content={`${data.date
                  .split('/')
                  .reverse()
                  .map((part) => part.padStart(2, '0'))
                  .join('/')} : ${data.count + ' adet aktivite'}`}
              >
                <rect {...props}></rect>
              </UiwTooltip>
            );
        }}
        style={{ color: '#ad001d' }}
        panelColors={{
          0: '#cacaca',
          1: '#b6f', //1-9
          10: '#93f', //10-19
          20: '#5c1f99', //20-29
          30: '#361259', //30 ve üzeri

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

    console.log(user.id)
    accountService.getByAccountId(user.id).then(result => {
      setAccount(result.data);
      console.log(result.data)
    });
    certificateService.getByAccountId(userState.user.id, 0, 5).then(result => {
      setCertificates(result.data)
      console.log(result.data)
    });
  }, [userState]);

  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const defaultProfilePhotoPath = 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=128&q=75';

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
          return (
          <div className='profile-card'>

            <div className='container '>

              <div className='row'>

                <div className='col-md-4'>
                  <div className='profile-col-account'>
                    <div className='profile-account '>
                      <ul className="circles">
                        <li /><li /><li /><li /><li /><li /><li /><li /><li /><li />
                      </ul >
                      <img className='profile-account-img' src={account?.profilePhotoPath || defaultProfilePhotoPath} />
                    </div >

                    <div className='profile-account-field'>
                      <img className='profile-icon' src='https://tobeto.com/cv-name.svg' alt='Icon' />
                      <div className='profile-all-text'>
                        <span className='profile-header'> Ad Soyad  </span>
                        <span className='profile-account-text' >{account?.userName || "Girilmemiş"} </span>
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
                  </div >
                  <div className='about-me container mt-5'>
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
                                certificates?.items.map((certificate) => (
                                  <div>
                                    <div className='certificate-skill'>
                                      <div className='text-truncate'>
                                        <div className='file-container'>
                                          {certificate.name.slice(0, 25)}...
                                          <img className='pdf-png-icon' src="https://tobeto.com/pdf.png" alt="PDF Icon" />
                                        </div>
                                      </div>

                                    </div >
                                  </div >
                                ))
                              }
                            </div >
                            {/* <div>Henüz bir sertifika yüklemedin.</div> */}
                          </div >
                        </div >
                      </div >
                    </div >

                  </div >

                </div >
                <div className='col-md-8'>
                  <div className="ActivityMapContainer">
                    <div className="activityMapContent activityMapPadding">
                      <div className="ActivityMapHeader">
                        <span>Aktivite Haritam</span>
                        <hr />
                      </div>

                      <div className='abc-heatmap'>
                        {heatMapRows()}
                      </div>

                    </div >
                  </div >
                </div >


              </div >


            </div >
            {/* Sağdakilerde buraya */}
            <div className='col-md-8'>
              <br />
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
                <div className='row'>
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

              </div>
              <div className='col-md-8'>
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


            </div>


          </div>


          {/* SAĞDAKİLER BURAYA */}
        </div >
      </div>
    </div>
  )
}