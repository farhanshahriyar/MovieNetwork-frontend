import React, { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container,Nav,Navbar,NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import auth from '../firebase';
import { auth } from '../firebase';
import { Context } from '../Auth';
// import { signOut } from 'firebase/auth';
import { signOut as signOutFirebase } from 'firebase/auth'; // added 7/3/23
import { toast } from 'react-hot-toast';  // added 7/3/23


const Headers = () => {
  const {user, tempName, setName} = useContext(Context)
  // console.log(auth)
  console.log(user)

  // added 7/3/23
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

return (
<>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>Movie Network</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
          <LinkContainer to='/'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/movie'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Movie</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/web-series'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Web Series</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/up-coming'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Upcoming</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/request'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> Request</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/faq'>
            <Nav.Link><i class="fa-sharp fa-solid fa-film"></i> FAQ</Nav.Link>
          </LinkContainer>
          {/* added 6/3/23 */}
          {/* {
           (user?.displayName || tempName) ? 
           <>
            <Nav.Link><i className='fas fa-user'></i>{ user?.displayName || tempName}</Nav.Link>
            <Button onClick={()=>{
              setName('')
              signOut(auth)
            }}>Logout</Button>
           </>
           : <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
          </LinkContainer>
          } */}

          {/* added 7/3/23 */}
          {
            (user?.displayName || tempName) ? 
            <NavDropdown title={ user?.displayName || tempName} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={()=>{
                setName('')
                signOut(auth)
              }}>Logout</NavDropdown.Item>
            </NavDropdown>
            : 
            <LinkContainer to='/login'>
              <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
            </LinkContainer>
          }


          {/* <Form inline>
          <FormControl type="text" placeholder="Search movies..." className="mr-sm-2 w-100" />
        </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

)
}

export default Headers