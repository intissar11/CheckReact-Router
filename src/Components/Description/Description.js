import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Description.css"
const Description = ({movieList,match}) => {
    let movie=movieList.find(el=>el.id==match.params.id);
    return (
        <div>
    { /* <Card  style={{ width: "22rem" }}>
        <Card.Img  variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
      </Card>
      <div>
      <h3>Trailer</h3>
      <p>{movie.trailer}</p>
    </div>*/}
    <Card
        style={{
          backgroundImage: `url(${movie.posterURL})`,
          backgroundSize: "20rem 25rem"
        }}
      >
        <Card.Body>
          <Card.Title className="titleCard">{movie.title}</Card.Title>
         
         <div className="trailer">
              {movie.trailer}</div> 
</Card.Body >
      <Link to="/">
        <Button variant="info">Go Back</Button>
      </Link>
      </Card>
      <div className="description ">{movie.description}</div>  

        </div>
    )
}

export default Description
