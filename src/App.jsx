import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/"
const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/"

export default function App() {
  const [allActors, setAllActors] = useState ([]);
  
  useEffect(() => {
  Promise.all([
    axios.get(actorsEndpoint),
    axios.get(actressesEndpoint)
  ])
  .then(([actorsRes, actressesRes]) => {
    const actorsCombined = [
      ...actorsRes.data,
      ...actressesRes.data
    ];
    setAllActors(actorsCombined); 
  })
  .catch(err => console.error(err));
}, []);

  return ( 
    <>
    <header>
      <h1>Hollywood Most Loved</h1>
    </header>
    <div className='container'>
      <div className='actors-list row row-cols-2 g-3 my-2'>

        {allActors.map ((actor, index) => (
          <div key={index} className='col border border-secondary rounded p-0'>
            <div className='actor-card d-flex'>
            <img src={actor.image} alt={actor.name} title={actor.name}   onError={(e) => {
                 e.target.src = "https://placehold.co/150x220?text=No+Image&bg=e9ecef&fg=6c757d"}}/>
            <div className='actor-card-info text-start p-2'>
              <h2 className='h3 mb-3'>{actor.name}</h2>
              <p className='m-0'><strong>Year of birth:</strong> {actor.birth_year}</p>
              <p className='m-0'><strong>Nationality:</strong> {actor.nationality}</p>
              <p className='m-0'><strong>Awards:</strong> {actor.awards}</p>
              <p className='m-0'><strong>Famous Appearances: </strong> <i>{actor.known_for}</i></p>
              <p className='mt-3'>{actor.biography}</p>
            </div>
          </div>
            </div>
        ))}
      </div>
    </div>
    </>
  )

}

