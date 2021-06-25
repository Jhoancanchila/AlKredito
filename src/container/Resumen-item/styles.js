import styled from 'styled-components'

export const DivResumen = styled.div`
display:grid;
grid-gap:20px;
justify-content:center;

& article{
  box-shadow:0 3px 3px rgb(0 0 0 / 10%);
  background-color:#FFFFFF;
  padding:15px;
  min-height:120px;
  border-radius:7px;

  @media (min-width: 540px) {
  width:500px;
}
  @media (min-width: 767px) {
  width:630px;
}
  @media (min-width: 1024px) {
  width:800px;
}
  @media (min-width: 1280px) {
  width:900px;
}
}
.art-personal-info{
    display:flex;
    flex-direction:column;
    font-size:18px;
    font-weight:500;
    width:100%

    @media (min-width: 480px) {
    font-size:21px;
    width:100%;
    };
    @media (min-width: 600px) {
    font-size:21px;
    width:100%;
    };
    @media (min-width: 767px) {
    display:flex;
    font-size:18px;
    flex-direction:row;
    width:100%;
    & .borderDiv{
    border-left:1px solid grey;
    border-top:none;
    padding:0 0 0 10px;
    
  }
    };
    @media (min-width: 1024px) {
    display:inline-flex;
    font-size:21px;
    width:100%;
    };

    & div{
      margin:10px;
    }
  }
  .borderDiv{
    border-top:1px solid grey;
    padding:0 0 0 10px;
    
    p{
      text-transform:uppercase;
    }
  }
  button{
    border:none;
    border-radius:5px;
    cursor:pointer;
    padding:10px;
    width:100%;
    background-color:#FF0000;
    color:#fefefe;
    outline:none;
    margin:50px 0 0 0;
  }
  .resumen__cuenta{
    width:100%;
    display:flex;
    flex-direction:column;

    & .resumen__cuenta-detail{
      display:flex;
      justify-content:space-between;
      margin-top:10px;

        & .cupo__aprobado{
           color:#8490FF;
           };
          .saldo__deuda{
           color:#FFDD87;
           };
          .cupo__disponible{
           color:#66A76F;
           };
      };
  }
  .resumen__cuenta-factura{
    width:100%;
    display:inline-flex;
    justify-content:space-between;
    margin-top:10px;
  }
  .style__factura{
    color:red
  }
  .detail__factura{
    width:100%;
    height:2em;
    background-color:#EBEBEB;
    display:inline-flex;
    justify-content:space-between;
    margin-top:10px;
    button{
    margin:0
    }
  }
 
`