import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import 'rc-dropdown/assets/index.css'
import 'katex/dist/katex.min.css'
import NavbarModule from "../Navbar"
import React from "react"
import {Container} from "react-bootstrap"

import response1 from "./page_2_response.json";
import response2 from "./page_2_response_pt2.json";
import { NotionRenderer } from "react-notion";

const blockMap1 = response1;
const blockMap2 = response2;

export default function ProceduralProgrammingI() {
    return (
        <main>
            <NavbarModule/ >
            <Container className = "d-flex justify-content-center mt-3 mb-3">
                <h1>🧮 Procedural Programming I, Course CSE2110</h1>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <div style={{maxWidth: 768}}>
                <NotionRenderer blockMap = {blockMap1} />
            </div>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <iframe title="BinarySearchEmbed" frameBorder="0" width="80%" height="675px" src="https://replit.com/@WilliamZhou18/Connect4CPP?embed=true"></iframe>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <div style={{maxWidth: 768}}>
                <NotionRenderer blockMap = {blockMap2} />
            </div>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <iframe title="BinarySearchEmbed" frameBorder="0" width="80%" height="675px" src="https://replit.com/@WilliamZhou18/Linear-Equation-System-Solver?embed=true"></iframe>
            </Container>
        </main>
    )
}
//            <BounceSim id="simulation" width = "550" height = "550"/>
