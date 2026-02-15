import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/"
const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/"

export default function App() {
  const [actors, setActors] = useState ([]);
  useEffect(() => {axios.get(actorsEndpoint)
                        .then((res) => {setActors(res.data)})}, 
    []);

  const [actresses, setActresses] = useState ([]); 
  useEffect(() => {axios.get(actressesEndpoint)
                        .then((res) => {setActresses(res.data)})}, 
    []);

  return ( 
    <>
    <header>
      <h1>Actor List</h1>
    </header>
    <div className='container'>
      <div className='actors-list row row-cols-1 g-3'>
        {actors.map ((actor) => (
          <div key={actor.id} className='col border border-secondary rounded p-0'>
            <div className='actor-card d-flex'>
            <img src={actor.image} alt={actor.name} title={actor.name}/>
            <div className='actor-card-info text-start p-2'>
              <h2 className='h3 mb-3'>{actor.name}</h2>
              <p className='m-0'><strong>Year of birth:</strong> {actor.birth_year}</p>
              <p className='m-0'><strong>Nationality:</strong> {actor.nationality}</p>
              <p className='m-0'><strong>Awards:</strong> {actor.awards}</p>
              <p className='m-0'><strong>Famous Appearances: </strong> <i>{actor.known_for.join(", ")}</i></p>
              <p className='mt-3'>{actor.biography}</p>
            </div>
          </div>
            </div>
        ))}

        {actresses.map ((actress) => (
          <div key={actress.id} className='col border border-secondary rounded p-0'>
            <div className='actress-card d-flex'>
            <img src={actress.image} alt={actress.name} title={actress.name}/>
            <div className='actress-card-info text-start p-2'>
              <h2 className='h3 mb-3'>{actress.name}</h2>
              <p className='m-0'><strong>Year of birth:</strong> {actress.birth_year}</p>
              <p className='m-0'><strong>Nationality:</strong> {actress.nationality}</p>
              <p className='m-0'><strong>Awards:</strong> {actress.awards}</p>
              <p className='m-0'><strong>Famous Appearances: </strong> <i>{actress.known_for}</i></p>
              <p className='mt-3'>{actress.biography}</p>
            </div>
          </div>
            </div>
        ))}
      </div>
    </div>
    </>
  )

}

