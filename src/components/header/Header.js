import React from 'react'
import styled from 'styled-components'
import {GiBabyBottle} from 'react-icons/gi'


const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
`
const StyledHeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 50px;
    font-family: 'Chewy', cursive;
    font-size: 35px;
    margin-left: 50px;
    text-transform: uppercase;

`
const StyledHeaderBasket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 50px;
`
const StyledHeaderBasketCircle = styled.div`
    display: flex;
    position: absolute;
    margin-right: 30px;
    margin-bottom: 30px;
    width: 18px;
    height: 18px;
    border-radius: 20px;
    background-color: black;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    
`

const Header = () => {
    return (
        <>
            <StyledHeaderContainer>
                <StyledHeaderLogo>gym shakes</StyledHeaderLogo>
                <StyledHeaderBasket>
                    <GiBabyBottle style={{width:'50px', height:'50px'}} />
                    <StyledHeaderBasketCircle>0</StyledHeaderBasketCircle>
                </StyledHeaderBasket>
            </StyledHeaderContainer>
            
        </>
    )
}

export default Header
