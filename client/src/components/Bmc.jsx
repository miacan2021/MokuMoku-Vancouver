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
      <h1>Support us</h1>
      <h3>Buy me a coffee</h3>
      <p>For students leaning web development</p>
      <p>Thanks Supporters!</p>
      <BmcCup src="/bmc-cup.png" alt="bmc-cup" />
      <p>+1500! Thanks!!</p>
    </Container>
  )
}

export default Bmc
