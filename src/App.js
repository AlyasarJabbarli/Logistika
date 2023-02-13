import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBtn from './components/AddBtn';
import Header from './components/Header';
import './css/style.css';
import AvailableBranchPage from './pages/AvailableBranchPage';
import BranchPage from './pages/BranchPage';
import CarsPage from './pages/CarsPage';
import CarsEdit from './pages/edit/CarsEdit';
import MainPage from './pages/MainPage';
import WorkerPage from './pages/WorkerPage';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <AddBtn />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cars' element={<CarsPage />} />
          <Route path='/workers' element={<WorkerPage />} />
          <Route path='/branch' element={<BranchPage />} />
          <Route path='/available-branch' element={<AvailableBranchPage />} />


          <Route path='/cars/:id' element={<CarsEdit />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App