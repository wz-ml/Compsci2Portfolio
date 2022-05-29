import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import responsept1 from "./page_1_response.json";
import responsept2 from "./page_1_response_pt2.json";
import 'rc-dropdown/assets/index.css'
import 'katex/dist/katex.min.css'
import NavbarModule from "../Navbar"
import React from "react"

const blockMap1 = responsept1;
const blockMap2 = responsept2;
export default function CompSciII({Component, pageProps}) {
    return (
        <main>
            <NavbarModule />
            <div style={{margin:150}}><h1>💻 Computer Science II, Course CSE2010</h1></div>
            <div style={{margin: 150, maxWidth: 768, justifyContent: 'center', alignItems: 'center' }}>
                <NotionRenderer blockMap = {blockMap1} />
            </div>
            <div style={{margin:150}}>
                <iframe title="BinarySearchEmbed" frameborder="0" width="100%" height="1000px" src="https://replit.com/@WilliamZhou18/BinarySearch?embed=true"></iframe>
                <NotionRenderer blockMap = {blockMap2} />
            </div>

        </main>
    )
}