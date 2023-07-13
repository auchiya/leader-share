import React from "react"
import styled from "styled-components"
import { BadgeList } from "./BadgeList"
import { BetDetails } from "./BetDetails"

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
                        <BetDetails />
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

    border: 1px solid #00cc2c;
    border-radius: 25px;

    background-color: #343434;
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
    color: white;

    margin: 0;
`

const ShareButton = styled.button`
    height: 40px;
    width: 40px;

    margin: 0;
    padding: 0;
`

