import { Action } from '@ngrx/store';
import { Todo } from '../todo';

export const addTodo = 'addTodo';
export const getTodos = 'getTodos';

export class AddTodo implements MyAction {
    readonly type = addTodo;
    constructor(readonly payload: { todo: Todo }) { }
}

export class GetTodos implements MyAction {
    readonly type = getTodos;
    constructor(readonly payload: {} = null) {}
}

export interface MyAction {
    type: string
    payload: any
}