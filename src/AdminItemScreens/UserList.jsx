// just I am trying to delete user 
// Working code
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';



const UserList = () => {
  const [user, setUser] = useState([])
  
  useEffect (()=> {
    axios.get('https://backend-eight-omega.vercel.app/api/users').then(data => {
      setUser(data.data);
    })
  },[])

  const deleteUser = (id) => {
    axios.delete(`https://backend-eight-omega.vercel.app/api/users/${id}`)
      .then(res => {
        console.log(res);
        // after deleting, refresh the user list
        axios.get('https://backend-eight-omega.vercel.app/api/users').then(data => {
          setUser(data.data);
        });

       // Show a success toast
       toast.success('User deleted successfully!');
    })
    .catch(err => console.log(err));
}


  return (
    <div>
      <h1>User/Admin List Screen</h1>
      <div className='overflow-x-scroll'>
      <table class="table table-hover w-100">
        <thead>
          <tr>
            <th scope="col">Serial</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
            <th scope="col">Admin</th>
            <th scope="col">Edit</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, serial) => (
            <tr class="table-active" key={item._id}>
              <th scope="row">{serial+1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.role}</td>
              <td>{item.isAdmin}</td>
              <td><Link to={`/user-update/${item._id}`}><Button variant="primary" className="mb-2 w-100 btn btn-warning" block>Update</Button></Link></td>
              <td>
                <button 
                  type="button" 
                  class="btn btn-danger"
                  onClick={() => deleteUser(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default UserList
