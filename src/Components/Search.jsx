import React from 'react'
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  return (
    // <div>
    //     <Form className="d-flex mt-3">
    //       <FormControl type="search" placeholder="Search movies..." className="mr-sm-2 outline-dark" />
    //       <Button variant="outline-dark" type="submit">Search</Button>
    //     </Form>
    // </div>
    <>
    <h3 className="mt-3">All Movies/Series</h3> 
    <Row>
        <Col md={5}>
            <Form>
                <Form.Group controlId="search">
                    <Form.Control type="text" placeholder="Search..." />
                </Form.Group>
            </Form>
        </Col>
        <Col md={5}>
            <Form>
                <Form.Group controlId="category">
                    <Form.Control as="select">
                                <option>All</option>
                                <option>Action</option>
                                <option>Drama</option>
                                <option>Comedy</option>
                                <option>Adventure</option>
                                <option>Horror</option>
                                <option>Mystery</option>
                                <option>Science Fiction</option>
                                <option>Fantasy</option>
                                <option>Romance</option>
                                <option>Animation</option>
                                <option>Documentary</option>
                                <option>War</option>
                                <option>Crime</option>
                                <option>Western</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Col>
        <Col md={2}>
            <Button className="float-right">Search</Button>
        </Col>
    </Row>
    </>
  )
}

export default Search
