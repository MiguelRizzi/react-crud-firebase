import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-center text-white py-4">
      <div className="container">
        <span>&copy; {new Date().getFullYear()} My App. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
