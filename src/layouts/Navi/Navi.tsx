import React from 'react'
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { Image } from 'semantic-ui-react';
import './Navi.css';

export default function Navi() {
    const navigate = useNavigate();
    return (
        <div>

            <div className='home-container' >

                <div className='home'>
                    <div className='img'   >
                        <Image className='my-custom-image' src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg"></Image>
                    </div>

                    <div className='paragraph'   >
                        <p>Aradığın <span >"</span>İş<span >"</span> Burada!</p>
                    </div>

                    <div className='buttonnn'   >
                        <Button className='btn' onClick={() => { navigate("") }}> Başvur</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}
