import { useNavigate } from 'react-router';
import './EducationCard.css';
import { Button, Card } from 'react-bootstrap';

export default function EducationCard(props: any) {

    const navigate = useNavigate();
    return (
        <div className='education-card-content'>
            <div className='content'>
                {
                    <Card className='education-card'>
                        <Card.Img variant="top" src="https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg" />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.date}
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("/egitimlerim/egitim-detaylari")}>Eğitime Git</Button>
                        </Card.Body>
                    </Card>
                }
            </div>
        </div>
    )
}
