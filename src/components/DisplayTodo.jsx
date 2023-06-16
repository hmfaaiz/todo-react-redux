import React, { useState } from 'react'
import { Card, Container, Row, Col, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import CountTodo from './CountTodo'

const DisplayTodo = () => {
    const [todos, setTodos] = useState([{ title: 'Nodejs', desc: 'Part of MERN' },
        { title: 'React', desc: 'Part of MERN' }, { title: 'Redux', desc: 'Part of React' }])
    return (
        <Container className='mt-4'>
            <Row>
                <Col >
                    <Card>
                        <Card.Body>
                            <h3>Display Todo</h3>
                            <CountTodo/>
                            <ListGroup className='mt-4'>
                                {
                                todos.map((item,i) => (
                                    <>
                                    <ListGroup.Item className='mt-3'>
                                          <h4>{item.title}</h4>
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
