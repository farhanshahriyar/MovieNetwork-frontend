import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../Components/FormContainer'
import { Context } from '../Auth'
import { toast } from 'react-hot-toast'

const LoginScreen = () => {
  const {signIn} = useContext(Context)
  const navigate = useNavigate()
  // 1
  // const submitHandler = async(e) => {
  //   e.preventDefault()
  //   try{
  //     const password = e.target.password.value
  //     const email = e.target.email.value
  //     const data = await signIn(email,password)
  //     navigate("/");
  //     toast.success("Login successfully done!")
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  // 2
  const submitHandler = async(e) => {
    e.preventDefault()
    try{
      const password = e.target.password.value
      const email = e.target.email.value
      const data = await signIn(email,password)
      navigate("/");
      toast.success("Login successfully done!")
    }catch(error){
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email address.");
      } else {
        console.log(error)
      }
    }
}

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className='mt-4' type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? 
          <Link to='/register'>
            Register
          </Link>
        </Col>
      </Row>

      <Row className='py-1'>
        <Col>
          Not Remember Password? 
          <Link to='/forget-password'>
            Click here!
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
