import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const [accepted,setAccepted]=useState(false)

    const handleRegister=(event)=>{
      
        event.preventDefault();
        const form =event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photo,email,password);
        createUser(email,password)
        .then(result =>{
          const createdUser=result.user;
          console.log(createdUser);
          form.reset();
        })
        .catch(error =>{
          console.log(error)
        })
    }
    const handleCheck=event=>{
        setAccepted(event.target.checked)
        }
 
    return (
        <Container className='w-50 mx-auto mt-5'>
        <Form onSubmit={handleRegister}>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Name</Form.Label>
   <Form.Control type="text" name='name' placeholder="Enter Name" />
  
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Photo URL</Form.Label>
   <Form.Control type="text" name='photo' placeholder="Enter Photo url" />
  
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" name='email' placeholder="Enter email" />
  
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" name='password' placeholder="Password" />
 </Form.Group>
 <Form.Group className="mb-3"
  controlId="formBasicCheckbox">
 
   <Form.Check
      onClick={handleCheck}
    type="checkbox" 
   label={<>accept<Link to='/terms'>Terms and Conditions</Link></>} />
 </Form.Group>
 <Button
  variant="primary" disabled ={!accepted} type="submit">
   Register
 </Button>

</Form>
<Form.Text className="text-muted">
     Already have an account? please<Link to='/login'> Login</Link>
   </Form.Text>

       
   </Container>
    );
};

export default Register;