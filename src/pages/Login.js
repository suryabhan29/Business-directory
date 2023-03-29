//Import area

import React from 'react'
import { Button, Form } from 'react-bootstrap'

//Defination area

export default function Login() {

    //2.1 Hooks area

    //2.2 Function defination area

    let myLogin= ()=>{
       // alert('okokookkokko');

       let payload = {
            "identifier": document.querySelector('input[type=email]').value,
            "password": document.querySelector('input[type=password]').value, 
        }
        console.log(payload);

        fetch(`http://localhost:1337/api/auth/local`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then((data)=>{
            if(data ["jwt"] !== undefined){
                //Login Success
                console.log('token----->',data["jwt"]);
               // alert('welcome');
               window.location.href = '/busniess_register';
                

                //Store the token in localstorage

                window.localStorage.setItem('jwt_token', data ["jwt"])
            }else{
                // Login Failed
                alert('Bheed kam')
            }
            console.log(data);
        })
        .catch(err=>err)
    }
  return (
    <>
        <h1 className='text-center'>Login page</h1>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">

            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={()=>{myLogin() }}>
            Submit
        </Button>
    </Form>
    </>
  )
}

//Export area
