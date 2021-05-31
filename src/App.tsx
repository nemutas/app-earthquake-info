import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css, cx } from '@emotion/css';
import {
	createMuiTheme, createStyles, Grid, makeStyles, Theme, ThemeProvider
} from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import { EQList } from './components/EQList';
import { EQMap } from './components/EQMap';
import { NavBar } from './components/NavBar';
import { DisplayMode, selectDisplayMode } from './state/config/configSlice';
import { fetchEQData } from './state/eq/eqSlice';

export const gridBreakPoint = 'sm';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		containerGrid: {
			width: '100%',
			padding: '15px',
			flexDirection: 'row',
			[theme.breakpoints.down(gridBreakPoint)]: {
				flexDirection: 'column'
			}
		},
		listItem: {
			maxWidth: '600px',
			order: 1,
			[theme.breakpoints.down(gridBreakPoint)]: {
				order: 2
			}
		},
		mapItem: {
			flex: 1,
			order: 2,
			minHeight: 'calc(100vh - 115px)',
			[theme.breakpoints.down(gridBreakPoint)]: {
				order: 1,
				minHeight: '400px'
			}
		}
	})
);

export const App: React.FC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEQData());
	}, [dispatch]);

	const displayMode = useSelector(selectDisplayMode);
	const isDark = displayMode === DisplayMode.DARK;

	const theme = createMuiTheme({
		palette: {
			type: displayMode,
			primary: {
				main: isDark ? grey['800'] : blue['300']
			}
		}
	});

	const sContainerBgColor = css`
		background-color: ${isDark ? 'rgb(30, 30, 30)' : 'white'};
	`;

	return (
		<ThemeProvider theme={theme}>
			<div className={cx(sContainer, sContainerBgColor)}>
				<NavBar />
				<Grid container spacing={2} className={classes.containerGrid}>
					<Grid item className={classes.listItem}>
						<EQList />
					</Grid>
					<Grid item className={classes.mapItem}>
						<EQMap />
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	);
};

const sContainer = css`
	min-height: 100vh;
`;
