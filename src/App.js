import './App.css';

import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

import { useSelector } from 'react-redux'


import SignInSide from './SignInSide'


function App() {


  const { isThemeLight } = useSelector(state => {

    return state.theme
  })


  const theme = createMuiTheme({
    palette: {
      type: isThemeLight ? 'light' : 'dark'
    }
  });

  return (
    <MuiThemeProvider theme={theme}>

      <div className="App">
        <header className="App-header">
          <SignInSide />
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
