
import IstanbulCard from '../../components/IstanbulCard/IstanbulCard';
import React from 'react'
import LoginPageCard from "../../components/LoginPageCard/LoginPageCard";
import './LoginPage.css';

export default function LoginPage() {
    return (
        <div className='bg-front-white login-page-content'>
            <div className="container bg-front-white">
                <div className="row content-center">
                    <div className="login-page col-md-6">
                        <LoginPageCard />
                    </div>

                    <div className="login-page-ik col-md-6 ">
                        <div className="login-ik-container">

                        </div>
                        <div className="login-ik-container">
                            <img className="tobeto-icon" src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" alt="" />
                        </div>
                        <span className="greenLine2">
                        </span>
                        <div className="job">
                            <span>Aradığın
                                <span style={{ color: 'rgb(0, 176, 120)', marginRight: '0', marginLeft: '5px' }}>"</span>İş<span style={{ color: 'rgb(0, 176, 120)', marginLeft: '0', marginRight: '5px', }}>"</span>
                                Burada!</span>
                        </div>
                        <button className="Apply-button">
                            <a href="https://tobeto.com/istanbul-kodluyor">Başvur</a>
                        </button>
                    </div>
                </div>
            </div></div>



    )
}


