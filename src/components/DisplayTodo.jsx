import React, { useState } from 'react'
import { Card, Container, Row, Col, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
const DisplayTodo = () => {
    const [todos, setTodos] = useState([{ title: 'Nodejs', desc: 'Part of MERN' },
        { title: 'React', desc: 'Part of MERN' }, { title: 'Redux', desc: 'Part of React' }])
    return (
        <Container>
            <Row>
                <Col >
                    <Card>
                        <Card.Body>
                            <h1>Display Todo</h1>
                            <ListGroup>
                                {
                                todos.map((item,i) => (
                                    <>
                                    <ListGroup.Item>
                                          <h1>{item.title}</h1>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                          <p>{item.desc}</p>
                                    </ListGroup.Item>
                                    </>
                                    
                                  

                                ))
                                }
                            </ListGroup>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default DisplayTodo
