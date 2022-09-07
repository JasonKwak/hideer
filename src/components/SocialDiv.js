import styled from 'styled-components';

const ImgCont = styled.img`
width: 5em;
height: auto;
padding: auto;
margin-left: auto;
margin-right: auto;
margin-bottom:auto;
margin-top:auto;
position: absolute;
z-index: auto;
top: auto;
left:auto;
`


export function SocialDiv({
    onClick=()=>{},
    path="./discord.png", 
    size="1.5em", 
    placement="relative", 
    opacity="100%", 
    padding = "0pt",
    zIndex='auto', 
    marginRight='40%', 
    marginLeft='auto', 
    marginBottom='auto',
    marginTop='auto',
    top= 'auto',
    left='auto',
    display= "block"
    }){
    
    //const [image, setImage] = useState(true)
    //function toggleImg(){
    //            setImage(false)
    //       }
    
    return <ImgCont 
    src={path} 
    style={{display: display,width: size, position: placement, opacity: opacity, zIndex: zIndex, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop,marginBottom: marginBottom, top: top, left:left, padding: padding
    }}
    onClick={onClick}   
    /> 
    }

