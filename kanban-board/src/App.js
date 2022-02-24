import './App.css';
import { Board } from './components/Board';
import { theme } from './styles/Theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Board />
      </ThemeProvider>
    </>
  );
}

export default App;
