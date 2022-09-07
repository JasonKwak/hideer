import "./styles.css"
import {SocialDiv} from './SocialDiv';
import styled from 'styled-components';

const SocialCont = styled.div`
display:flex;
flex-direction:row;
margin-right:10%;
`

const Lists = styled.li`
font-size:14px;
color:#342e37;
`


export function Navbar () {
    return (
    <nav className="nav">
        <a href="/" className="deer-logo"><img src="hideerlogo2.png" className="logo" alt="logo"></img></a>
        <ul>
            <Lists>
                <a href="/">HOME</a>
                <a href="/campfire">CAMPFIRE</a>
                <a href="/identity">IDENTITY</a>
                <a href="/faq">FAQ</a>
                <a href="/gallery">GALLERY</a>
            </Lists>
        </ul>
        <SocialCont>
        <SocialDiv/>
        <SocialDiv path="./twitter.png"/>
        <SocialDiv path="./magiceden.png" size="1.75em"/>
      </SocialCont>
    </nav>
    
    )
}