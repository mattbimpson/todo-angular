import { Action } from '@ngrx/store'
import * as a from './actions'
import { TodoState } from './initialState'
import { AddTodo } from './actions'
//import { Todo } from '../todo';

const initialState : TodoState = {
  todos: []
}
 
export function reducer(state = initialState, action: AddTodo) {
  switch (action.type) {
    case a.addTodo:
        const todos = [ ...state.todos ]
        todos.push(action.payload.todo)
        const newState = { ...state, todos }
        return newState
    default:
      return state;
  }
}