import styled from 'styled-components'

export const DivCardsBody = styled.div`
background-color:#fff;
box-shadow:0 3px 5px rgba(0,0,0,.2);
border-radius:5px;
height:28vh;
${'' /* margin:15px; */}
text-align:center;
`
export const DivContentCards = styled.div`
display:flex;
flex-direction:column;
padding-top:30px;
`
export const TittleCards = styled.h2`
font-size:26px;
font-weight:500;
line-height:26px;
color:#020202;
style:normal;
`
export const ParrafoCards = styled.p`
font-size:15px;
font-weight:400;
line-height:19px;
color:#000000;
style:normal;
margin-top:20px;
`
export const ButtonCardsBody = styled.button`
background-color:#FF0000;
border-radius:5px;
border-color:#FF0000;
box-shadow: 0 6px 5px rgba(0,0,0,.2);
color:white;
cursor:pointer;
margin:20px;
padding:8px;
text-align:center;
outline:none;
&:hover {
  opacity:.6;
}
`