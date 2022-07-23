import { createAction, props } from '@ngrx/store';
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_PENDING,
} from '../shared/constants/app.constants';

export type filterOptions =
  | typeof FILTER_ALL
  | typeof FILTER_COMPLETED
  | typeof FILTER_PENDING;

export const setFilter = createAction(
  '[TODO] Set Filter',
  props<{ filter: filterOptions }>()
);
