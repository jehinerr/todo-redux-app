import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterOptions } from 'src/app/filter/filter.actions';
import { FILTER_ALL } from 'src/app/shared/constants/app.constants';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  actualFilter: filterOptions = FILTER_ALL;

  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.actualFilter = state.filter;
    });
  }

  ngOnInit(): void {}
}
