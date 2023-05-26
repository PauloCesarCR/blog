import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/App';
import OnePost from './pages/Post/PostDetails';
import { ThemeProvider } from 'styled-components';
import { LigthTheme, DarkTheme } from './theme';
import { GlobalStyle } from './GlobalStyles';
import useGlobal from './hooks/useGlobal';
export default function App() {
  const {themeGlobal}: any = useGlobal()

  return (
    <ThemeProvider theme={themeGlobal == "light" ? LigthTheme : DarkTheme}>
      <GlobalStyle/>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<OnePost />} />
          </Routes>
      </Router>
      </ThemeProvider>
  );
}