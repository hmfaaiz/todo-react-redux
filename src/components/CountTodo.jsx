import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from "react-redux"

const CountTodo = ({todos}) => {
  return (
   <Card>
    <Card.Body>
        <h5>Total Todo : {todos.length}</h5>
    </Card.Body>
   </Card>
  )
}
const mapStateToProps = (state) => {
  return { todos: state.todos }
}
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps) (CountTodo)
