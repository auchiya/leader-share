import React from "react"
import styled from "styled-components"

export const BadgeList = () => {
    return (
        <Container>
            <Badge src='https://picsum.photos/200' />
            <Badge src='https://picsum.photos/200' />
            <Badge src='https://picsum.photos/200' />
            <Badge src='https://picsum.photos/200' />
            <Badge src='https://picsum.photos/200' />
            <Badge src='https://picsum.photos/200' />
            <Badge src='https://picsum.photos/200' />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;

    padding: 20px;

    border-top: solid 1px white;
`

const Badge = styled.img`
    height: 30px;
    width: 30px;

    border: 1px solid #00cc2c;
    border-radius: 100%;
`
