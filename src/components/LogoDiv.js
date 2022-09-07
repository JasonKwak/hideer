import styled from 'styled-components';

const LogoCont = styled.img`
width: 5em;
height: auto;
padding: auto;
margin-left: auto;
margin-right: auto;
margin-bottom:auto;
margin-top:-10px;
position: absolute;
z-index: auto;
top: auto;
left:auto;
`


export function LogoDiv({
    onClick=()=>{},
    path="./hideerlogo.png", 
    size="8em", 
    placement="absolute", 
    opacity="100%", 
    padding = "0pt",
    zIndex='auto', 
    marginRight='20px', 
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
    
    return <LogoCont 
    src={path} 
    style={{display: display,width: size, position: placement, opacity: opacity, zIndex: zIndex, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop,marginBottom: marginBottom, top: top, left:left, padding: padding
    }}
    onClick={onClick}   
    /> 
    }

