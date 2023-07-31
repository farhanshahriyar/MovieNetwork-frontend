import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'; // Don't forget to import axios
import { toast } from 'react-hot-toast'; // Import toast

 

const UpdateUser = ({ match }) => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [admin, setAdmin] = useState(false)
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('User')
  const [isAdmin, setIsAdmin] = useState(false)
  const [subscription, setSubscription] = useState(false)


  const { id } = useParams()
  useEffect (()=> {
    axios.get(`https://backend-eight-omega.vercel.app/api/users/${id}`).then(data => {
      console.log(data.data)
      setUser(data.data);
    })
  },[id])

  const updateUser = (id) => {
    axios.put(`https://backend-eight-omega.vercel.app/api/users/${id}`, {
      name: name,
      email: email,
      password: password,
      role: role,
      isAdmin: role === "Admin" ? "true" : null,
      // subscription: subscription
    })
      .then(res => {
        console.log(res);
        // after deleting, refresh the user list
       
        // Show a success toast
        toast.success('User updated successfully!');
    })
    .catch(err => console.log(err));
}

  useEffect (()=> {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setPassword(user.password)
      setRole(user.role)
      setIsAdmin(user.isAdmin)
      // setSubscription(user.subscription)
    }

  },[user])


  return (
    <>
        <h3 className="mt-3">Update User</h3>
            <Form>
                <Row>
                    <Col md={6}>
                    <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} />
                </Form.Group>
                <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>

                </Form.Group>

                <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
                </Form.Group>
                </Col>
         
            <Col md={6}>
                <h3>Additional Info</h3>
                <Form.Group controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option>User</option>
                        <option>Moderator</option>
                        <option>Admin</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="subscription">
                    <Form.Label>Subscription</Form.Label>
                    <Form.Control as="select">
                        <option>Yes</option>
                        <option>No</option>
                        {/* Add more options... */}
                    </Form.Control>
                </Form.Group>
                </Col>
                <div className='mt-5'>
               
                <Button variant="primary" className="mb-2 w-100 btn btn-warning" block onClick={()=>updateUser(user._id)}>Update</Button>

                </div>
              
                </Row>
            </Form>
            <br></br>
    </>
  )
}

export default UpdateUser
