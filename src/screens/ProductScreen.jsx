// import React, {useState, useEffect} from 'react'
// import { Link, useParams } from 'react-router-dom'
// // import { Link } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
// import Rating from '../Components/Rating';
// // import products from '../products';
// import axios from 'axios'

// const ProductScreen = ({ match }) => {
//   // const { id } = useParams()
//   // const product = products.find((p) => String(p._id) === id);
//   // const product = products.find((p) => p._id === match.params.id);
//   const [product, setProduct] = useState({})
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProducts = async () =>{
//       const {data} = await axios.get(`/api/products/${match.params.id}`)
//       setProduct(data)
//     }
//     fetchProducts()
//   }, [id])
//   return (

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../Components/Rating';
import axios from 'axios';

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`https://backend-eight-omega.vercel.app/api/MovieDB/${id}`);
      // console.log(data)
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

      return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <div className='flex d-flex justify-content-center'>

          <Image src={product.image} alt={product.name} height={350} />
          </div>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}>
              </Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              Catergory: {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Cast: <strong>{product.cast}</strong></h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Duration:
                  </Col>
                  <Col>
                    <strong>{product.duration}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Language:
                  </Col>
                  <Col>
                    <strong>{product.language}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Subtitle:
                  </Col>
                  <Col>
                    <strong>{product.subtitle}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Size:
                  </Col>
                  <Col>
                    <strong>{product.size}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Quality:
                  </Col>
                  <Col>
                    <strong>{product.quality}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Released:
                  </Col>
                  <Col>
                    <strong>{product.released}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    IMDB:
                  </Col>
                  <Col>
                    <strong>{product.IMDB}/10</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
              <Button className='btn btn-primary w-100' href={product.downloadLink} target='_blank'>Direct Download</Button>
              </ListGroup.Item>
              <ListGroup.Item>
              <Button className='btn btn-primary w-100' href={product.torrentLink} target='_blank'>Torrent Download</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
