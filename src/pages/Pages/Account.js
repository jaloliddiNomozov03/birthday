import React, {Component} from 'react';
import {Col, Row} from "antd";
import {Container} from "reactstrap";

class Account extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="table">
                    <Container>
                        <Row>
                            <Col lg={3}>
                                Name
                            </Col>
                            <Col lg={3}>
                                Birthday
                            </Col>
                            <Col lg={3}>days</Col>
                            <Col lg={3}>action</Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Account;