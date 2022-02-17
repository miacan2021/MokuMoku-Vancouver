import styled from 'styled-components'

export const Body = styled.div`
    width: 100vw;
    height: auto;
    margin:0;
    padding:0;
    background-color:#fffe;
    color: #0d0d0d;
`

export const HeroImg = styled.img`
    width: 500px;
    background-image: url(hero.svg);
   background-repeat: no-repeat;
    @media (max-width:768px) {
        width: 300px;
       }
`

export const Logo = styled.h1`
    font-family: 'Staatliches', cursive;
    font-size: 20px;
    letter-spacing: 5px;
    color:#ff8e3c;
`

export const HeroHeading = styled.h1`
    font-family: 'Karla', sans-serif;
    font-size: 28px;
`

export const HeroP = styled.p`
    font-family: 'Karla', sans-serif;
    font-size: 28px;
`

// font-family: 'Karla', sans-serif;
// font-family: 'Mukta', sans-serif;
// font-family: 'Staatliches', cursive;
