import { Action } from '@ngrx/store';
import { Todo } from '../todo';

export const addTodo = 'addTodo';

export class AddTodo implements Action {
    readonly type = addTodo;
    constructor(readonly payload: { todo: Todo }) { }
}
