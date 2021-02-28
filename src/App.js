import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import { ServiceAPI } from './service/service';

function App() {

  const [state, setState] = useState([])
  const [searchValue, setSearchValue] = useState('man')
  const [page, setPage] = useState(1)

  useEffect(() => {
    ServiceAPI.getMovies()
      .then((data) => setState(data))

  }, [])

  const searchValueHandler = e => {
    setSearchValue(e.target.value)
  }

  const getMovie = () => {
    ServiceAPI.search(searchValue).then((data) => setState(data))
    setPage(1)
  }

  const showAll = () => {
    setPage(page + 1)
    console.log(page);
    ServiceAPI.showAll(searchValue, page).then((data) => setState(data))
  }

  return (
    <div className="App">
      <div>
        <input value={searchValue} onChange={searchValueHandler} />
        <button onClick={getMovie} >Search</button>
      </div>
      { state ? state.map(movie => {
        return <div key={movie.imdbID}>
          <div>
            <img src={movie.Poster} />
          </div>
          <div>
            <div>{movie.Title}</div>
            <div>{movie.Type}</div>
            <div>{movie.Year}</div>
          </div>
        </div>
      }) : ''
      }
      <div>
        <button onClick={showAll} >NextPage</button>
      </div>
    </div>
  );
}

export default App;
