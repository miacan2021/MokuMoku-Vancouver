import styled from 'styled-components'


export const Body = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    margin:0;
    padding:0;
    background-color:#d8eefe;
    color: #5f6c7b;
`

export const HeroImg = styled.img`
    width: 500px;
    background-image: url(hero.svg);
    background-repeat: no-repeat;
    background-size: 400px;
    background-position: bottom center;
    @media (max-width: 900px) {
        width: 300px;
        background-size: 300px;
       }
`

export const LogoWrapper = styled.div`
    margin: auto;
`


export const Logo = styled.h1`
    font-family: 'Staatliches', cursive;
    font-size: 32px;
    letter-spacing: 5px;
    text-align: center;
    padding: 20px 0;
    color: #3da9fc;
    margin:0;
    padding: 30px;
    background-image: url(cloudy.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250px;
    text-shadow: 0 1px 0 #ccc, 
               0 1px 0 #c9c9c9,
               0 2px 0 #bbb,
               0 3px 0 #b9b9b9,
               0 3px 0 #aaa,
               0 3px 0 rgba(0,0,0,.1),
               0 0 0 rgba(0,0,0,.1),
               0 1px 0 rgba(0,0,0,.3),
               0 2px 0 rgba(0,0,0,.2),
               0 3px 0 rgba(0,0,0,.25),
               0 3px 0 rgba(0,0,0,.2),
               0 3px 0 rgba(0,0,0,.15);
  animation: float_2979 3s linear infinite;
  transform-origin: 50% 50%;
  @keyframes float_2979 {
  0% { transform: translateY(0) }
  33.33333% { transform: translateY(-6px) }
  66.66667% { transform: translateY(0) }
  100% { transform: translateY(0) }
}
  @media (max-width: 900px) {
        font-size: 26px;
        background-size: 200px;
       }

`

export const HeroHeading = styled.h1`
 font-family: 'Mukta', sans-serif;
 font-size: 28px;
`

export const HeroP = styled.p`
    font-family: 'Karla', sans-serif;
    font-size: 18px;
`

// font-family: 'Karla', sans-serif;
// font-family: 'Mukta', sans-serif;
// font-family: 'Staatliches', cursive;
