import React from "react";

const TvSeriesList = () => (
    <Container>
        <Row>
            <Col className="greeting">
                <span>Hello, watchers!</span>
                <span>Tv Series</span>
            </Col>
        </Row>
        <Row>
            <Col xs={6} className="coll">
                <p>url</p>
                <p>type</p>
                <p>language</p>
                <p>name</p>
                <p>status</p>
            </Col>
            <Col xs={6} className="coll">
                <p>url</p>
                <p>type</p>
                <p>language</p>
                <p>name</p>
                <p>status</p>
            </Col>
            <Col xs={6} className="coll">
                <p>url</p>
                <p>type</p>
                <p>language</p>
                <p>name</p>
                <p>status</p>
            </Col>
            <Col xs={6} className="coll">
                <p>url</p>
                <p>type</p>
                <p>language</p>
                <p>name</p>
                <p>status</p>
            </Col>
        </Row>
    </Container>

);

export default TvSeriesList;

