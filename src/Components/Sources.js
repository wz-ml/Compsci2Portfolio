import NavbarModule from "./Navbar";
import React from "react";
import {Container} from "react-bootstrap"

export default function Sources() {
    return (
        <main>
            <NavbarModule />
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <a href="https://github.com/wz-ml/Compsci2Portfolio">
                <img alt = "https://github.com/wz-ml/Compsci2Portfolio" src="https://gh-card.dev/repos/wz-ml/Compsci2Portfolio.svg?fullname=">
                </img>
                </a>
            </Container>
        </main>
    )
}