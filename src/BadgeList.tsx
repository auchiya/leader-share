import React from "react"
import styled from "styled-components"

export const BadgeList = () => {
    return (
        <Container>
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

    padding: 10px;

    border-top: solid 1px white;
`

const Badge = styled.img`
    height: 35px;
    width: 35px;

    border-radius: 100%;
`
