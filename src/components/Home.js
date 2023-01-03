import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="model s"
                description="order online for tochless delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"

            />
            <Section
                title="model y"
                description="order online for tochless delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"

            />
            <Section
                title="model 3"
                description="order online for tochless delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"

            />
            <Section
                title="model x"
                description="order online for tochless delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="solar panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="order now"
                rightBtnText="learn more"
            />
            <Section
                title="solar roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="order now"
                rightBtnText="learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="shop now"
            />
        </Container>
    )
}

const Container = styled.div`
height:100vh
`

export default Home
