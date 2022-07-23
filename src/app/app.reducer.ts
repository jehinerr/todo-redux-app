import { ActionReducerMap } from '@ngrx/store';
import { filterOptions } from './filter/filter.actions';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: filterOptions;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
