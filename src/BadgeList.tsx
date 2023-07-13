import React from "react"
import styled from "styled-components"

import HorseBadge from './assets/badges/horse_badge.png';
import SportsBadge from './assets/badges/sports_badge.png';
import CasinoBadge from './assets/badges/casino_badge.png';

export const BadgeList = () => {

    const handleBadgeClick = () => {

    }

    return (
        <Container>
            <Badge src={HorseBadge} onClick={handleBadgeClick} />
            <Badge src={SportsBadge} onClick={handleBadgeClick} />
            <Badge src={CasinoBadge} onClick={handleBadgeClick} />
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

    cursor: pointer;
`
