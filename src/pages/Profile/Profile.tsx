
import React, { useEffect, useState } from 'react'
import ProfileCard from './../../components/ProfileCard/ProfileCard';
import './Profile.css';
import { useDispatch } from 'react-redux';
import authService from '../../services/authService';
import GetListAccountResponse from '../../models/responses/account/getListAccountResponse';
import { useSelector } from 'react-redux';
import { userActions } from '../../store/user/userSlice';
import accountService from '../../services/accountService';

export default function Profile() {
  const [account, setAccount] = useState<GetListAccountResponse>();

  const userState = useSelector((state: any) => state.user);
  const user = authService.getUserInfo();
  const dispatch = useDispatch();



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
          </div>
        </div>
      </div>

      {/* Sağdakilerde buraya */}

    </div>


  )
}
