import { configureStore, Store } from '@reduxjs/toolkit';
import taskSlice from '../slices/taskSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store: Store = configureStore({
	reducer: {
		task: taskSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
