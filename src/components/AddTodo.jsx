
import React, { useState } from 'react'
import { Card, Container, Row, Col, Form,Button } from 'react-bootstrap'

const AddTodo = () => {
    const [todo,setTodo]=useState({title:'',desc:''})
    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log(todo)
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
                                    value={todo.title} onChange={(e)=>setTodo({...todo,title:e.target.value})}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as={"textarea"} placeholder='Write here..'
                                     value={todo.desc} onChange={(e)=>setTodo({...todo,desc:e.target.value})}></Form.Control>
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

export default AddTodo
