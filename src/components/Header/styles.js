import styled from 'styled-components'
import { Link as AncleIniciarSesion } from 'react-router-dom'

export const HeaderContainer = styled.header`
display:block;
background-color:#FDE200;
height:17vh;

@media (min-width: 576px) {
  display:flex;
  height:10vh;
  justify-content:space-between;
  align-items:start;
}
@media (min-width: 1024px) {
  display:block;
height:17vh;

}

`
export const DivContainer = styled.div`
display:flex;
width:100%;
font-family:'Roboto Condensed', sans-serif;
font-size:27px;
letter-spacing:2px;
line-height:30px;
align-items:center;
justify-content:space-between;
color:#FF0000;
padding:15px 20px;

@media (min-width: 576px) {
  font-size:20px;
  font-style:italic;
}
@media (min-width: 1024px) {
  display:block;
  font-size:40px;
  letter-spacing:2px;
  margin:0 0 0 21em;
}
`
export const DivIniciarSesion = styled.div`
background:#FF0000;
font-family:'Roboto Condensed', sans-serif;
line-height:50px;
margin:0 0 0 20px;
width:35%;
border-radius:0 0 5px 5px;
text-align:center;

@media (min-width: 1024px) {
  max-width:15%;
  margin-left:8em;
}
`
export const Link = styled(AncleIniciarSesion)`
color:#fefefe;
text-decoration:none;
cursor:pointer;
`