import { Routes, Route } from 'react-router-dom'
import Contacto from '../pages/contacto'
import Error404 from '../pages/Error404'
import Home from '../pages/home'
import Portafolio from '../pages/portafolio'

const RouteIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Portafolio' element={<Portafolio />} />
      <Route path='/Contacto' element={<Contacto />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RouteIndex
