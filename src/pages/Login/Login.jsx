import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const navigate =useNavigate();
  // jekhan thke privete route login e pathiye diyeche sekhane back korar jnno
  const location = useLocation();
  console.log('login page location',location)
  const from=location.state?.from.pathname || '/category/0';
  // /from ta te navigate e bosiye diyeche
  const handleLogin=(event)=>{
    event.preventDefault();
    const form =event.target;
    const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
          const loggedUser=result.user;
          console.log(loggedUser);
          navigate(from,{replace:true});
          form.reset();
         
        })
        .catch(error =>{
          console.log(error)
        })
  }
    return (
        <Container className='w-50 mx-auto mt-5'>
             <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password"placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button 
       variant="primary" type="submit">
        LOGIN
      </Button>

    </Form>
    <Form.Text className="text-muted">
          Dont have an account? please<Link to='/register'> Register</Link>
        </Form.Text>

            
        </Container>
    );
};

export default Login;