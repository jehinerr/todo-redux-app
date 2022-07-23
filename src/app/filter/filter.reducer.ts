import { createReducer, on } from "@ngrx/store";
import * as actions from "./filter.actions";

const initialState: actions.filterOptions = 'All' as actions.filterOptions;

export const filterReducer = createReducer(
	initialState,
	on(actions.setFilter, (state, { filter }) => filter)
);
