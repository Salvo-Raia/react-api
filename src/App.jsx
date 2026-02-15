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
    const actorsCombined = [...actorsRes.data, ...actressesRes.data];
    actorsCombined.sort((a, b) => a.name.localeCompare(b.name)); 

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
      <div className='actors-list row row-cols-1 g-3 my-2'>

        {allActors.map ((actor, index) => (
          <div key={index} className='col border border-secondary rounded p-0'>
            <div className='actor-card d-flex'>
            <img src={actor.image} alt={actor.name} title={actor.name} onError={(e) => {
                 e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"}}/>
            <div className='actor-card-info text-start p-2'>
              <h2 className='h3 mb-3'>{actor.name}</h2>
              <p className='m-0'><strong>Year of birth:</strong> {actor.birth_year}</p>
              <p className='m-0'><strong>Nationality:</strong> {actor.nationality}</p>
              <p className='m-0'><strong>Awards:</strong> {Array.isArray(actor.awards) ? actor.awards.join(", ") : actor.awards}</p>
              <p className='m-0'><strong>Famous Appearances: </strong> <i>{(actor.known_for)? actor.known_for.join(", ") : actor.most_famous_movies.join(", ")}</i></p>
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

