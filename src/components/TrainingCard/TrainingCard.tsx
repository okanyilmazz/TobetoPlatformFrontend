import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './TrainingCard.css'
import { Paginate } from '../../models/paginate';
import { GetListCountryResponse } from '../../models/responses/country/getListCountryResponse';
import GetListProgrammingLanguageResponse from '../../models/responses/programmingLanguage/getListProgrammingLanguageResponse';
import countryService from '../../services/countryService';
import programmingLanguageService from '../../services/programmingLanguageService';


export default function TrainingCard(props: any) {
  const [programmingLanguages, setProgrammingLanguages] = useState<Paginate<GetListProgrammingLanguageResponse>>();
  const [countries, setCountries] = useState<Paginate<GetListCountryResponse>>();

  useEffect(() => {
    programmingLanguageService.getAll().then(result => {
      setProgrammingLanguages(result.data)
    })

    countryService.getAll().then(result => {
      setCountries(result.data)
    })
  }, []);


  return (

    <div className='training-content'>
      <div className='training-card-group'>
        {
          props.check === "occupation" ? (
            countries?.items.map((country) => (
              <Card className="card-container">
                <Card.Body className="card-body">
                  <span>{country.name}</span>
                  {/* <Card.Text className="card-title h5">{programmingLanguage.name}</Card.Text> */}
                </Card.Body>
              </Card>
            ))
          ) : (
            programmingLanguages?.items.map((programmingLanguage) => (
              <Card className="card-container">
                <Card.Body className="card-body">
                  <span>{programmingLanguage.name}</span>
                  {/* <Card.Text className="card-title h5">{programmingLanguage.name}</Card.Text> */}
                </Card.Body>
              </Card>
            ))
          )
        }
      </div>
    </div>
  )
}
