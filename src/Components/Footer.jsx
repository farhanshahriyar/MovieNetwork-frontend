// import React from 'react'
// import { Container,Row, Col } from "react-bootstrap";
// const Footer = () => {
//   return (
//     <>
//       <Container>
//         <Row className='mt-2'>
//           <Col className="text-center">
//               Copyright &copy; 2023 MovieNetwork developed by 
//                <a href="https://mdfarhanshahriyar2023.netlify.app/" target='_blank'>Md.Farhan Shahriyar</a> 
//             </Col>
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default Footer


// added back to top button on footer 7/4/2023
import React from 'react'
import { Container,Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
      <Container>
        <Row className='mt-2'>
          <Col className="text-center">
            Copyright &copy; 2023 MovieNetwork developed by 
            <a href="https://mdfarhanshahriyar2023.netlify.app/" target='_blank'>Md.Farhan Shahriyar</a> 
            <Button variant="link" onClick={scrollToTop}>Back to Top</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer

