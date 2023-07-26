import { createAction } from '@reduxjs/toolkit';

export const addToFavorites = createAction('ADD_TO_FAVORITES', (item) => {
  return {
    payload: {
      caption: item.caption,
      image: item.image,
    },
  };
});

export const removeFromFavorites = createAction('REMOVE_FROM_FAVORITES', (item) => {
  return {
    payload: {
      caption: item.caption,
    },
  };
});
