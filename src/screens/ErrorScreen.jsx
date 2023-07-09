import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorScreen = () => {
  return (
    <Container className="mt-5 text-center">
      <h1>404 !</h1>
      <h4>Oops! The page you're looking for doesn't exist.</h4>
      <Button as={Link} to="/" variant="primary">Go Home</Button>
    </Container>
  )
}

export default ErrorScreen
