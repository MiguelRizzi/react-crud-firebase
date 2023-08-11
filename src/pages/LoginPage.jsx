import React from 'react';
import Container from 'react-bootstrap/Container';
import LoginFormComponent from '../components/LoginFormComponent.jsx';

function LoginPage() {
  return (
    <Container className='text-center m-5 p-4 '>
      <h1 className="display-5 mb-3">Login</h1>
      <LoginFormComponent />
    </Container>
  );
}

export default LoginPage;
