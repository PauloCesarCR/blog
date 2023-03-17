import Main from './pages/Main';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Post from './pages/Post';
import { GlobalProvider } from './contexts/GlobalContext';

function MainRoutes() {
  return (
    <div>
    <GlobalProvider>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='*' element={<Main />} />
      </Routes>
    </GlobalProvider>
    </div>
  )

}

export default MainRoutes;