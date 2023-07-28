import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductosPage from "../pages/ProductosPage.jsx";
import ProductoDetailPage from "../pages/ProductoDetailPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import NavbarComponent from "../components/NavbarComponent.jsx";
import Container from "react-bootstrap/Container";
import ProductoCreatePage from "../pages/ProductoCreatePage.jsx";
import ProductoUpdatePage from "../pages/ProductoUpdatePage.jsx";

function AppRouter() {
  return (
    <>
      <Router>
        <Container fluid>
          <NavbarComponent />
        </Container>
        
        <Container>
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path="/productos" element={ <ProductosPage/> }/>
          <Route path="/productos/create" element={<ProductoCreatePage/>}/>
          <Route path="/productos/detail/:id" element={<ProductoDetailPage/>}/>
          <Route path="/productos/update/:id" element={<ProductoUpdatePage/>}/>
          <Route path="/login" element={ <LoginPage/> }/> 
          <Route path="/register" element={ <RegisterPage/> }/>
          <Route path="/*" element={ <NotFoundPage/> }/> 
        </Routes>
        </Container>
      </Router>
    </>
  )
}

export default AppRouter;
        