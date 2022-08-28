import { Container } from '@mui/material'
import React from 'react'
import { BmcCup } from '../style/bmc'

const Bmc = () => {
  return (
    <Container
      id="bmc"
      sx={{
        background: '#fff',
        padding: '5px',
      }}
    >
      <h1>Buy me a coffee</h1>
      <p>My Story</p>
      <p>For students</p>
      <p>Support us</p>
      <p>Thanks Supporters!</p>
      <BmcCup src="/bmc-cup.png" alt="bmc-cup" />
      <p>+1500! Thanks!!</p>
    </Container>
  )
}

export default Bmc
