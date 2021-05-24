import React from "react";
import {Form, FormControl, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./Filter.css";
const Filter = ({ name, filterTitle, filterRate }) => {
  return (
    <Navbar className="nav" bg="dark" variant="dark">
      <Navbar.Brand className="titlenav" style={{ color: "teal" }}>
        MovieApp
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>

      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={filterTitle}
            value={name}
          />
        </Form>
        <ReactStars
          count={5}
          onChange={filterRate}
          isHalf={true}
          size={24}
          activeColor="gold"
        />
      </div>
    </Navbar>
  );
};

export default Filter;
