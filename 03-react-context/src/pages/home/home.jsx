import '/home.css'
import PropTypes from 'prop-types'

const home = props => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>lado izquierdo</h2>
      </div>
      <div className='derecho'>
        <h2>lado derecho</h2>
      </div>
    </div>
  )
}

home.propTypes = {}

export default home
