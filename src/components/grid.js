import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function grid() {
  return (
    <Grid container spacing={5}>
      <Grid item>
        <Paper style={{ width: '50px', height: '60px' }} elevation={3}></Paper>
      </Grid>
      <Grid item>
        <Paper style={{ width: '50px', height: '60px' }} elevation={3}></Paper>
      </Grid>
      <Grid item>
        <Paper style={{ width: '50px', height: '60px' }} elevation={3}></Paper>
      </Grid>
    </Grid>
  );
}
