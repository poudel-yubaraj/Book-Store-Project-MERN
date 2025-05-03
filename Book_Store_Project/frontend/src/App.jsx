import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import EditBook from '../pages/EditBook'
import DeleteBook from '../pages/DeleteBook'
import CreateBook from  '../pages/CreateBook'
import HomePage from '../pages/HomePage'
import ShowBook from '../pages/ShowBook'
const App = () => {
  return (
          <BrowserRouter>
            <Routes>
                <Route path='/'   element={<HomePage/>}/>
                <Route path='/books/create'   element={<CreateBook/>}/>
                <Route path='/books/delete/:id'   element={<DeleteBook/>}/>
                <Route path='/books/edit/:id'   element={<EditBook/>}/>
                <Route path='/books/details/:id'   element={<ShowBook/>}/>
            </Routes>
          </BrowserRouter>
  )
}

export default App

