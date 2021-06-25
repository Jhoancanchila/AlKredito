import styled from 'styled-components'

export const SectionMailScreen = styled.section`
${'' /* background-color:#F2F2F2; */}
${'' /* min-height:100vh; */}

`
export const ContainerNav = styled.div`
  display:none;

  @media (min-width: 767px){
  display:block;
  background-color:#d5ddec;
  height:100vh ;
  left:0;
  position:fixed;
  top:0;
  width:6em;
  }
`
export const UlMailScreen = styled.ul`
margin:0;
padding:0;
text-align:center;

& a{
  color:#272727;
  display:block;
  font-size:12px;
  line-height: 13px;
  min-height:90px;
  text-decoration:none;
  text-transform:uppercase;
  padding:11px 0 0;
  vertical-align: middle;
}

`
