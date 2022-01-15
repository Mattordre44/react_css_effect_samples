import './Home.css';
import {TopBar} from "./Navbar/Navbar";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

function Home() {
    return (
        <>
            <TopBar/>
            <Container>
                <Row>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={12} sm={6} lg={4}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="./images/rain.png" />
                                        <Card.Body>
                                            <Card.Title>Rain effect</Card.Title>
                                            <Card.Text>
                                                Simple example of rain using vertical css transition
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => window.location.assign("/rain-effect")}>details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="./images/blob.png" />
                                        <Card.Body>
                                            <Card.Title>Blob effect</Card.Title>
                                            <Card.Text>
                                                Simple example of blob
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => window.location.assign("/blob-effect")}>details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default Home;