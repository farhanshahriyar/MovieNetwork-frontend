import React from 'react'

const DocumentoryListScreen = () => {
  return (
    <div>   
    <h1>Documentory List Screen</h1>


    <table class="table table-hover">
    <thead>
        <tr>
            <th scope="col">Serial</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Duration</th>
            <th scope="col">Size</th>
            <th scope="col">Quality</th>
            <th scope="col">Released</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-active">
            <th scope="row">Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
     
    </tbody>
</table>

</div>
  )
}

export default DocumentoryListScreen
