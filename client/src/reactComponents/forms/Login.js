import React, {useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './AuthContext'
// import { Link } from 'react-router-dom'


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const  login  = useAuth()
  const [error, setError] = useState

  async function handleSubmit(evt) {
    setError('')
    evt.preventDefault()
    
    try {
    await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Login Failed')
    }
  }


  return (
    <>
    <Card>
      <Card.Body>
        <h2 className='text-center mb-2'>Admin Login</h2>
        {error && <Alert variant='danger'>{error}</Alert> }
        <Form onSubmit={handleSubmit} >
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <Button type='submit'>Log In</Button>

        </Form>
      </Card.Body>

    </Card>

      
    </>
  )
}
