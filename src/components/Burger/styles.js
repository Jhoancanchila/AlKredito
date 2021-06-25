import styled from 'styled-components';

export const Header = styled.header`
background-color:#FDD50F;
width:100%;
height:10vh;
`
export const AncleMenu = styled.a`
  cursor:pointer;
  display: inline-block;
	height: 23.3px;
  margin:3.2vh 20px;
	position: relative;
  text-decoration:none;
	width:30px;
	z-index: 10;

  @media (min-width:767px){
    display:none
  };
  &:focus {
    outline: none;
  }

  & span{
  width: 100%;
	height: 4px;
	border-radius: 4px;
	display: block;
	position: absolute;
	background: #fff;
	transition: all 0.25s ease; /* Propiedades a animar | Tiempo | Tipo animación*/
	transform-origin : 1px;
    
   :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      top: calc(50% - 2px);
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      bottom: 0;
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  };

`