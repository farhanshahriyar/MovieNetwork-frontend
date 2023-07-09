import React from 'react'


const FaqScreen = () => {

  
  return (
    <div className="container mt-4">
    <h1>Frequently Asked Questions</h1>
    <div className="accordion" id="faqAccordion">
        <div className="card">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What genres of movies do you offer?
                    </button>
                </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div className="card-body">
                    We offer a wide array of genres including Action, Drama, Comedy, Horror, Science Fiction, and more. Our library is constantly expanding, so there's always something new to discover!
                </div>
            </div>
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How often do you add new movies?
                    </button>
                </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div className="card-body">
                We add new movies every week! We're committed to providing our users with a diverse selection of the latest blockbusters and classic films.
                </div>
            </div>
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What if we got password error?
                    </button>
                </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div className="card-body">
                If you are getting password error, please try to reset your password.
                If you still can't login, please contact us.
                <a href="mailto:moviezone030@gmail.com ">Click Here!</a>
                </div>
            </div>
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    I want to request a movie. How do I do that?
                    </button>
                </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div className="card-body">
                We're always looking for new movies to add to our library. If you have a suggestion, please contact us. <a href="mailto:moviezone030@gmail.com ">Click Here!</a> 
                </div>
            </div>
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Do you guys have a mobile app?
                    </button>
                </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div className="card-body">
                Not yet, but we're working on it! We'll be sure to let you know when it's ready.
                </div>
            </div>
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Do you guys have a community?
                    </button>
                </h2>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                <div className="card-body">
                Yes we have a community on Telegram currently. You can join our community by clicking <a href="https://t.me/movienetwork2023" target='_blank'>Here!</a>
                </div>
            </div>
        </div>
        {/* <div className="card">
            <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How often do you add new movies?
                    </button>
                </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                <div className="card-body">
                    We add new movies every week! We're committed to providing our users with a diverse selection of the latest blockbusters and classic films.
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Are the movies available in HD?
                    </button>
                </h2>
            </div>
            
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                <div className="card-body">
                    Yes, all our movies are available in HD. We understand the importance of picture quality in enhancing your movie-watching experience.
                </div>
            </div>
        </div> */}
    </div>
</div>
    
  
  )
}



export default FaqScreen

// import React, {useState} from 'react'
// import {Accordion, Card, Button} from 'react-bootstrap';

// const FaqScreen = () => {
//   const [activeKey, setActiveKey] = useState('0');

//   const handleSelect = (eventKey) => {
//       setActiveKey(eventKey);
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Frequently Asked Questions</h1>
//       <Accordion defaultActiveKey="0" activeKey={activeKey} onSelect={handleSelect}>
//         <Card>
//           <Card.Header>
//             <Accordion.Toggle as={Button} variant="link" eventKey="0">
//               What genres of movies do you offer?
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>We offer a wide array of genres including Action, Drama, Comedy, Horror, Science Fiction, and more. Our library is constantly expanding, so there's always something new to discover!</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//         <Card>
//           <Card.Header>
//             <Accordion.Toggle as={Button} variant="link" eventKey="1">
//               How often do you add new movies?
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="1">
//             <Card.Body>We add new movies every week! We're committed to providing our users with a diverse selection of the latest blockbusters and classic films.</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//         <Card>
//           <Card.Header>
//             <Accordion.Toggle as={Button} variant="link" eventKey="2">
//               Are the movies available in HD?
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="2">
//             <Card.Body>Yes, all our movies are available in HD. We understand the importance of picture quality in enhancing your movie-watching experience.</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//     </div>
//   )
// }

// export default FaqScreen;
