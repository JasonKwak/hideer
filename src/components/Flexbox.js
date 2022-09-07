import styled from "styled-components";

const ImageItem = styled.img`
width:20em;
height: auto;
padding: auto;
margin-left: auto;
margin-right: auto;
margin-bottom:auto;
margin-top:auto;
display: block;
z-index: auto;
top: auto;
left:auto;
border-radius:0 0 5px 5px;
`

export function Flexbox({ 
    
onClick=()=>{},
path="/kai.png", 
size="16em", 
opacity="100%", 
padding = "auto",
zIndex='auto', 
marginRight='auto', 
marginLeft='auto', 
marginBottom='auto',
marginTop='auto',
top= 'auto',
left='auto',
display= "block"
}){

return <ImageItem 
src={path} 
style={{display: display,width: size, opacity: opacity, zIndex: zIndex, marginRight: marginRight, marginLeft: marginLeft, marginTop: marginTop,marginBottom: marginBottom, top: top, left:left, padding: padding, 
    //display: image ? "block" : "none"
}}
onClick={onClick}   
/> 
}
