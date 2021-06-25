import styled from 'styled-components'

export const DivWrapper = styled.div`
  min-height:45vh;
  margin:30px 15px;
  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));

  @media (min-width: 767px) {
  margin-left:120px;
}
  @media (min-width: 867px) {
  margin-left:150px;
}
  @media (min-width: 910px) {
  margin-left:150px;
}
  @media (min-width: 1280px) {
  margin-left:150px;
}

`