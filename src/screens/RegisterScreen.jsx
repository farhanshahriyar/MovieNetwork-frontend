import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../Components/FormContainer'
import axios from 'axios'
import SuccessMessage from '../Components/SuccessMessage'
import { Context } from '../Auth'
import { toast } from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'

const RegisterScreen = () => {
  const [success, setSuccess] = useState(false)
  const {createUser, updateUser, setName, user, signInWithGoogle} = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user, navigate])
  
  const submitHandler = async (e) => {
    e.preventDefault()
   try {
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
    const name = e.target.name.value
    const email = e.target.email.value
    const data = await createUser(email, password)

    const dataTo = await updateUser(name)
    console.log(dataTo)
    if(!data.user) {
      alert('unknown! error')
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match')
    }
    else {
      const { data } = await axios.post('http://localhost:5000/api/users', { name, email, password, role:`User` })
      console.log(data)
      setSuccess(true);
      setName(name);
      navigate("/");
      toast.success("Registered successfully done!")
    }
   } catch(error){
    console.log(error)
   }
  }

  return (
    <FormContainer>
        {
        success && <SuccessMessage setSuccess={setSuccess} message={'user created successfully'}/>
      }

      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

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

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            // value={confirmPassword}
            // onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className='mt-4' type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Button onClick={signInWithGoogle} className='mt-4 d-flex gap-2' type='submit' variant='primary'><FcGoogle className='mr-2' size={20}/>
          Google Sign In
        </Button>
    

      <Row className='py-3'>
        <Col>
          Have an Account?
          <Link to= '/login'>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
