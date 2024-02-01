import React, { useEffect, useState } from 'react'
import { GetListEducationProgramResponse } from '../../models/responses/educationProgram/getListEducationProgramResponse';
import { Paginate } from '../../models/paginate';
import educationProgramService from '../../services/educationProgramService';
import { useParams } from 'react-router-dom';

export default function EducationProgramDetail() {
    let { id } = useParams();

    const [educationPrograms, setEducationPrograms] = useState<Paginate<GetListEducationProgramResponse>>();

    useEffect(() => {
        educationProgramService.getAll().then(result => {
            setEducationPrograms(result.data);
        })
    }, [])

    return (
        <div style={{ color: 'red', marginTop: '25rem' }}>
            Detay sayfası
        </div>
    )
}

