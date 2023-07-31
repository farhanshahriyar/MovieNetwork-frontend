import React, {useEffect, useState} from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'
import Search from '../Components/Search'
// import products from '../products'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () =>{
      const {data} = await axios.get('https://backend-eight-omega.vercel.app/api/MovieDB')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <Search/>
      <br></br>
      <h1>Latest Movies</h1>
      <Row>
        {products.filter(item => item.type=='Movie').map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
      <h1>Latest Series</h1>
      <Row>
        {products.filter(item => item.type=='Web-Series').map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
