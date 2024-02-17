import React from 'react'
import LessonCard from '../../components/LessonCard/LessonCard'
import { Divider } from 'semantic-ui-react'
import { FaCircle } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import './EducationProgramContent.css'


export default function EducationProgramContent() {
    return (
        <div>
            <div className='container education-program-content mt-5'>
                <div className='row'>
                    <div className="col-md-12">

                    </div>
                </div>

                <div className="row">
                    <div className='col-md-5 mt-5'>

                    </div>
                    <div className='col-md-7'>
                        <LessonCard header={
                            <div className="lesson-card-content">
                                <iframe className="lesson-card-video" src="https://www.youtube.com/embed/-AoWSjeW9T8" ></iframe>
                            </div>}
                            title={<div className='lesson-title'> Status Code Result</div>}
                            text={<div className='lesson-text'>Video-7dk <FaCircle className='lesson-card-icon-first' /> Başlamadın</div>}
                            button={<Button className='lesson-card-btn'>DETAY</Button>} />
                    </div>
                </div>
            </div>
        </div>
    )
}
