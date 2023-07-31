import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '../Auth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Product from '../Components/Product'

const SearchScreen = () => {
    const { search, setSearch } = useContext(Context)
    const  navigate  = useNavigate()
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get('keyword'))
    const value = searchParams.get('keyword')
    const [movies, setMovies] = useState([])


    useEffect(() => {
        if(!search && !value) {
            navigate('/')
        }
        if (value) {
            setSearch(value)
        }
    }, [search, value])

    useEffect(() => {
        if (!search) {
            return
        }

        const fetchMovies = async () => {
            const res = await fetch(`https://backend-eight-omega.vercel.app/api/search/${search}`)
            const data = await res.json()
            setMovies(data)
        }
        fetchMovies()
    }, [search])


  return (
    <Container className='mt-2'>
        <h1>Search Results for <q>{search}</q></h1>
        <Row>
        {movies.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SearchScreen
