import React from "react"
import DSIcon from "../Assets/data structures.jpg"
import PProgrammingIcon from "../Assets/blocks.jpeg"
import {Container, Card, Button, Row, Col} from "react-bootstrap"
import Particles from "react-tsparticles"

const particlesInit = (main) => {
    console.log(main);
};
const particlesLoaded = (container) => {
    console.log(container);
};

export default function Home() {
    return (
        <main>
            <Container>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {enable: false},
                background: {
                color: {
                    value: "#000000",
                },
                },
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    },
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 120,
                    duration: 0.8,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#229e19",
                    distance: 150,
                    enable: true,
                    opacity: 0.8,
                    width: 2,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.8,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }}
            />                
                <Card>
                    <Card.Body>
                        <Card.Title>Compsci 25 Projects</Card.Title>
                        <Card.Text>2022</Card.Text> 
                    </Card.Body>
                    <Card.Footer>By Will Z</Card.Footer>
                </Card>
            </Container>
            <Container className="text-center border-dark bg-primary text-white rounded border-3">
                <h1>Modules</h1>
            </Container>
            <Container>
                <Row>
                <Col>
                <Container fluid>
                <Card style={{width: "18rem"}} className="text-center">
                    <Card.Img variant="top" src= {DSIcon} fluid/>
                    <Card.Body>
                        <Card.Title>Data Structures</Card.Title>
                        <Card.Text>An illustration of the most commonly-used data structures in computer science: 
                        <br/>
                        Heaps, Lists, Stacks, and Queues
                        </Card.Text>
                        <Button variation="primary" href="datastructures">Go there</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Mar 12, 2022</Card.Footer>
                </Card>
                </Container>
                </Col>
                <Col>
                <Container fluid>
                <Card style={{width: "18rem"}} className="text-center">
                <Card.Img variant="top" src= {PProgrammingIcon}/>
                <Card.Body>
                    <Card.Title>Procedural Programming</Card.Title>
                    <Card.Text>A particle collision simulator, written using JS using modular functions.</Card.Text>
                    <Button variation="primary" href="bounce">Go there</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Mar 15, 2022</Card.Footer>
                </Card>
                </Container>
                </Col>
                <Col>
                <Container fluid>
                </Container>
                </Col>
                </Row>
            </Container>
        </main>
    )
}