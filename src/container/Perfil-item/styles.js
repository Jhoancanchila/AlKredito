import styled from 'styled-components'

export const DivPerfil = styled.div`
display:grid;
grid-gap:20px;
justify-content:center;

& article{
  box-shadow:0 3px 3px rgb(0 0 0 / 10%);
  background-color:#FFFFFF;
  padding:15px;
  min-height:120px;
  border-radius:7px;
  width:330px;
  span{
    font-size:13px;
  };
 .info__nombre{
   margin:0 0 20px 0;
 }
 @media (min-width: 480px) {
  width:430px;
 }
 @media (min-width: 600px) {
  width:570px;
 }
 @media (min-width: 767px) {
  width:620px;
 }
 @media (min-width: 990px) {
  width:890px;
  .container__article{
    display:flex;
    justify-content: space-between;
    padding:10px 70px 0;
  }
  span{
    font-size:15px;
  };
  p{
    font-size:20px;
  };
 }
};
.art-update-info{
    display:flex;
    flex-direction:column;

  button{
    border:none;
    border-radius:5px;
    cursor:pointer;
    padding:10px;
    width:100%;
    background-color:#FF0000;
    color:#fefefe;
    outline:none;
    margin:20px 0 0 0;
  };
}
`
export const DivWrapperForm = styled.div`
display:grid;
grid-gap:20px;
justify-content:center;

`
export const FormUpdateInfo = styled.form`
display: grid;
flex-direction: column;
margin-top:20px;
min-width:300px;


 @media (min-width: 990px) {
   grid-template-columns:1fr 1fr;
   grid-gap:20px;
   width:700px;

 }
div{
  display:flex;
  flex-direction:column;
  margin:5px 0;
}
`
export const InputUpdateInfo = styled.input`
  background-color: #FAFAFA;
  border:1px solid #BCBCBC;
  border-radius:5px;
  color:#2d2d2d;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  padding:10px;
  margin:5px 0;
  outline:none;
  width:inherit;
`