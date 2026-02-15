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
      <ul>
        {actors.map ((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  )

}

