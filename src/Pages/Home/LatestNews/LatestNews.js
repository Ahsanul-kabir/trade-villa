import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const LatestNews = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-center pt-3">LATEST NEWS</h1>
                <div className="d-flex justify-content-center pb-3">
                    <hr style={{ width: '70px', height: '5px', marginTop: '0px', background: 'black' }} />
                </div>
                <Row className="pb-5">
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.ibb.co/fvh56yF/1.jpg" />
                            <Card.Body>
                                <Card.Title>Wire strippers</Card.Title>
                                <Card.Text>
                                    In this category, Ideal Industries' T-Stripper line of wire strippers is a top seller at Graybar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.ibb.co/S6zNwST/2.jpg" />
                            <Card.Body>
                                <Card.Title>Fish tapes and poles</Card.Title>
                                <Card.Text>
                                    Handles on impact-resistant cases are large and comfortable, so grip can be maintained.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.ibb.co/RBmH4Wd/3.jpg" />
                            <Card.Body>
                                <Card.Title>Labeling machines</Card.Title>
                                <Card.Text>
                                    Properly labeling work at installation saves time when making moves, adds and changes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LatestNews;