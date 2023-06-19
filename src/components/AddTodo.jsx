
import React, { useState } from 'react'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import { addTodo } from "../redux/action/todo"
import { connect } from "react-redux"
import { v4 } from 'uuid';
const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState({ title: '', desc: '', id: '' })
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({ ...todo, id: v4() })
        // console.log(todo)
    }
    return (
        <Container className='mt-3'>
            <Row >
                <Col >
                    <Card>
                        <Card.Body>
                            <h3>Add Todo</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-4'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type='text' placeholder='Write here..'
                                        value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as={"textarea"} placeholder='Write here..'
                                        value={todo.desc} onChange={(e) => setTodo({ ...todo, desc: e.target.value })}></Form.Control>
                                </Form.Group>
                                <Container className='mt-3 text-center'>
                                    <Button type='Submit'>
                                        Add Todo
                                    </Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => (dispatch(addTodo(todo)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)