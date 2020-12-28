import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledNavBar = styled.div `

display: flex;
justify-content: space-between;
`

export default function NavBar () {
    return (
        <StyledNavBar>
            <Link to="/">
            <div>
                home
            </div>
            </Link>
            <Link to="/about">
            <div>about</div>
            </Link>
        </StyledNavBar>
    )
}