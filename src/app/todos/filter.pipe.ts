import { Pipe, PipeTransform } from '@angular/core';
import { filterOptions } from '../filter/filter.actions';
import {
  FILTER_COMPLETED,
  FILTER_PENDING,
} from '../shared/constants/app.constants';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: filterOptions): Todo[] {
    switch (filter) {
      case FILTER_COMPLETED:
        return todos.filter((todo) => todo.completed);
      case FILTER_PENDING:
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
}
