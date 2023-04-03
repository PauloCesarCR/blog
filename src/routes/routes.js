import Main from '../pages/Main/index';
import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Post from '../pages/Post/index';
import { GlobalProvider } from '../contexts/GlobalContext';
import React from 'react'

function MainRoutes() {
  return (
    <GlobalProvider>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='*' element={<Main />} />
      </Routes>
    </GlobalProvider>

  )
}


export default MainRoutes;