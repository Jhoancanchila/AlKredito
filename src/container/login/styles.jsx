import styled from 'styled-components'
import { Link as AncleGoHome } from 'react-router-dom'

export const SectionLogin = styled.section`
  align-items: center;
  background-color:#FDE200;
  display: flex;
  justify-content: center;
  min-height:85vh;
  @media (max-width: 400px) {
  min-height:73vh;
}
`
export const SectionContainerLogin = styled.section`
 text-align:center;

 @media (max-width: 400px) {
  width:310px;
}
`
export const DivTittleAlkredito = styled.div`
  background-color:#FDE200;
  color:#fefefe;
& a{
  @media (max-width: 400px) {
  font-size:65px;
}
}
`
export const Link = styled(AncleGoHome)`
  font-size:100px;
  color:#EB1C23;
    text-decoration:none;
`
export const DivContainerLogin = styled.div`
 background-color: #fefefe;
  border: 2px solid white;
  border-radius: 8px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  color:  #6f717e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 35px;

  & h2{
    font-family: 'Quicksand', sans-serif;
  };
  p{
    margin:5px 0;
  };
  a{
    color:#EB1C23;
    text-decoration:none;
  }
`
export const FormLoginContainer = styled.form`
  display: flex;
  flex-direction: column;

`

export const InputLogin = styled.input`
  background-color: transparent;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-bottom:2px solid #EBEBEB;
  color:#2d2d2d;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  padding:10px;
  margin:5px 0;
  outline:none;

`
export const ButtonForm = styled.button`
 background-color:grey;
 border:none;
 border-radius:15px;
 color:white;
 cursor:pointer;
 font-weight: bold;
 font-family: 'Quicksand', sans-serif;
 font-size:16px;
 height:40px;
 margin:10px 0;
 letter-spacing: 1px;
 outline:none;

`