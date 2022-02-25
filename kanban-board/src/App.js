import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/Theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { board, taskDetail } from './routes/routes';
import { Board } from './components/Board';
import { TaskDetail } from './components/TaskDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<Board />} />
          <Route path={board()} element={<Board />} />
          <Route path={`${taskDetail()}/:id`} element={<TaskDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
