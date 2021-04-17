import React, { FC, Fragment } from "react";
import { Col, Row } from "react-bootstrap";

import tag from '../../../imgs/tag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../common.css';

const TabOne: FC<{}> = () => {
    const location = <FontAwesomeIcon icon={'map-marker-alt'} />

    return (
        <Fragment>
            <div className="tabs">
                <Row className="py-3 border-top">
                    <Col md={4}>
                        <img src='https://i.ibb.co/YNH6GBM/fan.png' alt="" className="w-100" />
                    </Col>
                    <Col md={8}>
                        <small>18/5/2021</small>

                        <Row>
                            <div className='col-8'>
                                <h4>title Tortoise, desert</h4>
                                <small>Posted By: Vagram</small>
                                <p className='mt-3 location'><span>{location}</span> 45855 Main Crossing</p>
                            </div>
                            <div className='col-4'>
                                <h4>$25</h4>
                                <p className='tag text-muted' ><img src={tag} alt="tag" /> 2 offers</p>
                            </div>
                        </Row>
                    </Col>
                </Row>

                <Row className="py-3 border-top">
                    <Col md={4}>
                        <img src='https://i.ibb.co/0F7B3Sf/flower.png' alt="" className="w-100" />
                    </Col>
                    <Col md={8}>
                        <small>12/6/2021</small>

                        <Row>
                            <div className='col-8'>
                                <h4>Porcupine, tree</h4>
                                <small>Posted By: Jigan</small>
                                <p className='mt-3 location'><span>{location}</span> 25 Main RailGte</p>
                            </div>
                            <div className='col-4'>
                                <h4>$52</h4>
                                <p className='tag text-muted' ><img src={tag} alt="tag" /> 8 offers</p>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Fragment>


    );
};
export default TabOne;
