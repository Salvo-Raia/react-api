import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/"

export default function App() {
  const [actors, setActors] = useState ([]);
  useEffect(() => {axios.get(actorsEndpoint)
                        .then((res) => {setActors(res.data)})}, 
    []);
  
  return ( 
    <div>
      <div className='row row-cols-2 g-3'>

        {actors.map ((actor) => (
          <div key={actor.id} className='col border border-secondary rounded p-0'>
            <div className='actor-card d-flex'>
            <img src={actor.image} alt=""/>
            <div className='actor-card-info text-start p-2'>
              <h3 className='text-center mb-3'>{actor.name}</h3>
              <p className='m-0'><strong>Year of birth:</strong> {actor.birth_year}</p>
              <p className='m-0'><strong>Nationality:</strong> {actor.nationality}</p>
              <p className='m-0'>Awards: {actor.awards}</p>
              <p className='m-0'>{actor.biography}</p>
            </div>
          </div>
            </div>
        ))}
        </div>
    </div>
  )

}

