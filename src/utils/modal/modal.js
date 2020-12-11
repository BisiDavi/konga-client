import React from 'react';
import { makeStyles,Modal,
    Backdrop,Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function TransitionsModal(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        className={classes.modal}
        open={props.handleOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.handleOpen}>{props.children}</Fade>
      </Modal>
    </div>
  );
}
