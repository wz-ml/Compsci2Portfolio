import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import responsept1 from "./page_1_response.json";
import responsept2 from "./page_1_response_pt2.json";
import 'rc-dropdown/assets/index.css'
import 'katex/dist/katex.min.css'
import NavbarModule from "../Navbar"
import React from "react"
import {Container} from "react-bootstrap";

const blockMap1 = responsept1;
const blockMap2 = responsept2;
export default function CompSciII({Component, pageProps}) {
    return (
        <main>
            <NavbarModule />
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <h1>💻 Computer Science II, Course CSE2010</h1>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <div style={{maxWidth: 768, justifyContent: 'center', alignItems: 'center' }}>
                <NotionRenderer blockMap = {blockMap1} />
            </div>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <iframe title="BinarySearchEmbed" frameborder="0" width="80%" height="675px" src="https://replit.com/@WilliamZhou18/BinarySearch?embed=true"></iframe>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <div style={{maxWidth: 768, justifyContent: 'center', alignItems: 'center' }}>
                <NotionRenderer blockMap = {blockMap2} />
            </div>
            </Container>
        </main>
    )
}