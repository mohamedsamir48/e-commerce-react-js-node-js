import React from 'react'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import {Wrapper, Tape, Input, InputMessage, Title, Btn} from './Login.module'
const Contact = () => {
  return (
    <>

        <Nav/>  
    <Wrapper>
        <Title>Login</Title>
      <Tape action="/">
        <Input type="text" name="name" placeholder="Enter your name"/>
        <Input type="text" name="email" placeholder="Email"/>
        <Input type="password" name="password" placeholder="Password"/>
        <Input type="password" name="password1" placeholder="Confirm password"/>
        <Btn>Send</Btn>
      </Tape>
    </Wrapper>
      <Footer/>
    </>
  )
}

export default Contact
