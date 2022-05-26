import NavbarModule from "../Navbar"
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import fetch from "node-fetch";
import { NotionRenderer } from "react-notion-x";
import React from "react"

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/6e80d11606cb441caf03c643a9dbf65d"
  ).then(res => res.json());
  // console.log(data);
  return {
    props: {
      blockMap: data
    }
  };
}

const Notion = ({ blockMap }) => (
  <div style={{ maxWidth: 768 }}>
    <NotionRenderer blockMap={getStaticProps()} />
  </div>
);

export default Notion;
