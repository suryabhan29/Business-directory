//Import area

import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import swal from 'sweetalert';

//defination area
export default function Register() {

  //2.1 Hooks area
  const [payload,setPayload] = useState();

  //2.2 Defination area
  let registerUser = ()=>{
    alert('okokokok');
    let u = document.querySelector('input[name=username]').value;
    let e = document.querySelector('input[name=email]').value; ;
    let p = document.querySelector('input[name=password]').value;
    console.log(u); 
    console.log(e); 
    console.log(p); 
    setPayload();
   console.log(payload);

   //promise chain
   fetch(`http://localhost:1337/api/auth/local/register`,{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "username": u,
        "email": e,
        "password": p
     })
   })
   .then(res=> res.json())
   .then(data=>{
    console.log(data.data);
    if(data.data === null){
      swal("Bad job!", `${data.error.message}`, "error");
    }else{
      swal("Good job!", "User Created Successfully!", "success");
    } 
   
   })
   .catch(err=>err);
  }

  //2.3 Return statement
  return (
    <>
      <h1 className='text-center'>Register page</h1>
      <Form>
          <Form.Group className="mb-3">
            <Form.Label>User name</Form.Label>
            <Form.Control name='username' type="text" placeholder="Enter username" />
            <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Enter Password" />
          </Form.Group>
          
          <Button variant="primary" type="button" onClick={()=>{registerUser()}}>
            Submit
          </Button>
      </Form>
    </>
  )
}

//Export area
