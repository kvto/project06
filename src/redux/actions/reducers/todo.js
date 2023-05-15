import { actions } from "../todo";
const initialState = {
    //
    todos : [
        {id:1, description : "ser mas paciente con los alumnos", status: false},
    ]
}

export default function todoReducer(state = initialState, action)
{
    switch(action.type)
    {
        case actions.ADD_TODO:
        {
            return {
                ...state,
                todos:[ action.payload.todo, ...state.todos],
            }
        }

        case actions.DELETE_TODO:
            return{
               ...state,
               todos: state.todos.filter((todo)=> todo.id !== action.payload.id) 
            }
    default: 
    return state;
    }
}