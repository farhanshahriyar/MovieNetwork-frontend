import React, { useContext, useState } from 'react'
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { Context } from '../Auth';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const { setSearch} = useContext(Context)
    const navigate = useNavigate()

    const searchHandler = (e) => {
        e.preventDefault()
        setSearch(searchValue)
        navigate(`/search?keyword=${searchValue}`)
        // console.log(searchValue)
    }

  return (
    // <div>
    //     <Form className="d-flex mt-3">
    //       <FormControl type="search" placeholder="Search movies..." className="mr-sm-2 outline-dark" />
    //       <Button variant="outline-dark" type="submit">Search</Button>
    //     </Form>
    // </div>
    <>
    <h3 className="mt-3">All Movies/Series</h3> 
            <Form  onSubmit={searchHandler}>
    <Row>
        <Col md={10}>
                <Form.Group controlId="search">
                    <Form.Control onChange={(e)=> setSearchValue(e.target.value)} type="text" placeholder="Search..." />
                </Form.Group>
        </Col>
        
        <Col md={2}>
            <Button className="float-right" type='submit'>Search</Button>
        </Col>
    </Row>
            </Form>
    </>
  )
}

export default Search
