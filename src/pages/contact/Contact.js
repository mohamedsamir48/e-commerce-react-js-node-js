import React from 'react'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import {Wrapper, Tape, Input, InputMessage, Title, Btn} from './Contact.module'
const Contact = () => {
  return (
    <>

        <Nav/>  
    <Wrapper>
        <Title>Feel free in writing the message</Title>
      <Tape action="/">
        <Input type="text" name="name" placeholder="Enter your name"/>
        <Input type="text" name="email" placeholder="Email"/>
        <Input type="text" name="subject" placeholder="Subject"/>
        <InputMessage type="text-area" rows={10} name="message" placeholder="Message"/>
        <Btn>Send</Btn>
      </Tape>
      <Title>Only legends can use this website</Title>
    </Wrapper>
      <Footer/>
    </>
  )
}

export default Contact
