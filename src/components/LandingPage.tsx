// src/components/LandingPage.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navigation from './Navigation';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1>Welcome to CareFinder</h1>
            <p>Find the best hospitals around you!</p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
