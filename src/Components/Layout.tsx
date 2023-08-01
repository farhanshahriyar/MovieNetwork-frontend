import React from 'react';
import Headers from './Headers';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <main>
            <Container>
                <Headers></Headers>
                <Outlet></Outlet>
                <Footer />
            </Container>
        </main>
    );
};

export default Layout;