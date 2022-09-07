import styled from 'styled-components';
import {ImgDiv} from '../../components/Images'


const BannerDiv = styled.div`
height: 500px;
width: 100vw;
display:flex;
justify-content:center;
align-content:center;
align-items:center;
margin-top:2%;
margin-bottom:8%;
`

const Footer = styled.div`
font-size: 12px;
line-height:0.1;
display:flex;
justify-content:center;
text-align:center;
`

export default function Home(){
  return(
    <div>
  <BannerDiv><ImgDiv path="./banner.png" size="45em" marginTop="-75px"></ImgDiv></BannerDiv>
  <Footer>Hi Deer, 2022
    All Rights Reserved.
  </Footer>

</div>
  )
}