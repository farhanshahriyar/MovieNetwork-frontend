import React, {useState, useEffect, useRef, useContext } from 'react'
import { Container, Card, Row, Col, Form, Button, Navbar, Offcanvas } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'; //added by me 7/4/23
// import Loading from '../Components/Loading'; //added by me 7/4/23 2.57am
// import auth from '../firebase';
import { auth } from '../firebase';
import { signOut as signOutFirebase } from 'firebase/auth'; // added 7/3/23
import { Context } from '../Auth'; // added 7/3/23
import Search from '../Components/Search';


const AdminScreen = () => {
const [show, setShow] = React.useState(false);

// added by me 7/4/23  3:30am
const [searchTerm, setSearchTerm] = useState('');
const [filterCategory, setFilterCategory] = useState('All');
const [filterType, setFilterType] = useState('All');
const [filteredMovies, setFilteredMovies] = useState([]);
// ---------------------------------------------

const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
const handleToggle = () => setShow(!show);

const [user, setUser] = useState([])
const [movie, setMovie] = useState([]) //added by me 7/3/23
const [request, setRequest] = useState([]) //added by me 7/6/23

const { setName} = useContext(Context)
// const [loading, setLoading] = useState(false); //added by me 7/4/23 2.57am

const formRef = useRef(null); //added by me 7/4/23 2.57am

const publishHandler = async (e) => {
e.preventDefault();
    const name = e?.target.name.value;
    const category = e?.target.category.value;
    const duration = e?.target.duration.value;
    const size = e?.target.size.value;
    const quality = e?.target.quality.value;
    const released = e?.target.released.value;
    const description = e?.target.description.value;
    const image = e?.target.image.value;
    const trailer = e?.target.trailer.value;
    const downloadLink = e?.target.download.value;
    const torrentLink = e?.target.tdownload.value;
    const type = e?.target.type.value;
    const cast = e?.target.cast.value;
    const language = e?.target.language.value;
    const subtitle = e?.target.subtitle.value;
    const IMDB = Number (e?.target.imdb.value);
    const numReviews = Number (e?.target.numReview.value);
    const rating = Number(e?.target.review.value);

    const data = {
        name,
        category,
        type,
        IMDB,
        duration,
        subtitle,
        language,
        cast,
        size,
        quality,
        released,
        description,
        numReviews,
        rating,
        image,
        trailer,
        downloadLink,
        torrentLink

    }
    // console.log(data)
    // added by me 7/3/23 11.30pm
    // const post = await axios.post('http://localhost:5000/api/MovieDB', data)

    // added by me 7/4/23 2.57am
    // setLoading(true);
    try {
      const post = await axios.post('http://localhost:5000/api/MovieDB', data);
      toast.success("Film uploaded successfully !");

       // Reset the form fields
       formRef.current.reset();

    } catch (error) {
      toast.error("Something went wrong!");
    } 
    // finally {

    // //   setLoading(false);
    // }
    // console.log(post)
}

// added by me 7/5/23 1.30am
const signOut = () => {
    signOutFirebase(auth)
      .then(() => {
        setName('');
        toast.success("Logout successfully done! Thank you!");
      })
      .catch((error) => {
        toast.error("Error during sign out: " + error.message);
      });
  };

  

//movie
useEffect (()=> {
axios.get('http://localhost:5000/api/MovieDB').then(data => {
setMovie(data.data);
})
},[]) //added by me 7/3/23

//user
useEffect (()=> {
axios.get('http://localhost:5000/api/users').then(data => {
setUser(data.data);
})
},[])

//request
useEffect (()=> {
axios.get('http://localhost:5000/api/request').then(data => {
setRequest(data.data);
})
},[])
// console.log(request)


// added by me 7/4/23  3:30am
useEffect(() => {
    let results = movie;

    // filter by search term
    if (searchTerm) {
        results = results.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // filter by category
    if (filterCategory !== 'All') {
        results = results.filter(m => m.category === filterCategory);
    }

    // filter by type
    if (filterType !== 'All') {
        results = results.filter(m => m.type === filterType);
    }

    setFilteredMovies(results);
}, [movie, searchTerm, filterCategory, filterType]);
// ---------------------------------------------


return (
<Container className="mt-3">
    {/* {loading && <Loading />} */}
     {/*added by me 7/4/23 2.57am*/}
    <h2>Dashboard</h2>
    {/* Navbar with Offcanvas */}
    <Button class="btn btn-primary" type="button" onClick={handleShow}>
        More Options
    </Button>

    <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>More Menu</Offcanvas.Title>
        </Offcanvas.Header>

        {/* Admin Panel Menus */}
        <Offcanvas.Body>
            <Link to="/upcoming-news-page" target='_blank'><Button variant="primary" className="mb-2 w-100" block>Upcoming News</Button>
            </Link>
            <Link to="/request-product-list" target='_blank'><Button variant="primary" className="mb-2 w-100" block>Request
                Products</Button></Link>
            <Link to="/movie-list"target='_blank'><Button variant="primary" className="mb-2 w-100" block>Movie List</Button></Link>
            {/* <Link to="/webseries-list"target='_blank'><Button variant="primary" className="mb-2 w-100" block>Web Series List</Button>
            </Link> */}
            {/* <Link to="/short-film-list"target='_blank'><Button variant="primary" className="mb-2 w-100" block>Shortfilms List</Button>
            </Link> */}
            <Link to="/documentory-list"target='_blank'><Button variant="primary" className="mb-2 w-100" block>Documentory
                List</Button></Link>
            <Link to="/user-list"target='_blank'><Button variant="primary" className="mb-2 w-100" block>User List</Button></Link>
            <Link to="/update-website" target='_blank'><Button variant="primary" className="mb-2 w-100 btn btn-success"
                block>Update</Button></Link>
            {/* <Button variant="primary" className="mb-2 w-100 btn btn-danger" block>Logout</Button> */}
            {/* <Button variant="primary" className="mb-2 w-100 btn btn-danger" onClick={()=>{
                setName('');
                signOut(auth);
            }}>Logout</Button> */}
            <Button variant="primary" className="mb-2 w-100 btn btn-danger" block onClick={signOut}>Logout</Button>

        </Offcanvas.Body>

    </Offcanvas>
    <hr />
    {/* Check all information about website */}
    <Row>
        <Col md={4}>
        <Card className='bg-primary text-white'>
            <Card.Body>
                <Card.Title>Total Films</Card.Title>
                <Card.Text>{movie.length}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
        <Card className='bg-primary text-white'>
            <Card.Body>
                <Card.Title>Total Requested Films</Card.Title>
                <Card.Text>{request.length}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
        <Card className='bg-primary text-white'>
            <Card.Body>
                <Card.Title>Total Register users</Card.Title>
                <Card.Text>{user.length}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
    </Row>

    <hr />

    {/* Checking available movies/series */}
  
        {/* added by me 7/4/23 3:30am */}
            <Search/>

    <hr>
    </hr>
    <h3 className="mt-3">Add New Films</h3>
    <Form onSubmit={publishHandler} ref={formRef}>
        <Row>
            <Col md={6}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" />
            </Form.Group>


            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="trailer">
                <Form.Label>Trailer Link</Form.Label>
                <Form.Control type="text" placeholder="Enter trailer link" />
            </Form.Group>

            <Form.Group controlId="imdb">
                <Form.Label>IMDB</Form.Label>
                <Form.Control type="text" placeholder="Enter IMDB Rating" />
            </Form.Group>

            <Form.Group controlId="numReview">
                <Form.Label>Number Review</Form.Label>
                <Form.Control type="text" placeholder="Enter review rating" />
            </Form.Group>

            <Form.Group controlId="review">
                <Form.Label>Confirm Review</Form.Label>
                <Form.Control type="text" placeholder="Enter confirm review rating" />
            </Form.Group>

            <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                    <option>Action</option>
                    <option>Drama</option>
                    {/* Add more options... */}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select">
                    <option>Movie</option>
                    <option>Web-Series</option>
                    {/* <option>Short Film</option>
                    <option>Documentory</option> */}
                    {/* Add more options... */}
                </Form.Control>
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie Size" />
            </Form.Group>

            <Form.Group controlId="quality">
                <Form.Label>Quality</Form.Label>
                <Form.Control type="number" placeholder="Enter Movie/Series/Shortfilm/Documentory Quality" />
            </Form.Group>


            <Form.Group controlId="cast">
                <Form.Label>Cast</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Cast Members Name" />
            </Form.Group>

            <Form.Group controlId="duration">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Duration" />
            </Form.Group>

            <Form.Group controlId="language">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Language" />
            </Form.Group>

            <Form.Group controlId="subtitle">
                <Form.Label>Subtitle</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Subtitle" />
            </Form.Group>

            <Form.Group controlId="released">
                <Form.Label>Released</Form.Label>
                <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Released" />
            </Form.Group>

            <Form.Group controlId="download">
                <Form.Label>DownloadLink</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="tdownload">
                <Form.Label>TorrentLink</Form.Label>
                <Form.Control type="text" />
            </Form.Group>


            <br></br>
            </Col>
            <Button class="btn btn-success" type="submit">Publish</Button>
        </Row>
    </Form>
    <br></br>
</Container>
)
}

export default AdminScreen