import './App.css';
import MovieCard from './Components/MovieCard';
import movieData from './utils/data.json';

function App() {
  return (
    <div className="app-wrapper">
      <h1>Movie Cards</h1>
      {movieData.map((data)=>
      <MovieCard
          name = {data.name}
          imgLink = {data.imgLink}
          year = {data.year}
          director = {data.director}
          duration = {data.duration}
          genres = {data.genres.join(", ")}
          description = {data.description}
          bgImg = {data.bgImg}
      />)}
      <div className="footer">Made with ❤️ by Rahul Meena</div>
    </div>
  );
}

export default App;
