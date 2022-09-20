import { useEffect, useState } from "react"
import './songlist.css'
import canciones from '@/assets/listaCanciones.json'


const SongList = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setList(canciones)
            setLoading(false)
        }, 2000)
    }, [])
    return(
        <div>
            {loading
            ? <h1>Cargando...</h1>
            : lists.map((song) => (
            <div className='row-son' key={song.id}> 
                <h4>{Song Titule}</h4>
                <p>{Artist}</p>
            </div>
            ))}
            
            
        </div>
    )
}
export default SongList
