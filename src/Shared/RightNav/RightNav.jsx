import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import Qzone from '../../QZone/Qzone';
import bg from "../../assets/bg.png";
import "./RightNav.css"

const RightNav = () => {
    return (
        <div>
            <h4 className='my-3'>Login Now
            </h4>
            <Button variant="outline-primary mb-2"> <FaGoogle/>Login with google</Button>
      <Button variant="outline-secondary">
      <FaGithub/>Login with Github</Button>
      <div>
        <h4 className='my-3'>Find us On</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook/>Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
      
    </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="image-container">
      <img src={bg} alt="Description of the image" />
      <p className="image-text text-white ">Create an Amazing Newspaper</p>
      <p className="image-textp text-white ">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      {/* <Button  className='btn' variant="danger">Learn More</Button> */}

      </div>
      
        </div>
    );
};

export default RightNav;