import React from 'react';
import RegisterFormComponent from "../components/RegisterFormComponent.jsx";
import { Container } from 'react-bootstrap';

function RegisterPage() {
  return (
    <Container className='text-center p-4'>
      <h1 className="display-5 mb-3">Registrar nuevo usuario.</h1>
      <RegisterFormComponent />
    </Container>
  );
}

export default RegisterPage;

