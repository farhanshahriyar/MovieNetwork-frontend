import React from 'react'
import { Card } from 'react-bootstrap';

const TimeRanges = ({start, end}) => {
   
  return (
    <Card className="mb-3">
    <Card.Body>
      <Card.Title>Update Time</Card.Title>
      <Card.Text>
        Start: {start}, End: {end}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default TimeRanges
