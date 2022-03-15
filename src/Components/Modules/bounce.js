import NavbarModule from "../Navbar"
import React from "react"
import BounceSim from "./bouncesim"
import {Container, Card} from "react-bootstrap"
export default function Bounce() {
    return (
        <main>
            <NavbarModule/ >
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <BounceSim id="simulation" width = "550" height = "550"/>
            </Container>
        </main>
    )
}