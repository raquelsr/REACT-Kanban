import { Board } from './components/Board';
import { board, taskDetail } from './routes/routes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TaskDetail } from './components/TaskDetail';
import { theme } from './styles/Theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

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
