import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Image src="assets/dog-people.jpg" className="header-image"/>
                <Container>
                    <Col xs={12} sm={8} smOffSet={2}>
                        <Image src="assets/person-1.jpg"/>
                    </Col>
                </Container >
            </div>
        )
    }
}