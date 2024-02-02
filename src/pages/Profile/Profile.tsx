
import React from 'react'
import ProfileCard from './../../components/ProfileCard/ProfileCard';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-card'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            {/* Soldakiler buraya */}
          </div>
          <div className='col-md-8 col-12'>
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
      </div>
    </div>
  )
}
