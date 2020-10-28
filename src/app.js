import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup, Typography } from '@material-ui/core';
import Checkbox from './components/checkbox';
import TextField from '@material-ui/core/TextField';
import CustomStyle from './components/custom-style';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import Grid from './components/grid';
import Navbar from './components/navbar';

//create and modify theme
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
    primary: {
      main: green[500],
    },
  },

  // theme for typography (customize subtitle1 property)
  typography: {
    subtitle1: {
      fontSize: '30px',
      fontWeight: 'bold',
    },
  },
});

export default function App() {
  return (
    //for theme
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        {/* if yo want to add two primary color you can also use two theme provider */}
        <Navbar />
        <TextField variant="outlined" label="name" />
        <Typography variant="subtitle1" component="div" color="error">
          this is typography
        </Typography>
        <Grid />
        <Checkbox></Checkbox>
        <CustomStyle />
        <ButtonGroup variant="contained">
          <Button startIcon={<SaveIcon />} color="primary">
            save
          </Button>
          <Button color="secondary" startIcon={<DeleteIcon />}>
            delete
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </Container>
  );
}
