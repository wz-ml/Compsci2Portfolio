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
import response from "./page_3_response.json";
const blockMap = response;

export default function DataStructuresI() {
    return (
        <main>
            <NavbarModule/>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
                <h1>🌲Data Structures I, Course CSE2120</h1>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <div style={{maxWidth: 768, justifyContent: 'center', alignItems: 'center' }}>
                <NotionRenderer blockMap = {blockMap} />
            </div>
            </Container>
            <Container className = "d-flex justify-content-center mt-3 mb-3">
            <React.StrictMode>
            <JupyterViewer rawIpynb={nb_test}/>
            </React.StrictMode>
            </Container>
        </main>
    )
}
