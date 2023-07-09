import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TimeRanges from './TimeRanges';


const UnderConstruction = () => {
    const timeRanges = [
        { start: '08:00', end: '10:00' },
      ];
  return (
    <Container className="mt-5 text-center">
    <h1>404</h1>
    <h1>Oops! SERVER IS UNDER CONSTRUCTION</h1>
    <h5 className='text-body-secondary'>Sorry, we are working on our website. Please be patient and give us some time for work.</h5>

    <Container className="mt-3">
      <h1 className="text-center">Time Ranges</h1>
      {timeRanges.map((range, index) => (
        <TimeRanges key={index} start={range.start} end={range.end} />
      ))}
    </Container>


  </Container>
  )
}

export default UnderConstruction
