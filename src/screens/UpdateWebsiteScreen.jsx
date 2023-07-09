import React from 'react'
import { Container } from 'react-bootstrap'

const UpdateWebsiteScreen = () => {
  return (
    <Container className='mt-2'>
        <h1>What's New?</h1>
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Updated the UpComing page with new films
            <span class="badge bg-primary rounded-pill">Version 1.0.0</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Updated the UpComing Admin page with new films
            <span class="badge bg-primary rounded-pill">Version 1.0.0</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Fixed Bugs
            <span class="badge bg-primary rounded-pill">Version 1.0.0</span>
        </li>
        </ul>
    </Container>
  )
}

export default UpdateWebsiteScreen
