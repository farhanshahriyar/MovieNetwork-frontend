
import React, { useState, useRef } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const RequestScreen = () => {
    const formRef = useRef(null); 

    const submitHandler = async (e) => {
        e.preventDefault();

        const name = e?.target.name.value;
        const image = e?.target.image.value;
        const category = e?.target.category.value;
        const type = e?.target.type.value;
        const quality = e?.target.quality.value;
        const language = e?.target.language.value;
        const subtitle = e?.target.subtitle.value;
        const released = e?.target.released.value;

       


        const data = {
            name,
            image,
            category,
            type,
            quality,
            language,
            subtitle,
            released,

          
            
        };

      
        try {
            const response = await axios.post('http://localhost:5000/api/request', data);
            // toast.success(response.data.message);
            toast.success('Request sent successfully!');

            formRef.current.reset();
        } catch (err) {
            console.error(err); // will log the error with stacktrace
            if(err.response){
                // server responded with a status other than 200 range
                toast.error(err.response.data.message);
            }else if(err.request){
                // client never received a response, or request never left
                toast.error('Something went wrong. Please try again later');
            } else {
                // anything else
                toast.error('Something went wrong');
            }
        }
    }

    return (
        <div>
            <h3 className="mt-3">Request New Movie/Series</h3>
            <p className="text-body-secondary"> You can request any movie/series here. All you have to do is just give us
                information. Please fill it up....</p>
                <Form onSubmit={submitHandler} ref={formRef}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <p className="text-body-secondary">*Example: Shadi Main Jaror Ana</p>

                        
                <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>
                     <Form.Control type="text" placeholder="Enter image url" />
                </Form.Group>

                <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
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
                </Form.Control>
            </Form.Group>
                 <p className="text-body-secondary">*Example: Crime</p>
                 <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select">
                    <option>Movie</option>
                    <option>Web-Series</option>
                    <option>Short Film / Natok</option>
                    {/* Add more options... */}
                </Form.Control>
            </Form.Group>
                 <p className="text-body-secondary">*Example: Movie</p>
                
                <Form.Group controlId="quality">
                     <Form.Label>Quality</Form.Label>
                     <Form.Control type="text" placeholder="Enter quality" />
                 </Form.Group>
                <p className="text-body-secondary">*Example: 720p</p>
                </Col>
                <Col md={6}>
               <Form.Group controlId="language">
                     <Form.Label>Language</Form.Label>
                     <Form.Control type="text" placeholder="Enter language" />
                </Form.Group>
                <p className="text-body-secondary">*Example: Hindi</p>

                 <Form.Group controlId="subtitle">
                     <Form.Label>Subtitle</Form.Label>
                    <Form.Control type="text" placeholder="Enter subtitle" />
                </Form.Group>
                <p className="text-body-secondary">*Example: English</p>

                 <Form.Group controlId="released">
                    <Form.Label>Released</Form.Label>
                     <Form.Control type="text" placeholder="Enter released date" />
                 </Form.Group>
                 <p className="text-body-secondary">*Example: 10 November 2017</p>

                    
                    </Col>
                        <Button variant="primary" type="submit">
                            Request
                        </Button>
                </Row>
            </Form>
        </div>
    )
}

export default RequestScreen
