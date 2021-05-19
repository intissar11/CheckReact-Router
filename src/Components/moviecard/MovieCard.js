import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";
const MovieCard = ({ elem }) => {
  return (
    <div className="col-sm-4 col-lg-4">
      <Card className="card">
        <Card.Img className="imgCard" variant="top" src={elem.posterURL} />
        <Card.Body>
          <Card.Title className="titleCard">{elem.title}</Card.Title>
          <Card.Text className="text">
            {elem.description}
            <ReactStars
              count={5}
              size={20}
              edit={false}
              value={elem.rating}
              isHalf={true}
              activeColor="gold"
            />
          </Card.Text>
          <div>
            <Button style={{ marginLet: "200px" }} variant="info">
              Trailer
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
