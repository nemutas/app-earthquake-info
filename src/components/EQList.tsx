import React, { useState } from 'react';
import {
	Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { selectEQs, setSelectedId } from '../state/eq/eqSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';

const useStyles = makeStyles({
	root: {
		maxHeight: 'calc(100vh - 110px)'
	},
	container: {
		maxHeight: 'calc(100vh - 110px)'
	},
	tabel: {
		minWidth: '80px'
	}
});

export const EQList: React.FC = () => {
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const datas = useAppSelector(selectEQs);
	const [selectedRowId, setSelectedRowId] = useState('');

	const onClickRow = (event: React.MouseEvent<HTMLTableRowElement>, id: string) => {
		dispatch(setSelectedId(id));
		setSelectedRowId(id);
	};

	return (
		<Paper elevation={3} className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.tabel} align="center">
								震源
							</TableCell>
							<TableCell className={classes.tabel} align="center">
								発生時刻
							</TableCell>
							<TableCell className={classes.tabel} align="center">
								震度
							</TableCell>
							<TableCell className={classes.tabel} align="center">
								マグニチュード
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{datas.map((data, i) => (
							<TableRow
								key={i}
								hover
								role="checkbox"
								tabIndex={-1}
								selected={selectedRowId === data.eid}
								onClick={e => onClickRow(e, data.eid)}>
								<TableCell align="center">{data.anm}</TableCell>
								<TableCell align="center">{new Date(data.at).toLocaleString()}</TableCell>
								<TableCell align="center">{data.maxi}</TableCell>
								<TableCell align="center">{data.mag}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
