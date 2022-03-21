import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";

const StyledHeaderTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height 30px;
    background-color: black;
    text-transform: uppercase;
    color: white;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 5px;

`

const Banner = () => {


    return (
        <StyledHeaderTop>
            <p>welcome to Gym Shakes</p>
        </StyledHeaderTop>
    )
}

export default Banner
