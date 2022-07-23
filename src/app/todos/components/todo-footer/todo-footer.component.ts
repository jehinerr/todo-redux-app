import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from 'src/app/filter/filter.actions';
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_PENDING,
} from 'src/app/shared/constants/app.constants';
import * as todoActions from '../../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  actualFilter: filterActions.filterOptions = FILTER_ALL;
  filters: filterActions.filterOptions[] = [
    FILTER_ALL,
    FILTER_COMPLETED,
    FILTER_PENDING,
  ];

  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state: AppState) => {
      this.actualFilter = state.filter;
      this.pending = state.todos.filter(
        (todo) => todo.completed !== true
      ).length;
    });
  }

  changeFilter(filter: filterActions.filterOptions) {
    this.store.dispatch(filterActions.setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(todoActions.clearCompleted());
  }
}
