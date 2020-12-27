import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {Link} from 'react-router-dom'

const StyledNavBar = styled.div `
${tw `
  bg-white
  md:text-xl
  flex justify-between px-4 md:px-12
  py-2
`}
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