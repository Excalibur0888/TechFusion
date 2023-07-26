import { createReducer } from '@reduxjs/toolkit';
import { addToFavorites, removeFromFavorites } from './actions';

const favoritesReducer = createReducer([], (builder) => {
	builder
		.addCase(addToFavorites, (state, action) => {
			const { caption, image } = action.payload;
			const newItem = { caption, image };
			const isItemExists = state.some((item) => item.caption === caption);
			if (!isItemExists) {
				state.push(newItem);
			}
		})
	builder.addCase(removeFromFavorites, (state, action) => {
		const { caption } = action.payload;
		return state.filter((item) => item.caption !== caption);
	});
});

export default favoritesReducer;
