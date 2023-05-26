import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/App';
import OnePost from './pages/Post/PostDetails';
import { ThemeProvider } from 'styled-components';
import { LigthTheme, DarkTheme } from './theme';
import { GlobalStyle } from './GlobalStyles';
import {useLocalStorage} from 'react-use'

export default function App() {
  const [theme, setTheme] = useLocalStorage<String>("theme", "light")
  
  function toggle() : String{
    if(theme == "light"){
      setTheme("black")
      return "black"
    } 
    setTheme("light")
    return "light"
  }

  return (
    <ThemeProvider theme={theme == "light" ? LigthTheme : DarkTheme}>
      <GlobalStyle/>
      <Router>
          <Routes>
            <Route path="/" element={<Home toggle={toggle} theme={theme} />} />
            <Route path="/post/:id" element={<OnePost toggle={toggle} theme={theme} />} />
          </Routes>
      </Router>
      </ThemeProvider>
  );
}