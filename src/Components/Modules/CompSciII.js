import NavbarModule from "../Navbar"
import React from "react"
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import response from "./page_1_response.json";

const blockMap = response;
export default function CompSciII({Component, pageProps}) {
    return (
        <main>
            <NavbarModule />
            <div style={{margin:150}}><h1>Computer Science II, Course CSE2010</h1></div>
            <div style={{margin: 150, maxWidth: 768, justifyContent: 'center', alignItems: 'center' }}>
                <NotionRenderer blockMap = {blockMap} />
            </div>
            <div style={{margin:150}}>
                <h2>Project</h2>
                <h5>To see the code, press the "show files" button!</h5>
                <iframe frameborder="0" width="100%" height="1000px" src="https://replit.com/@WilliamZhou18/BinarySearch?embed=true"></iframe></div>
        </main>
    )
}