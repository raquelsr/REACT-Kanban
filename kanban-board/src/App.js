import './App.css';
import { Board } from './components/Board';
import { theme } from './styles/Theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TaskDetail } from './components/TaskDetail';
import { board, taskDetail } from './conf/routes';
import { Switch } from '@mui/material';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route exact path="/" element={<Board />} />
              <Route path={board()} element={<Board />} />
              <Route path={`${taskDetail()}/:id`} element={<TaskDetail />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
