import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState, useContext, useEffect, SyntheticEvent } from 'react';

import { Store } from '../store';
import { clearError } from '../store/actions';

const ErrorNotification = () => {
  const { state, dispatch } = useContext(Store);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.error) {
      setOpen(true);
    }
  }, [state.error]);

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    clearError(dispatch);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={6000}
    >
      <Alert elevation={6} variant="filled" onClose={handleClose} severity="error">
        {state.error && state.error.message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorNotification;
