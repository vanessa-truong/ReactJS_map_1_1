import './App.css';
import Movies from './components/Movies';
import movies from './data/movies';

function App() {
  return (
    <div className="App">
      <section className='movie_grid'>
        {movies.map((elt, i) => 
        <Movies 
        title={elt.title}
        year={elt.year}
        director={elt.director}
        duartion={elt.duration}
        genre={elt.genre}
        rate={elt.rate}
        />
        )}
      </section>
    </div>
  );
}

export default App;
