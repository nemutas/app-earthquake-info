import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import configReducer from './config/configSlice';
import eqReducer from './eq/eqSlice';

// export const store = configureStore({
// 	reducer: {
// 		config: configReducer,
// 		earthquake: eqReducer
// 	}
// });

const reducers = combineReducers({
	config: configReducer,
	earthquake: eqReducer
});

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['config']
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
});

export const persister = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
