import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";
const MovieCard = ({ elem }) => {
  return (
    <div className="col-sm-4 col-lg-4">
      <Card
        className="container"
        style={{
          backgroundImage: `url(${elem.posterURL})`,
          backgroundSize: "20rem 25rem",
        }}
      >
        <Card.Body>
          <Card.Title className="titleCard">{elem.title}</Card.Title>

          <Card.Text className="text text-content">
            {elem.description}
          </Card.Text>
        </Card.Body>
        <ReactStars
          count={5}
          size={20}
          edit={false}
          value={elem.rating}
          isHalf={true}
          color="white"
          activeColor="gold"
        />
      </Card>
    </div>
  );
};

export default MovieCard;
