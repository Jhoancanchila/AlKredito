import styled from 'styled-components';

export const NavMenu = styled.nav`

	display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7C7C7C;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  width:100%;
	z-index:2;

  @media (min-width: 767px) {
    display: none;
  };

	ul{
		position:absolute;
		top:4rem;
	}

  li {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    transition: color 0.3s linear;
    
		 @media (min-width: 375px) {
    font-size: 1.2rem;
    };
		 @media (min-width: 480px) {
    font-size: 1.6rem;
    };

    &:hover {
			cursor:pointer;
			color: rgba(255,255,255,1);
	    background-color:rgba(255,255,255,0.4);
    };
  }

  a{
    text-decoration:none;
    color: rgba(255,255,255,0.75);
  }
`