import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Description = ({movieList,match}) => {
    let movie=movieList.find(el=>el.id==match.params.id);
    return (
        <div>
      <Card  style={{ width: "22rem" }}>
        <Card.Img  variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
      </Card>
      <div>
      <h3>Trailer</h3>
      <p>{movie.trailer}</p>
    </div>
    
      <Link to="/">
        <Button variant="primary">Go Back</Button>
      </Link>
        </div>
    )
}

export default Description
