import React from 'react';
import Iframe from 'react-iframe';
import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { gridBreakPoint } from '../App';
import { selectSelectedMapUrl } from '../state/eq/eqSlice';
import { useAppSelector } from '../state/hooks';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			padding: '5px',
			width: '100%',
			height: 'calc(100vh - 115px)',
			[theme.breakpoints.down(gridBreakPoint)]: {
				height: '400px'
			}
		},
		frame: {
			width: '100%'
		},
		altText: {
			margin: 'auto'
		}
	})
);

export const EQMap: React.FC = () => {
	const classes = useStyles();
	const mapUrl = useAppSelector(selectSelectedMapUrl);
	// console.log('mapUrl', mapUrl);

	return (
		<Paper elevation={3} className={classes.root}>
			{!!mapUrl ? (
				<Iframe key={mapUrl} url={mapUrl} className={classes.frame} frameBorder={0} />
			) : (
				<Typography gutterBottom className={classes.altText}>
					リストを選択すると、Mapが表示されます。
				</Typography>
			)}
		</Paper>
	);
};
