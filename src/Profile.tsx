import React from "react"
import styled from "styled-components"
import { BadgeList } from "./BadgeList"

export const Profile = () => {
    return (
        <Container>
            <ProfileCard>
                <ProfileDetails>
                    <ProfilePhoto src='https://avatars.githubusercontent.com/u/26380725?v=4'/>
                    <ProfileData>
                        <ProfileName>
                            Arkaitz Vizuete
                        </ProfileName>
                        <BetDetails>
                            130 Bets | 1.300€
                        </BetDetails>
                    </ProfileData>
                    <ShareButton>
                        S
                    </ShareButton>
                </ProfileDetails>
                <BadgeList />
            </ProfileCard>
        </Container>
    )
}

const Container = styled.div`
`

const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;

    height: 200px;
    width: 400px;

    border: 1px solid white;
    border-radius: 25px;

    background-color: #111;
`

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 15px;
`

const ProfilePhoto = styled.img`
    height: 100px;
    width: 100px;

    border-radius: 30px;
`

const ProfileData = styled.div`
    flex-grow: 1;

    padding: 10px;

    text-align: start;
`

const ProfileName = styled.p`
    font-size: 20px;
    font-weight: bold;

    margin: 0;
`

const BetDetails = styled.div`
    display: flex;
    flex-direction: row;
`

const ShareButton = styled.button`
    height: 40px;
    width: 40px;

    margin: 0;
    padding: 0;
`

