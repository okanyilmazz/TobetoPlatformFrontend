import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./BlogCard.css"
import { useNavigate } from 'react-router-dom';

export default function BlogCard(props: any) {

    return (

        <div className="Blog-container ">
            <div className="main-bc">
                <Card style={{ borderRadius: '30px' }} className='Blog-blogcard' >
                    <div >
                        <div className='card-img'>
                            <Card.Img src={props.thumbnailPath} />
                        </div>
                        <div className="card-catalog">
                            <div className="card-catalog-content">
                                <Card.Title className="catalog-cart-title mt-5">
                                    <h1>{props.title}</h1>
                                </Card.Title>
                                <Card.Text className="catalog-cart-text">
                                    <p>{props.description}</p>
                                </Card.Text>
                            </div>

                        </div>
                        <div className="date">{props.releaseDate}</div>
                    </div>
                </Card>
            </div>
        </div >
    )
}
