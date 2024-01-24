import React from 'react'
import './ApplicationCard.css'

export default function ApplicationCard() {
    return (
        <div className='application-card'>
            <div className='application-card-content'>
                <div className="application-card-status status_accepted">
                    <div className='project-name'>
                        <span>İstanbul Kodluyor</span>
                    </div>
                    <div className='application-card-content-title'>
                        <span>Bilgilendirme</span>
                    </div>
                    <div className='application-stages'>
                        <div className='application-stage'>
                            <div className='application-status-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#076034" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
                            </div>
                            <span>İstanbul Kodluyor Başvuru Formu onaylandı.</span>
                        </div>
                        <div className='application-stage'>
                            <div className='application-status-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#076034" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
                            </div>
                            <span>İstanbul Kodluyor Başvuru Formu onaylandı.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
