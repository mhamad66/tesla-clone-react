import React from 'react'
import styled from 'styled-components'

export default function Section(props) {
  return (
    <Wrapper bgImage={props.backgroundImg}>
      <Content>
        <Title>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Title>
        <Buttons>
          <ButtonsGroup>
            <ButtonLeft>{props.leftBtnText}</ButtonLeft>
            {props.rightBtnText && <ButtonRight>{props.rightBtnText}</ButtonRight>}
          </ButtonsGroup>
          <DownArrow src="images/down-arrow.svg"></DownArrow>
        </Buttons>

      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height:100vh;
width:100vw;
// background:url('/images/model-y.jpg');
background-size:cover;
background-position: center;
background-image: ${props => `url("/images/${props.bgImage}")`};
`
const Content = styled.div`
display:flex;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Title = styled.div`
font-size:1.2rem;
text-transform: capitalize;
margin-top:7%;
text-align:center
`
const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center
`

const ButtonsGroup = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`
const ButtonLeft = styled.button`
width:256px;
height:40px;
border-radius: 5px;
margin-left:20px;
border:none;
background-color:rgba(57, 60, 65,0.8);
color: #FFF;
font-size:1rem;
font-weight:400;
cursor: pointer;
@media (max-width:768px){
 margin-bottom:10px 
}
`
const ButtonRight = styled(ButtonLeft)`
background-color:rgba(252, 253, 255,0.8);
color: #393c41;
`
const DownArrow = styled.img`
width:50px;
text-align:center;
animation: anmationDown infinite 1.5s;
cursor: pointer;

`