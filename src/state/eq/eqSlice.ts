import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import dataTemplateJson from './dataTemplate.json';

const apiUrl = 'https://www.jma.go.jp/bosai/quake/data/list.json';
const mapUrl =
	'https://www.jma.go.jp/bosai/map.html#elem=int&contents=earthquake_map&area_type=japan';

export type EQType = typeof dataTemplateJson;

type StateType = {
	selectedId: string;
	earthquakeDatas: EQType[];
};

const initialState: StateType = {
	selectedId: '',
	earthquakeDatas: []
};

export const fetchEQData = createAsyncThunk('eq/get', async () => {
	const response = await axios.get<EQType[]>(apiUrl);
	return response.data.filter(d => !!d.anm && !!d.maxi);
});

export const eqSlice = createSlice({
	name: 'eq',
	initialState,
	reducers: {
		setSelectedId: (state, action: PayloadAction<string>) => {
			state.selectedId = action.payload;
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchEQData.fulfilled, (state, action) => {
			return {
				...state,
				earthquakeDatas: action.payload
			};
		});
	}
});

export const { setSelectedId } = eqSlice.actions;

export const selectEQs = (state: RootState) => state.earthquake.earthquakeDatas;

export const selectSelectedMapUrl = (state: RootState) =>
	state.earthquake.selectedId ? `${mapUrl}&id=${state.earthquake.selectedId}` : '';

export default eqSlice.reducer;
