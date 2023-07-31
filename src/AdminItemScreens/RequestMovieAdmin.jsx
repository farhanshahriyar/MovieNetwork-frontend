import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';

const RequestMovieAdmin = () => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    axios.get('https://backend-eight-omega.vercel.app/api/request')
      .then(res => setRequests(res.data))
      .catch(err => console.log(err))
  }, [])


  const deleteRequest = (id) => {
    axios.delete(`https://backend-eight-omega.vercel.app/api/request/${id}`)

      .then(res => {
        console.log(res);
        // after deleting, refresh the user list
        axios.get('https://backend-eight-omega.vercel.app/api/request').then(data => {
          setRequests(data.data);
        });

        // Show a success toast
        toast.success('Request deleted successfully!');
      })
      .catch(err => console.log(err));
  }

  
  return (
    <div className='mt-2'>
    <h1>Request Movie From Users</h1>
    <div className='overflow-x-scroll'>
  <table class="table table-hover w-100">
      <thead>
          <tr>
              {/* <th scope="col">User Name</th> */}
              <th scope="col">Name</th>
              <th scope='col'>Action</th>
              <th scope="col">Category</th>
              <th scope="col">Type</th>
              <th scope="col">Quality</th>
              <th scope="col">Language</th>
              <th scope="col">Subtitle</th>
              <th scope="col">Released</th>
              <th scope="col">Image</th>
          </tr>
      </thead>
      <tbody>
          {
              requests.map(request => (
                  <tr>
                      {/* <td>{request.userName}</td> */}
                      <td>{request.name}</td>
                      <td><button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => deleteRequest(request._id)}
                      >
                      Delete
                      </button></td>

                      <td>{request.category}</td>
                      <td>{request.type}</td>
                      <td>{request.quality}</td>
                      <td>{request.language}</td>
                      <td>{request.subtitle}</td>
                      <td>{request.released}</td>
                      <td>{request.image}</td>
                  </tr>
              ))
          }

      </tbody>
  </table>
  </div>

    </div>
  )
}

export default RequestMovieAdmin
