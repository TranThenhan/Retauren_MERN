import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/signupScreen.css';
import Header from '../components/header';
import  Axios  from 'axios';
import { useState } from 'react';

function SignupScreen() {
  const [firstName, setFristName] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')



  // const { search} = useLocation();
  // const redirectInUrl = new URLSearchParams(search).get('redirect')
  // const redirect = redirectInUrl ? redirectInUrl: '/'
  
  const submitHandler = async (e: any) => { // e --> event
    e.preventDefault()
    if (password !== confirmPassword){
      alert('Passwords do not match')
      return
    }
    try {
      const {data} = await Axios.post('http://localhost:5000/api/users/signup', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      })
      console.log(data)
    }catch (err){
    }

  }

  return (
    <><Header></Header>
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100" onSubmit={submitHandler}>
        <img className="mb-4 bootstrap-logo"
          src="https://static.vecteezy.com/system/resources/previews/004/909/721/non_2x/sushi-logo-free-vector.jpg"
          alt="Bootstrap 5" />
        <h1 className="mb-3 fs-3 fw-normal">Sign Up</h1>

        <Form.Group className='login' controlId="firstName">
          <Form.Control size="lg" placeholder="First Name" required onChange={(e) => setFristName(e.target.value)} />
        </Form.Group>
        <Form.Group className='login' controlId="lastName">
          <Form.Control size="lg" placeholder="Last name" required onChange={(e) => setLastname(e.target.value)} />
        </Form.Group>
        <Form.Group className='login' controlId="sign-up-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 login" controlId="sign-un-password">
          <Form.Control type="password" size="lg" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 login" controlId="sign-un-password">
          <Form.Control type="password" size="lg" placeholder="Confirm Password" required onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Group>

        <div className="d-grid login">
          <Button type='submit' variant="primary" size="lg">Sign UP</Button>
        </div>
          Already have an account?{''}<a href='/signin'>Sign-In</a>

        <p className="mt-5 text-muted">&copy; 2022</p>

      </Form>
    </Container>
      </>
  );
}

export default (SignupScreen);