import styled from 'styled-components';
import  {Flexbox} from '../../components/Flexbox';
import {useState} from 'react';

const Container1 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
`

const Title = styled.div`
    font-size: 24px;
    display:inline;
`

const Container2 = styled.div`
    display:flex;
    flex-direction:column;
    border: 0.5px solid #8e6e53;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    margin-left: 5%;
    margin-right:5%;
`

const WordDiv = styled.div`
display:flex;
flex-direction: column;
`

const Name = styled.div`
font-size: 18px;
color:#342e37;
text-align: left;
margin: 15px;
`


export default function Identity(){
    /*function changeBoxshadow(e) {
        e.target.style.boxShadow = ' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
    }

    function changeBoxshadoww(e) {
        e.target.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px';
    }
    */
    return (
        <Container1>
            <Container2 /*onMouseOver={changeBoxshadow} onMouseLeave={changeBoxshadoww}*/>
                <Flexbox></Flexbox>
                <WordDiv>
                    <Name>g g</Name>
                </WordDiv>
            </Container2>
            <Container2>
                <Flexbox></Flexbox>
                <WordDiv>
                    <Name>KAI</Name>
                </WordDiv>
            </Container2>
            <Container2>
                <Flexbox></Flexbox>
                <WordDiv>
                    <Name>senkim</Name>
                </WordDiv>
            </Container2>
        </Container1>
    )
    }
