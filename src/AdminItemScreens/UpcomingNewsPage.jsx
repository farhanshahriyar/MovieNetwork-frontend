// import React, {useState, useRef} from 'react'
// import { Form, Row, Col, Button } from 'react-bootstrap'
// import axios from 'axios'
// import { toast } from 'react-hot-toast'

// const UpcomingNewsPage = () => {
//     const formRef = useRef(null);

//     const submitHandler = async (e) => {
//         e.preventDefault();

//         const form = formRef.current;
//         const name = form['name'].value;
//         const released = form['released'].value;
//         const image = form['image'].value;
//         const description = form['description'].value;
//         const trailer = form['trailer'].value;
//         const imdb = form['imdb'].value;
//         const duration = form['duration'].value;
//         const category = form['category'].value;
//         const type = form['type'].value;
//         const quality = form['quality'].value;
//         const language = form['language'].value;
//         const siterelease = form['siterelease'].value;


//         const data = {
//             name,
//             released,
//             image,
//             category,
//             type,
//             quality,
//             language,
//             imdb,
//             description,
//             duration,
//             trailer,
//             siterelease,
//         };

//         try {
//             const response = await axios.post('https://backend-eight-omega.vercel.app/api/upcoming', data);
//             // toast.success(response.data.message);
//             toast.success('Upcoming News sent successfully!');
//             formRef.current.reset();
//         } catch (err) {
//             console.error(err); // will log the error with stacktrace
//             if(err.response){
//                 // server responded with a status other than 200 range
//                 toast.error(err.response.data.message);
//             }else if(err.request){
//                 // client never received a response, or request never left
//                 toast.error('Something went wrong. Please try again later');
//             } else {
//                 // anything else
//                 toast.error('Something went wrong');
//             }
//         }
//     }


// //   return (
// //     <div>
// //     <h3 className="mt-3">UpComing Page</h3>
// //     <p class="text-body-secondary">*Example: You can take all info from here (https://www.imdb.com/) copy it and paste it on google</p>
// //         <Form>
// //             <Row>
// //                 <Col md={6}>
// //             <Form.Group controlId="name">
// //                 <Form.Label>Name</Form.Label>
// //                 <Form.Control type="text" placeholder="Enter name" />
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: Shadi Main Jaror Ana</p>

// //             <Form.Group controlId="released">
// //                 <Form.Label>Released</Form.Label>
// //                 <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Released" />
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: 2015</p>  

// //             <Form.Group controlId="image">
// //                 <Form.Label>Image</Form.Label>
// //                 <Form.Control type="text" />
// //             </Form.Group> 
// //             <p class="text-body-secondary">*Example: Any types of picture</p>             

// //             <Form.Group controlId="description">
// //                     <Form.Label>Description</Form.Label>
// //                     <Form.Control as="textarea" rows={3} />
// //                 </Form.Group> 
// //                 <p class="text-body-secondary">*Example: Just copy movies or any films description from https://www.imdb.com/</p>

// //             <Form.Group controlId="tailer">
// //                 <Form.Label>Trailer Link</Form.Label>
// //                 <Form.Control type="text" placeholder="Enter trailer link" />
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: https://www.youtube.com/watch?v=BiVyN2ftrrs</p>  


// //             <Form.Group controlId="imdb">
// //                 <Form.Label>IMDB</Form.Label>
// //                 <Form.Control type="number" placeholder="Enter IMDB Rating" />
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: 7.8/10</p>  

// //             </Col>

// //             <Col md={6}>
// //             <Form.Group controlId="duration">
// //                     <Form.Label>Duration</Form.Label>
// //                     <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Duration" />
// //                 </Form.Group>
// //                 <p class="text-body-secondary">*Example: 2h 15min</p>

// //             <Form.Group controlId="category">
// //                 <Form.Label>Category</Form.Label>
// //                 <Form.Control as="select">
// //                     <option>Action</option>
// //                     <option>Drama</option>
// //                     {/* Add more options... */}
// //                 </Form.Control>
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: Drama</p>  

// //             <Form.Group controlId="type">
// //                 <Form.Label>Type</Form.Label>
// //                 <Form.Control as="select">
// //                     <option>Movie</option>
// //                     <option>Web Series</option>
// //                     <option>Short Film / Natok</option>
// //                     <option>Documentory</option>
// //                     {/* Add more options... */}
// //                 </Form.Control>
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: Movie</p>  

// //             <Form.Group controlId="quality">
// //                 <Form.Label>Quality</Form.Label>
// //                 <Form.Control type="number" placeholder="Enter Movie/Series/Shortfilm/Documentory Quality" />
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: 1080</p>  


// //             <Form.Group controlId="language">
// //                 <Form.Label>Language</Form.Label>
// //                 <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Language" />
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: Hindi</p>  


// //             <Form.Group controlId="site-release">
// //                 <Form.Label>Site Release</Form.Label>
// //                 <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Site Release" />
// //             </Form.Group>
// //             <p class="text-body-secondary">*Example: Tomorrow or 2days later</p>  


// //             <br></br>
// //             </Col>
// //             <div className='mt-5'>
// //             <Button class="btn btn-lg btn-primary" type="button">Post</Button>
// //             </div>

// //             </Row>
// //         </Form>
// //         <br></br>
// // </div>
// //   )
// // }

// return (
//     <div>
//         <h3 className="mt-3">UpComing Page</h3>
//         <p className="text-body-secondary">*Example: You can take all info from here (https://www.imdb.com/) copy it and paste it on google</p>
//         <Form ref={formRef} onSubmit={submitHandler}>
//             <Row>
//                 <Col md={6}>
//             <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter name" />
//             </Form.Group>
//             <p class="text-body-secondary">*Example: Shadi Main Jaror Ana</p>

//             <Form.Group controlId="released">
//                 <Form.Label>Released</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Released" />
//             </Form.Group>
//             <p class="text-body-secondary">*Example: 2015</p>  

//             <Form.Group controlId="image">
//                 <Form.Label>Image</Form.Label>
//                 <Form.Control type="text" />
//             </Form.Group> 
//             <p class="text-body-secondary">*Example: Any types of picture</p>             

//             <Form.Group controlId="description">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control as="textarea" rows={3} />
//                 </Form.Group> 
//                 <p class="text-body-secondary">*Example: Just copy movies or any films description from https://www.imdb.com/</p>

//             <Form.Group controlId="tailer">
//                 <Form.Label>Trailer Link</Form.Label>
//                 <Form.Control type="text" placeholder="Enter trailer link" />
//             </Form.Group>
//             <p class="text-body-secondary">*Example: https://www.youtube.com/watch?v=BiVyN2ftrrs</p>  


//             <Form.Group controlId="imdb">
//                 <Form.Label>IMDB</Form.Label>
//                 <Form.Control type="number" placeholder="Enter IMDB Rating" />
//             </Form.Group>
//             <p class="text-body-secondary">*Example: 7.8/10</p>  

//             </Col>

//             <Col md={6}>
//             <Form.Group controlId="duration">
//                     <Form.Label>Duration</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Duration" />
//                 </Form.Group>
//                 <p class="text-body-secondary">*Example: 2h 15min</p>

//             <Form.Group controlId="category">
//                 <Form.Label>Category</Form.Label>
//                 <Form.Control as="select">
//                     <option>Action</option>
//                     <option>Drama</option>
//                     {/* Add more options... */}
//                 </Form.Control>
//             </Form.Group>
//             <p class="text-body-secondary">*Example: Drama</p>  

//             <Form.Group controlId="type">
//                 <Form.Label>Type</Form.Label>
//                 <Form.Control as="select">
//                     <option>Movie</option>
//                     <option>Web Series</option>
//                     <option>Short Film / Natok</option>
//                     <option>Documentory</option>
//                     {/* Add more options... */}
//                 </Form.Control>
//             </Form.Group>
//             <p class="text-body-secondary">*Example: Movie</p>  

//             <Form.Group controlId="quality">
//                 <Form.Label>Quality</Form.Label>
//                 <Form.Control type="number" placeholder="Enter Movie/Series/Shortfilm/Documentory Quality" />
//             </Form.Group>
//             <p class="text-body-secondary">*Example: 1080</p>  


//             <Form.Group controlId="language">
//                 <Form.Label>Language</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Language" />
//             </Form.Group>
//             <p class="text-body-secondary">*Example: Hindi</p>  


//             <Form.Group controlId="siterelease">
//                 <Form.Label>Site Release</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Site Release" />
//             </Form.Group>
//             <p class="text-body-secondary">*Example: Tomorrow or 2days later</p>  


//             <br></br>
//             </Col>
//                 <div className='mt-5'>
//                     <Button className="btn btn-lg btn-primary" type="submit">Post</Button>
//                 </div>
//             </Row>
//         </Form>
//         <br />
//     </div>
// )
// }


// export default UpcomingNewsPage


import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const UpcomingNewsPage = () => {
    const submitHandler = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        try {
            const response = await axios.post('https://backend-eight-omega.vercel.app/api/upcoming', data);
            toast.success('Upcoming News sent successfully!');
            e.target.reset();
        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || 'Something went wrong. Please try again later';
            toast.error(errorMessage);
        }
    };

    return (
        <div>
            <h3 className="mt-3">UpComing Page</h3>
            <p className="text-body-secondary">*Example: You can take all info from here (https://www.imdb.com/) copy it and paste it on google</p>

            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" name="title" />
                        </Form.Group>
                        <Form.Group controlId="released">
                            <Form.Label>Released</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Released" name="released" />
                        </Form.Group>
                        <Form.Group controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name="image" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" name="description" />
                        </Form.Group>
                        <Form.Group controlId="trailer">
                            <Form.Label>Trailer Link</Form.Label>
                            <Form.Control type="text" placeholder="Enter trailer link" name="trailer" />
                        </Form.Group>
                        <Form.Group controlId="imdb">
                            <Form.Label>IMDB</Form.Label>
                            <Form.Control type="text" placeholder="Enter IMDB Rating" name="imdb" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="duration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Duration" name="duration" />
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" name="category">
                                <option>Action</option>
                                <option>Drama</option>
                                <option>Comedy</option>
                                <option>Adventure</option>
                                <option>Horror</option>
                                <option>Mystery</option>
                                <option>Science Fiction</option>
                                <option>Fantasy</option>
                                <option>Romance</option>
                                <option>Animation</option>
                                <option>Documentary</option>
                                <option>War</option>
                                <option>Crime</option>
                                <option>Western</option>
                                {/* Add more options... */}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="type">
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select" name="type">
                                <option>Movie</option>
                                <option>Web Series</option>
                                <option>Short Film / Natok</option>
                                {/* Add more options... */}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="quality">
                            <Form.Label>Quality</Form.Label>
                            <Form.Control type="number" placeholder="Enter Movie/Series/Shortfilm/Documentory Quality" name="quality" />
                        </Form.Group>
                        <Form.Group controlId="language">
                            <Form.Label>Language</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Language" name="language" />
                        </Form.Group>
                        <Form.Group controlId="site-release">
                            <Form.Label>Site Release</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie/Series/Shortfilm/Documentory Site Release" name="siteRelease" />
                        </Form.Group>
                    </Col>
                </Row>
                <div className='mt-5'>
                    <Button variant="primary" type="submit">Post</Button>
                </div>
            </Form>
        </div>
    );
};

export default UpcomingNewsPage;
