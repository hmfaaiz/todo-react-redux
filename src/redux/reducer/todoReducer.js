import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../action/actionType"

const initialState = []
export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload)
            return [...state, action.payload]


        case DELETE_TODO:
            const newData = state.filter((todo) => todo.todoId !== action.payload)
            console.log(newData)
           
            return newData


        case UPDATE_TODO:
            const updateState = state.map(todo => {

                if (todo.id === action.payload.todoId) {
                    todo.title === action.payload.todo.title;
                    todo.desc === action.payload.todo.desc;
                }
                return todo;

            })
            return updateState

        default:
            return state


    }


}