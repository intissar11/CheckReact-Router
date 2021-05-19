import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/movielist/MovieList";
import { moviedata } from "./moviedata";
import Filter from "./Components/filter/Filter";
import Addmovie from "./Components/addmovie/Addmovie";
function App() {
  const [favmovie, setFavmovie] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const filterTitle = (event) => {
    setTitle(event.target.value);
  };

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const AddFunc = (newmovie) => {
    setFavmovie([...favmovie, newmovie]);
  };

  return (
    <div className="App container">
      <Filter
        name={title}
        filterTitle={filterTitle}
        filterRate={ratingChanged}
      />
      <MovieList
        tab={favmovie.filter(
          (elem) =>
            elem.title
              .trim()
              .toLowerCase()
              .includes(title.trim().toLowerCase()) && elem.rating >= rate
        )}
      />
      <Addmovie AddFunc={AddFunc} />
    </div>
  );
}

export default App;
