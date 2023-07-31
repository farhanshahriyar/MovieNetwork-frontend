import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';

const MovieListScreen = () => {
const [movie, setMovie] = useState([]) //added by me 7/3/23

useEffect (()=> {
axios.get('https://backend-eight-omega.vercel.app/api/MovieDB').then(data => {
setMovie(data.data);
})
},[]) //added by me 7/3/23

// added by me 7/5/23 2:46pm
const handleDelete = (movieId) => {
    axios.delete(`https://backend-eight-omega.vercel.app/api/MovieDB/${movieId}`)
    .then(response => {
        console.log('Movie deleted successfully'); 
        // Remove the deleted movie from the state
        setMovie(movie.filter(movie => movie._id !== movieId));
        // Notify the user that the movie has been deleted
        alert('Movie deleted successfully');
    })
    .catch(err => {
        console.error('Error deleting movie:', err);
        // Notify the user that there was an error
        alert('Error deleting movie. Please try again later.');
    });
}


return (
<div>
    <h1>Movie/Series List Screen</h1>
    <div className='overflow-x-scroll'>
    <table class="table table-hover w-100">
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
            {movie.map((item, serial) =>
            <tr class="table-active">
                <th scope="row">{serial+1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.duration}</td>
                <td>{item.size}</td>
                <td>{item.quality}</td>
                <td>{item.released}</td>
                <td><button type="button" className="btn btn-danger" onClick={()=>
                        handleDelete(item._id)}>Delete</button></td>
            </tr>
            )}

        </tbody>
    </table>
    </div>
</div>
)
}

export default MovieListScreen