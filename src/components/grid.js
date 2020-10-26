import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function grid() {
  return (
    <Grid container spacing={5} justify="center">
      <Grid item xs={3} sm={12}>
        <Paper style={{ width: '100', height: '60px' }} elevation={3}></Paper>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Paper style={{ width: '45', height: '60px' }} elevation={3}></Paper>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Paper style={{ width: '45', height: '60px' }} elevation={3}></Paper>
      </Grid>
    </Grid>
  );
}
