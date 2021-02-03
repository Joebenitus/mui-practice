import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import BuildIcon from '@material-ui/icons/Build';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
