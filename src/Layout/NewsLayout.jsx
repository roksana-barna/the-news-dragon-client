
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightNav from '../Shared/RightNav/RightNav';
import Footer from '../Shared/Footer/Footer';


const NewsLayout = () => {
    return (
        <div>
              <div>
           <Header></Header>
           <Container>
      <Row>
      
        <Col lg={9}>
<Outlet></Outlet>
        </Col>
        <Col lg={3}>
<RightNav></RightNav>
        </Col>
      </Row>
    </Container>
           <Footer></Footer>
        </div>
            
        </div>
    );
};

export default NewsLayout;