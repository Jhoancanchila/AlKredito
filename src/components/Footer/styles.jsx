import styled from 'styled-components'

export const DivFooter = styled.div`
align-items:center;
background:#fefefe;
border-top:3px solid #ebebeb;
display:flex;
height:35vh;
justify-content:center;
width:100%;

@media (min-width: 767px) {
  height:45vh;
}
`
export const DivFooterElement = styled.div`
color:#000000;
font-size:.8rem;
font-weight:500;
font-style:normal;
text-align:center;

& p{
  line-height:28px;
}
& a{
  color:red;
  text-decoration:none;
}
@media (min-width: 767px) {
  font-size:.9rem;
};
`