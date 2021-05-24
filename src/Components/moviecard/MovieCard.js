import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./MovieCard.css";
const MovieCard = ({elem}) => {

  return (
    <div className="col-sm-4 col-lg-4">
      <Card
        style={{
          backgroundImage: `url(${elem.posterURL})`,
          backgroundSize: "20rem 25rem",
        }}
      >
        <Card.Body>
          <Card.Title className="titleCard">{elem.title}</Card.Title>
</Card.Body >
<div className="footer">
   <Link to={`/Description/${elem.id}`}><Button  className="btn" variant="warning">Description</Button> </Link>
    <ReactStars
          count={5}
          size={20}
          edit={false}
          value={elem.rating}
          isHalf={true}
          color="white"
          activeColor="gold"/>
    </div>
      </Card>
    </div>
  );
};

export default MovieCard;
