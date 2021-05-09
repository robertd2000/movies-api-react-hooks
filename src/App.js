import React, { useEffect, useState } from 'react'
import './App.css';
import { ServiceAPI } from './service/service';
import Test from './test';

function App() {

  const [state, setState] = useState([])
  const [searchValue, setSearchValue] = useState('man')
  const [page, setPage] = useState(1)
  const [totalRes, setTotalRes] = useState(0)

  useEffect(() => {
    ServiceAPI.getMovies()
      .then((data) => setState(data))
    ServiceAPI.getTotalRes(searchValue)
      .then(data => {
        return setTotalRes(data)
      })
  }, [])

  const searchValueHandler = e => {
    setSearchValue(e.target.value)
  }

  const getMovie = () => {
    ServiceAPI.search(searchValue).then((data) => setState(data))
    ServiceAPI.getTotalRes(searchValue)
      .then(data => {
        console.log(data);
        return setTotalRes(data)
      })
    setPage(1)
  }

  const update = id => setPage(id)

  const changeCurrentPage = (id) => {
    update(id)
    console.log(page);
    ServiceAPI.showAll(searchValue, id).then((data) => setState(data))
  }

  let pages = []

  for (let i = 1; i <= totalRes; i++) {
    pages.push(i)
  }

  let pagesItem = pages.map(p => <span className={page === p ? 'active' : ''} onClick={() => changeCurrentPage(p)} >{p + ' '}</span>)
 
  return (
    <div className="App">
      <Test />
      <div>
        <input value={searchValue} onChange={searchValueHandler} />
        <button onClick={getMovie} >Search</button>
      </div>
      {pages.length > 20 ? pagesItem = [...pagesItem.slice(0, 20), '...', pagesItem[pagesItem.length - 1]] : pagesItem}
      <div>
      </div>
      { state ? state.map(movie => {
        return <div key={movie.imdbID}>
          <div>
            {movie.Poster &&
              <img src={movie.Poster} />
            }
            {
              !movie.Poster && <img src='http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg' />
            }
          </div>
          <div>
            <div>{movie.Title}</div>
            <div>{movie.Type}</div>
            <div>{movie.Year}</div>
          </div>
        </div>
      }) : ''
      }
    </div>
  );
}

export default App;
