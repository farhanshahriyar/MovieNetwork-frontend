import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const MovieListScreen = () => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('https://backend-eight-omega.vercel.app/api/MovieDB')
                setLoading(false)
                setMovie(data)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchMovie()
    }, [])

    const deleteMovie = (id) => {
        axios.delete(`https://backend-eight-omega.vercel.app/api/MovieDB/${id}`)
            .then(res => {
                console.log(res);
                // after deleting, refresh the user list
                axios.get('https://backend-eight-omega.vercel.app/api/MovieDB').then(data => {
                    setMovie(data.data);
                });

                // Show a success toast
                toast.success('Movie deleted successfully!');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Movie List Screen</h1>
            <div className='overflow-x-scroll'>
                <table class="table table-hover w-100">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Type</th>
                            <th scope="col">Quality</th>
                            <th scope="col">Language</th>
                            <th scope="col">Subtitle</th>
                            <th scope="col">Released</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movie.map((item, serial) => (
                            <tr class="table-active" key={item._id}>    
                                <th scope="row">{serial + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.type}</td>
                                <td>{item.quality}</td>
                                <td>{item.language}</td>
                                <td>{item.subtitle}</td>
                                <td>{item.released}</td>
                                <td><img src={item.image} alt={item.name} height={50} /></td>
                                <td><button

                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => deleteMovie(item._id)}
                                >
                                    Delete
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieListScreen