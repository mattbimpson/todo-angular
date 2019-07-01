import { MyAction } from '../store/actions';
import * as a from './actions';
import { TodoState } from './initialState';

const initialState: TodoState = {
  todos: []
};

export function reducer(state = initialState, action: MyAction) {
  let newState = { ...state };
  let todos = [ ...state.todos ];
  switch (action.type) {
    case a.addTodo:
        const newTodo = { ...action.payload.todo };
        newTodo.id = todos.length ? todos[todos.length -1].id + 1 : 0;
        todos.push(newTodo);
        newState = { ...state, todos };
        return newState;
    case a.getTodos:
        return state;
    case a.removeTodo:
        return { 
          ...state,
          todos: state.todos.filter(x => x.id !== action.payload.id)
        };
    case a.removeAll:
        return {
          ...state,
          todos: []
        }
    default:
      return state;
  }
}
