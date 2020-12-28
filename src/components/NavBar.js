import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const StyledNavBar = styled.div `
background-color: white;
width: 100%;
display: flex;
justify-content: space-between;
div {
    margin: 4px;
}
`

export default function NavBar () {
    return (
        <StyledNavBar>
            {/* <Link to="/">
            <div>
                home
            </div>
            </Link>
            <Link to="/about">
            <div>about</div>
            </Link> */}
        </StyledNavBar>
    )
}