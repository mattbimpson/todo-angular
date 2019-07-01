import { Todo } from '../todo';

export interface MyAction {
    type: string
    payload: any
}

export const addTodo = 'addTodo';
export const getTodos = 'getTodos';
export const removeTodo = 'removeTodo';
export const removeAll = 'removeAll';

export class AddTodo implements MyAction {
    readonly type = addTodo;
    constructor(readonly payload: { todo: Todo }) { }
}

export class GetTodos implements MyAction {
    readonly type = getTodos;
    constructor(readonly payload: {} = null) {}
}

export class RemoveTodo implements MyAction {
    readonly type = removeTodo;
    constructor(readonly payload: { id: String}) {}
}

export class RemoveAll implements MyAction {
    readonly type = removeAll;
    constructor(readonly payload: {} = null) {}
}
