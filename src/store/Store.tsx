import { configureStore } from "@reduxjs/toolkit";
import hoverReducer from "./../slice/Slice";
export const store = configureStore({
  reducer: { hover: hoverReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
