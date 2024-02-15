
import React, { useEffect, useState } from 'react'
import ProfileCard from './../../components/ProfileCard/ProfileCard';
import './Profile.css';
import { useDispatch } from 'react-redux';
import authService from '../../services/authService';
import GetListAccountResponse from '../../models/responses/account/getListAccountResponse';
import { useSelector } from 'react-redux';
import { userActions } from '../../store/user/userSlice';
import accountService from '../../services/accountService';
import GetListSocialMediaResponse from '../../models/responses/socialMedia/getListSocialMediaResponse';
import socialMediaSevice from '../../services/socialMediaService';
import socialMediaService from '../../services/socialMediaService';
import { Paginate } from '../../models/paginate';
import { Image } from 'react-bootstrap';


export default function Profile() {
  const [account, setAccount] = useState<GetListAccountResponse>();
  const [socialMedias, setSocialMedias] = useState<Paginate<GetListSocialMediaResponse>>();

  const userState = useSelector((state: any) => state.user);
  const user = authService.getUserInfo();
  const dispatch = useDispatch();
  //const ProfileSection = ({ experiences })



  useEffect(() => {
    if (!userState.user) {
      dispatch(userActions.getUserInfo())

      return;
    }

    console.log(user.id)
    accountService.getByAccountId(userState.user.id).then(result => {
      setAccount(result.data);
      console.log(result.data)
    });
    socialMediaService.getByAccountId(userState.user.id).then(result => {
      setSocialMedias(result.data);
    })

  }, [userState]);

  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const defaultProfilePhotoPath = 'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=128&q=75';


  return (
    <div className='profile-card'>

      <div className='container '>

        <div className='row'>

          <div className='profile-col-account col-md-4'>
            <div className='profile-account '>
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <img className='profile-account-img' src={account?.profilePhotoPath || defaultProfilePhotoPath} />
            </div>

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
          <div className='col-md-4 col-12'>
            <div className='sm-card'>
              Profiles?.items.map((profile) => (
              <ProfileCard
                title={<div className='sm-header'>
                  <span>Medya Hesaplarım</span>
                </div>}
                content={<div>
                  {
                    
                  }
                </div>}
              />)
            </div>
            {/* Soldakiler buraya */}
          </div>

        </div>

        <div className='about-me container mt-5'>
          <div className='row'>
            <div className='col-md-4'>
              <ProfileCard
                key={account?.id}
                content={account?.description}
                title={"Hakkımda"}

              />

            </div>
          <div className='col-md-8 col-12'>
            <div className='sm-card'>
              <ProfileCard
                title={<div className='sm-header'>
                  <span>Eğitim Hayatım ve Deneyeimlerim</span>
                </div>}
                content='Henüz bir eğitim ve deneyim bilgisi eklemedin.'
              />
            </div>
            {/* <ProfileCard
              title={<div className=''>
                <span >Hakkımızda</span>
                <img src="https://tobeto.com/eye.svg" alt="eye" />
              </div>}
              content="İçerik"
            /> */}
            {/* Sağdakilerde buraya */}

          </div>
        </div>
        <div className='sm-card col-md-4'>
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
{/* 
      <div className='sm-card col-md-8'>
        <ProfileCard
          title={
            <div className='sm-header'>
              <span>Eğitim Hayatım ve Deneyimlerim</span>
            </div>
          }
          content={
            <div className='sm-card-content'>
              {experiences.length === 0 ? (
                <p>Henüz bir eğitim ve deneyim bilgisi eklemedin. Eklemek için buraya tıklayın.</p>
              ) : (
                <ExperienceTimeline experiences={experiences} />
              )}
            </div>
          }
        />
      </div> */}

    </div>


  )
}
