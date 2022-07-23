import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [new Todo('Test 1'), new Todo('Test 2')];

export const todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),

  on(actions.toggle, (state, { id }) => {
    return state.map((todo: Todo) => {
      if (todo.$id == id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }),

  on(actions.edit, (state, { id, text }) => {
    return state.map((todo: Todo) => {
      if (todo.$id == id) {
        return { ...todo, text: text };
      } else {
        return todo;
      }
    });
  }),

  on(actions.deleteTodo, (state, { id }) =>
    state.filter((todo) => todo.$id !== id)
  ),

  on(actions.toggleAll, (state, { completed }) => {
    return state.map((todo: Todo) => {
      return {
        ...todo,
        completed: completed,
      };
    });
  }),

  on(actions.clearCompleted, (state) => {
    return state.filter((todo) => !todo.completed);
  })
);
