import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import 'rc-dropdown/assets/index.css'
import 'katex/dist/katex.min.css'
import NavbarModule from "../Navbar"
import React from "react"
import {Container} from "react-bootstrap"
import ReactDOM from 'react-dom';
import JupyterViewer from "react-jupyter-notebook";
import nb_test from "./Dijkstra's Algorithm.ipynb.json"; // You need to read the .ipynb file into a JSON Object.
import response1 from "./page_3_response.json";
import response2 from "./page_3_response_2.json";

const blockMap1 = response1;
const blockMap2 = response2;

export default function DataStructuresI() {
    return (
        <main>
            <NavbarModule/>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
                <h1>🌲Data Structures I, Course CSE2120</h1>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <div style={{maxWidth: 768, justifyContent: 'center', alignItems: 'center' }}>
                <NotionRenderer blockMap = {blockMap1} />
            </div>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <React.StrictMode>
            <JupyterViewer rawIpynb={nb_test}/>
            </React.StrictMode>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <iframe title="BinarySearchEmbed" frameborder="0" width="80%" height="675px" src="https://replit.com/@WilliamZhou18/Dijkstras-Algorithm?embed=true"></iframe>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <div style={{maxWidth: 768, justifyContent: 'center', alignItems: 'center' }}>
                <NotionRenderer blockMap = {blockMap2} />
            </div>
            </Container>
        </main>
    )
}
