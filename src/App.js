import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/movielist/MovieList";
import { moviedata } from "./moviedata";
import Filter from "./Components/filter/Filter";
import Addmovie from "./Components/addmovie/Addmovie";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Description from "./Components/Description/Description";


function App() {
  const [movielist, setMovielist] = useState(moviedata)
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const filterTitle = (event) => {
    setTitle(event.target.value);
  };

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const AddFunc = (newmovie) => {
    setMovielist([...movielist, newmovie]);
  };

  return (
    <div className="App container">
     <Router>
     
     <Filter
        name={title}
        filterTitle={filterTitle}
        filterRate={ratingChanged}
      />

      <Route path="/" exact render ={()=> <MovieList
        movielist={movielist.filter(
          (elem) =>
            elem.title
              .trim()
              .toLowerCase()
              .includes(title.trim().toLowerCase()) && elem.rating >= rate
        )}
        />}
      />
      <Addmovie AddFunc={AddFunc} />
      <Route  path="/Description/:id" render={(props)=> <Description {...props} movieList={movielist} exact/>}/>
      <Route
    path="/"
    
    />
      </Router>
    </div>
  );
}

export default App;
