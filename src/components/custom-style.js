import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//hooks for custom style
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 38,
    padding: '0 20px',
    marginRight: '10px',
    marginBottom: '10px',
  },
});

// components here put the custom style
export default function CustomStyle() {
  const classes = useStyles();
  return <Button className={classes.root}>custom style</Button>;
}
