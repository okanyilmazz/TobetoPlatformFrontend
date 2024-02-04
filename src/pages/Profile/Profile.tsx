
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import ProfileCard from './../../components/ProfileCard/ProfileCard';
import './Profile.css';
import { Link } from 'react-router-dom';
import ReactSwitchButtonCard from '../../components/ReactSwitchButtonCard/ReactSwitchButtonCard';
import ProfileRadar from '../../components/ProfileRadar/ProfileRadar';
import InputCopy from '../../components/InputCopy/InputCopy';
import { RadarLabels } from '../../components/RadarLabels/RadarLabels';

export default function Profile() {
  return (
    <div className='profile-card bg-white'>
      <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-end dropdown-profile '>
            <Link to="/profilim/profilimi-duzenle/kisisel-bilgilerim">
              <span className='cv-edit-icon'></span>
            </Link>
            <Dropdown autoClose={false}>
              <Dropdown.Toggle id="dropdown-basic" variant='light' className="cv-share-icon">
                <img src="https://tobeto.com/share.svg" alt="ShareIcon" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="profileCustom-dropdown-menu customProfile-dropdown-menu">
                <Dropdown.Item>
                  <div className='d-flex justify-content-between dropdown-menu-profile '>
                    <p>Profilimi paylaş</p>
                    <ReactSwitchButtonCard />
                  </div>
                </Dropdown.Item>
                <Dropdown.Item id='dropdown-menu-profile'>
                  <div className='d-flex justify-content-end '>
                    <InputCopy />
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className='col-md-4 col-12'>
            {/* Sağdakiler Buraya */}
          </div>
          <div className='col-md-8 col-12'>
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
                    <div className='col-md-6'>
                      <div id="profile-radar">
                        <div id="wrapper-profile">
                          <ProfileRadar />
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <RadarLabels />
                    </div>
                  </div>
                </div>}
            />
            {/* Soldakiler buraya */}
          </div>
        </div>
      </div>
    </div >
  )
}
