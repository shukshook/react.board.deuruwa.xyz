import List from './pages/List'
import Read from './pages/Read'
import Write from './pages/Write'
import Update from './pages/Update'

import './Main.css'
import { Route, Routes } from 'react-router-dom'

function Main () {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<List />}/>
        <Route path='/read/:no' element={<Read />} />
        <Route path='/write' element={<Write />} />        
        <Route path='/update' element={<Update />} />
      </Routes>
    </div>
  )
}

export default Main