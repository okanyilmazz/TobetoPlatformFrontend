import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import { Paginate } from "../../models/paginate";
import { GetListEducationProgramResponse } from "../../models/responses/educationProgram/getListEducationProgramResponse";
import educationProgramService from "../../services/educationProgramService";
import "./CatalogPage.css";
import EducationProgramFilterRequest from "../../models/requests/filter/educationProgramFilterRequest";
import { AxiosResponse } from "axios";

export default function CatalogPage() {
    const [educationPrograms, setEducationPrograms] = useState<Paginate<GetListEducationProgramResponse>>();


    useEffect(() => {
        educationProgramService.getAll().then(result => {
            setEducationPrograms(result.data);
            console.log(result.data);
        })
    }, [])


    return (
        <div>
            <div className="catalog">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-9 catalog-search">
                            <h1>Öğrenmeye başla!</h1>
                            <div className="input-container">
                                <input type="text" id="search" placeholder="Eğitim arayın..." />
                                <IoSearch className="search-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <CatalogFilter />
                    </div>
                    <div className="col md-9 catalog-page-content" >
                        {
                            educationPrograms?.items.map((educationProgram) => (
                                <CatalogCard
                                    key={educationProgram.id}
                                    name={educationProgram.name}
                                    thumbnailPath={educationProgram.thumbnailPath}
                                    duration={educationProgram.duration}
                                    authorizedPerson={educationProgram.authorizedPerson}
                                    id={educationProgram.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


    );
}