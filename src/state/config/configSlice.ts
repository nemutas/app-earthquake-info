import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum DisplayMode {
	LIGHT = 'light',
	DARK = 'dark'
}

type StateType = {
	displayMode: DisplayMode;
};

const initialState: StateType = {
	displayMode: DisplayMode.LIGHT
};

export const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		toggleDisplayMode: state => {
			state.displayMode =
				state.displayMode === DisplayMode.LIGHT ? DisplayMode.DARK : DisplayMode.LIGHT;
		}
	}
});

export const { toggleDisplayMode } = configSlice.actions;
export const selectDisplayMode = (state: RootState) => state.config.displayMode;

export default configSlice.reducer;
