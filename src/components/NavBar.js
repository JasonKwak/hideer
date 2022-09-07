import styled from 'styled-components';
import {SocialDiv} from './SocialDiv';
import {NavName, NavPath} from '../data/navdata';
import {LogoDiv} from './LogoDiv';

const NavList = styled.div`
justify-content:end;
list-style: none;
padding-right:50px;
margin-top:25px;
display:flex;
flex-direction:row;
`

const Lists = styled.div`
font-size:14px;
color:#342e37;
font-weight:700;
letter-spacing:0.5px;
padding:5px;
padding-left:13px;
padding-right:13px;
margin-top:20px;
margin-bottom:15px;
margin-left:10px;
margin-right:10px;
cursor:pointer;
border: transparent;
background: transparent;
`

const SocialCont = styled.div`
display:flex;
flex-direction:row;
margin-left: 20px;
margin-top:0px;
`

export function NavBar() {
  return <div>
    <NavList>
    <LogoDiv></LogoDiv>
    <Lists>dfsfds</Lists>
      <SocialCont>
        <SocialDiv/>
        <SocialDiv path="./twitter.png"/>
        <SocialDiv path="./magiceden.png" size="1.75em"/>
      </SocialCont>
    </NavList>
  </div>
}


