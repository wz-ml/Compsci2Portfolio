import React from "react"
import DSIcon from "../Assets/data structures.jpg"
import PProgrammingIcon from "../Assets/blocks.jpeg"
import CSIcon from "../Assets/CSIcon.jpg"
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
            <Card className="text-center bg-success text-white rounded border-3">
                <Card.Body>
                    <h1>Compsci 25 Projects</h1>
                    <h4>2022, William Z</h4> 
                </Card.Body>
            </Card>
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
            }}>
            </Particles>    

            </Container>
            <Container className="text-center border-dark bg-primary text-white rounded border-3">
                <h1>Modules</h1>
            </Container>
            <Container>
                <Row>
                <Col>
                <Container>
                <Card style={{width: "18rem"}} className="text-center">
                    <Card.Img variant="top" src= {CSIcon} fluid/>
                    <Card.Body>
                        <Card.Title>Computer Science 2 - Concepts and Practice</Card.Title>
                        <Card.Text>A rundown of the history, paradigms, and basic design principles of project-oriented software.
                        </Card.Text>
                        <Button variation="primary" href="CompsciII">Go there</Button>
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
                    <Card.Text>A two-player Connect-4 battle, written using C++ using the modular programming paradigm.</Card.Text>
                    <Button variation="primary" href="ProceduralProgrammingI">Go there</Button>
                </Card.Body>
                <Card.Footer className="text-muted">May 14th, 2022</Card.Footer>
                </Card>
                </Container>
                </Col>
                <Col>
                <Container fluid>
                <Card style={{width: "18rem"}} className="text-center">
                <Card.Img variant="top" src= {DSIcon}/>
                <Card.Body>
                    <Card.Title>Data Structures</Card.Title>
                    <Card.Text>Exploring different ways to manipulate a database and the ways that different data structures can speed up or slow down computation.</Card.Text>
                    <Button variation="primary" href="DataStructuresI">Go there</Button>
                </Card.Body>
                <Card.Footer className="text-muted">May 26th, 2022</Card.Footer>
                </Card>
                </Container>
                </Col>
                </Row>
            </Container>
        </main>
    )
}