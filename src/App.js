import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, lime } from '@material-ui/core/colors';
import 'fontsource-roboto';

import BuildIcon from '@material-ui/icons/Build';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
    marginBottom: '10px'
  }
})

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 18,
    }
  },
  palette: {
    primary: {
      main: lime[400],
    },
    secondary: {
      main: deepPurple[400],
    }
  }
})

function CustomButton() {
  const classes = useStyles();
  return <Button className={classes.root}>I am a custom button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <FormControlLabel
        control={<Checkbox
          checked={checked}
          icon={<CloseIcon/>}
          checkedIcon={<CheckIcon/>}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            'aria-label': 'joe\'s checkbox'
          }}
      />}
      label="Check me if you are a human"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h3">
              Welcome to my MUI playground
            </Typography>
            <Typography variant="h4" component="div">
              Don't mind me. Just learning Material UI
            </Typography>
            <CustomButton/>
            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6} >
                <Paper style={{height: '75px', width: '100%'}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height: '75px', width: '100%'}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height: '75px', width: '100%'}}/>
              </Grid>
            </Grid>
            <TextField
              variant="outlined"
              type="email"
              label="What is your email?"
              placeholder="johndoe@fake.com"
            />
            <CheckboxExample/>
            <ButtonGroup variant="contained" color="primary">
              <Button 
                endIcon={<BuildIcon/>}
                onClick={() => alert('You built a thing.')} 
                size="large">
                Build
              </Button>
              <Button 
              endIcon={<DeleteIcon/>}
              onClick={() => alert('You deleted a thing. How dare you.')} 
              size="large"
              color="secondary">
                Delete
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
