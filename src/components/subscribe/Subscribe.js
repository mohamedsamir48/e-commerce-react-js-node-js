import React from 'react'
import {CgEnter} from 'react-icons/cg'
import {Wrapper ,Btn, Box, Title, InputWrapper, Input} from './Subscribe.module'

const Subscribe = () => {
  return (
    <Wrapper>
      <Box>
        <Title>Subscribe</Title>
        <InputWrapper>
            <Input placeholder='type your mail' type="text"/>
            <Btn>
                <CgEnter />
            </Btn>
        </InputWrapper>
      </Box>
    </Wrapper>
  )
}

export default Subscribe
