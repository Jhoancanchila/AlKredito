import styled from 'styled-components';

export const DivImgCarrousel = styled.div`
`
export const Img = styled.img`
height:auto;
object-fit:cover;
width:100%;

@media (min-width: 576px) {
height:50vh;
}
@media (min-width: 767px) {
height:65vh;
}
@media (min-width: 1024px) {
height:75vh;
}

`
