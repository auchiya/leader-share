import React from "react"
import styled from "styled-components"
import CounterIcon from './assets/counter_icon.png';
import ChipIcon from './assets/chip_icon.png';

export const BetDetails = () => {
    return (
        <Container>
            <BetCount>
                <BetCountIconContainer>
                    <Icon src={CounterIcon} />
                </BetCountIconContainer>
                <Value>
                    375
                </Value>
            </BetCount>
            <Separator />
            <BetGains>
                <Value>
                    1.300€
                </Value>
                <BetGainsIconContainer>
                    <Icon src={ChipIcon} />
                </BetGainsIconContainer>
            </BetGains>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 30px;
    width: 200px;

    border: 1px solid white;
    border-radius: 10px;
`

const BetCount = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`

const BetCountIconContainer = styled.div`
    height: 28px;
    width: 28px;

    background-color: white;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    text-align: center;
`
const Icon = styled.img`
    height: 20px;
    width: 20px;

`

const Value = styled.p`
    flex-grow: 1;
    text-align: center;

    font-size: 14px;
    color: white;

    line-height: 2;

    margin: 0;
`

const Separator = styled.div`
    border-left: 1px solid white;
`

const BetGains = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;

    justify-content: flex-end;
`

const BetGainsIconContainer = styled.div`
    height: 28px;
    width: 28px;

    background-color: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    text-align: center;
`
