import React, { useState } from 'react'
import { Card, Container, Row, Col, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import CountTodo from './CountTodo'
import { connect } from "react-redux"
import { deleteTodo } from "../redux/action/todo"
import { updateTodo } from "../redux/action/todo"
const DisplayTodo = ({ todos, deleteTodo,updateTodo }) => {
    // const [todos, setTodos] = useState([{ title: 'Nodejs', desc: 'Part of MERN' },
    //     { title: 'React', desc: 'Part of MERN' }, { title: 'Redux', desc: 'Part of React' }])
    return (
        <Container className='mt-4'>
            <Row>
                <Col >
                    <Card>
                        <Card.Body>
                            <h3>Display Todo</h3>
                            <CountTodo />
                            <ListGroup className='mt-4'>
                                {
                                    todos.map((item, i) => (
                                        <>
                                            <ListGroup.Item className='mt-3'>
                                                <h4>{item.title}</h4>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <p>{item.desc}</p>
                                                <Button onClick={e => deleteTodo(todos.id)} variant="danger">Delete</Button>
                                                <Button onClick={e => updateTodo(todos.id)} >Update</Button>
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

const mapStateToProps = (state) => {
    return { todos: state.todos }
}
const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => (dispatch(deleteTodo(id))),
    updateTodo: (id) => (dispatch(updateTodo(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo)
