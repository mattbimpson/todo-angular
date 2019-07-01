import { MyAction } from '../store/actions';
import * as a from './actions';
import { TodoState } from './initialState';

const initialState: TodoState = {
  todos: []
};

export function reducer(state = initialState, action: MyAction) {
  switch (action.type) {
    case a.addTodo:
        const todos = [ ...state.todos ];
        todos.push(action.payload.todo);
        const newState = { ...state, todos };
        return newState;
    case a.getTodos:
        return state;
    default:
      return state;
  }
}
