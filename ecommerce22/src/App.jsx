import React, {useState} from 'react';
import Grid from './pages/Grid';
import Navbar from './pages/Navbar';
import Img from './components/Header'
import BarraSocial from './components/BarraSocial';

const App = () => {
  const [search, setSearch] = useState('');

  const  handleInput = (event) =>  {
    
    setSearch(event.target.value)
  };

  return (
    <>
      <Navbar handleInput={handleInput} search={search}/>
      <Img/>
      <BarraSocial />
      <Grid search={search}/>
    </>
  )
}
console.log('Hola');
export default App;