import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <Card className='w-50 mx-auto ' style={{ marginTop: '8rem' }}>

                <ListGroup className="list-group-flush">
                    <ListGroupItem><span>Name: </span>Ahsanul Kabir</ListGroupItem>
                    <ListGroupItem><span>Email: </span>ahsanul.kabir.cse@gmail.com</ListGroupItem>
                    <ListGroupItem><span>Education: </span>Daffodil International University(2017-2020)</ListGroupItem>

                </ListGroup>

                <ListGroup className="list-group-flush">

                    <ListGroupItem> <h5 className='text-primary '>My Skill: </h5>HTML, CSS, Bootstrap, Tailwind, JavaScript, React, NodeJs,Mongodb, Firebase etc.</ListGroupItem>

                </ListGroup>

                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><h5>My Project: </h5></ListGroupItem>
                        <ListGroupItem><span>Trade Villa: </span><a href='https://trade-villa.web.app/'>https://trade-villa.web.app/</a></ListGroupItem>

                        <ListGroupItem><span>Cycle Zone: </span><a href='https://cycle-zone-77.web.app/'>https://cycle-zone-77.web.app/</a></ListGroupItem>

                        <ListGroupItem><span>Books Hub: </span><a href='https://books-hub-77.netlify.app/'>https://books-hub-77.netlify.app/</a></ListGroupItem>

                        <ListGroupItem><span>Money Guru: </span><a href='https://money-guru.netlify.app/'>https://money-guru.netlify.app/</a></ListGroupItem>

                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Portfolio;