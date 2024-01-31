import React from 'react'
import { CiUser } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
import './CatalogCard.css'
import { useNavigate } from 'react-router-dom';

const CatalogCard = (props: any) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/education-program-details/${props.id}`);

    };
    return (
        <div className="row">
            <div className="col-md-3" >
                <Card className='catalog-card' onClick={handleClick}>
                    <Card.Img src={props.thumbnailPath} />
                    <div className='catalog-button-content'  >
                        <div className="catalog-button ">
                            <img src="https://tobeto.com/entry.svg" />
                        </div>
                    </div>

                    <div className="catalog-card-subtitle">
                        <Card.Title className="catalog-cart-title mt-3"> <CiUser /> {props.authorizedPerson} <IoTimeOutline />{props.duration}</Card.Title>
                        <Card.Text className="catalog-cart-text">
                            <p>{props.name}</p>
                        </Card.Text>
                    </div>
                </Card>
            </div>

        </div>
    )
}
export default CatalogCard;