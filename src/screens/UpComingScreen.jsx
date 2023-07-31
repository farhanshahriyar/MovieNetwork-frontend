// // import React, {useState, useEffect} from 'react'
// // import { Card, CardImg, Button } from 'react-bootstrap'
// // import axios from 'axios'


// // const UpComingScreen = () => {
// // const [upComing, setUpComing] = useState([])

// // useEffect(() => {
// // axios.get('https://backend-eight-omega.vercel.app/api/upcoming')
// // .then(res => setUpComing(res.data))
// // .catch(err => console.log(err))
// // }, [])

// // return (
// // <div>
// //   <div className="card mb-3 mt-3">
// //     <h3 className="card-header">Up Coming</h3>
// //     <div className="card-body">
// //       <h5 className="card-title">Movie Name</h5>
// //       <h6 className="card-subtitle text-muted">Release Date</h6>
// //     </div>

// //     <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200"
// //       aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice"
// //       viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
// //       <rect width="100%" height="100%" fill="#868e96"></rect>
// //       <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Movie Poster HD 1080</text>
// //     </svg>
// //     <div className="card-body">
// //       <p className="card-text">Movie Description</p>
// //     </div>
// //     <ul className="list-group list-group-flush">
// //       <li className="list-group-item">IMDB Ratings</li>
// //       <li className="list-group-item">Category</li>
// //       <li className="list-group-item">Type</li>
// //       <li className="list-group-item">Quality</li>
// //       <li className="list-group-item">Duration</li>
// //       <li className="list-group-item">Language</li>
// //     </ul>
// //     <div className="card-body">
// //       <a href="#" className="card-link">Trailer</a>
// //       <a href="#" className="card-link">Going to upload in site</a>
// //     </div>
// //     <div className="card-footer text-muted">
// //       When this movie will be uploaded in site
// //     </div>
// //   </div>
// // </div>
// // )
// // }

// // export default UpComingScreen


// import React, { useState, useEffect } from 'react'
// import { Card } from 'react-bootstrap'
// import axios from 'axios'


// const UpComingScreen = () => {
//   const [upComing, setUpComing] = useState([])

//   useEffect(() => {
//     axios.get('https://backend-eight-omega.vercel.app/api/upcoming')
//       .then(res => setUpComing(res.data))
//       .catch(err => console.log(err))
//   }, [])

//   return (
//     <div>
//       {upComing.map((movie, index) => (
//         <Card className="mb-3 mt-3" key={index}>
//           <Card.Header>Up Coming</Card.Header>
//           <Card.Body>
//             <Card.Title>{movie.name}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">{movie.releaseDate}</Card.Subtitle>
//             <Card.Img variant="top" src={movie.poster} />
//             <Card.Text>{movie.description}</Card.Text>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">IMDB Ratings: {movie.imdbRating}</li>
//               <li className="list-group-item">Category: {movie.category}</li>
//               <li className="list-group-item">Type: {movie.type}</li>
//               <li className="list-group-item">Quality: {movie.quality}</li>
//               <li className="list-group-item">Duration: {movie.duration}</li>
//               <li className="list-group-item">Language: {movie.language}</li>
//             </ul>
//             <Card.Link href={movie.trailer}>Trailer</Card.Link>
//             <Card.Link href={movie.uploadLink}>Going to upload in site</Card.Link>
//           </Card.Body>
//           <Card.Footer className="text-muted">{movie.uploadTime}</Card.Footer>
//         </Card>
//       ))}
//     </div>
//   )
// }

// export default UpComingScreen


// import React, { useState, useEffect } from 'react'
// import { Card, Spinner } from 'react-bootstrap'
// import axios from 'axios'

// const UpComingScreen = () => {
//   const [upComing, setUpComing] = useState([])
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     axios.get('https://backend-eight-omega.vercel.app/api/upcoming')
//       .then(res => {
//         setUpComing(res.data)
//         setLoading(false)
//       })
//       .catch(err => {
//         console.log(err)
//         setError('An error occurred while fetching the data.')
//         setLoading(false)
//       })
//   }, [])

//   if (loading) {
//     return <Spinner 
//     animation="border"
//     role="status"
//     style={{
//       width: '100px',
//       height: '100px',
//       margin: 'auto',
//       display: 'block'
//     }}
//     />
//   }

//   if (error) {
//     return <p>{error}</p>
//   }

//   return (
//     <div>
//       {upComing.map((movie, index) => (
//         <Card className="mb-3 mt-3" key={index}>
//           <Card.Header>Up Coming</Card.Header>
//           <Card.Body>
//             <Card.Title>{movie.name}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">{movie.released}</Card.Subtitle>
//             <Card.Img variant="top" src={movie.image} />
//             <Card.Text>{movie.description}</Card.Text>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">IMDB Ratings: {movie.imdb}</li>
//               <li className="list-group-item">Category: {movie.category}</li>
//               <li className="list-group-item">Type: {movie.type}</li>
//               <li className="list-group-item">Quality: {movie.quality}</li>
//               <li className="list-group-item">Duration: {movie.duration}</li>
//               <li className="list-group-item">Language: {movie.language}</li>
//             </ul>
//             <Card.Link href={movie.trailer}>Trailer</Card.Link>
//             <Card.Link href="#">Going to upload in site</Card.Link>
//           </Card.Body>
//           <Card.Footer className="text-muted">{movie.siterelease}</Card.Footer>
//         </Card>
//       ))}
//     </div>
//   )
// }

// export default UpComingScreen


import React, { useState, useEffect } from 'react';
import { Card, Spinner, Button } from 'react-bootstrap';
import axios from 'axios';
import './screenalt.css/style.css'

const UpComingScreen = () => {
  const [upComing, setUpComing] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUpComingMovies = () => {
    setLoading(true);
    axios.get('https://backend-eight-omega.vercel.app/api/upcoming')
      .then(res => {
        setUpComing(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError('An error occurred while fetching the data.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUpComingMovies();
  }, []);

  if (loading) {
    return (
      <Spinner 
        animation="border"
        role="status"
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block'
        }}
      />
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <Button onClick={fetchUpComingMovies}>Retry</Button>
      </div>
    );
  }

  // Encapsulated the fetching logic inside a function fetchUpComingMovies which is then called in the useEffect hook. This allows us to call the function again when the user clicks the retry button in case of an error.

  return (
    <div>
      <h3>Up Coming</h3>
      {upComing.map((movie, index) => (
        <Card className="mb-3 mt-3" key={index}>
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{movie.released}</Card.Subtitle>
            {/* <Card.Img variant="top" src={movie.image} alt={movie.name} height={350} width={250} /> */}
            <Card.Img className="card-image" variant="top" src={movie.image} alt={movie.name} />
            <Card.Text>{movie.description}</Card.Text>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">IMDB Ratings: {movie.imdb}</li>
              <li className="list-group-item">Category: {movie.category}</li>
              <li className="list-group-item">Type: {movie.type}</li>
              <li className="list-group-item">Quality: {movie.quality}</li>
              <li className="list-group-item">Duration: {movie.duration}</li>
              <li className="list-group-item">Language: {movie.language}</li>
              <li className="list-group-item">Site Release: {movie.siteRelease}</li>
            </ul>
            <Button href={movie.trailer}>Trailer</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UpComingScreen;
