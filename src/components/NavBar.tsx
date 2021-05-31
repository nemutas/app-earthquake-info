import React, { useState } from 'react';
import {
	AppBar, Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Link,
	makeStyles, Theme, Toolbar, Typography
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import InfoIcon from '@material-ui/icons/Info';
import { toggleDisplayMode } from '../state/config/configSlice';
import { useAppDispatch } from '../state/hooks';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: { flexGrow: 1 },
		link: { color: blue['500'] }
	})
);

export const NavBar: React.FC = () => {
	const classes = useStyles();
	const dispatch = useAppDispatch();

	const onClickDisplayMode = () => {
		dispatch(toggleDisplayMode());
	};

	const [open, setOpen] = useState(false);

	const onClickInfomation = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					地震情報｜Earthquake Infomation
				</Typography>
				<div>
					<IconButton onClick={onClickDisplayMode}>
						<Brightness4Icon />
					</IconButton>
					<IconButton onClick={onClickInfomation}>
						<InfoIcon />
					</IconButton>
				</div>
			</Toolbar>
			<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogTitle id="customized-dialog-title">ABOUT</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						このサイトは、
						<Link
							href="https://www.jma.go.jp/jma/index.html"
							className={classes.link}
							target="_blank">
							気象庁
						</Link>
						から提供されている地震情報のAPIをもとに作られています。
					</Typography>
					<Typography gutterBottom>過去1ヵ月間の地震情報を表示しています。</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</AppBar>
	);
};
