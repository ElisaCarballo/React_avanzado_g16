import { Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return (
    <>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to='/Cajero'>Cajero</Link>
        </li>
        <li>
          <Link to='/Pinterest'>Pinterest</Link>
        </li>
        <li>
          <Link to='/Pokedex'>Pokedex</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}
export default Portafolio