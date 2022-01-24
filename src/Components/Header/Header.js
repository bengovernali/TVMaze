import React from 'react'
import styled from 'styled-components'


function Header () {
    return (
        <HeaderWrapper>
            <SiteTitle>TVMaze App</SiteTitle>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    background-color: #001011;
    color: #FFFFFF;
    align-items: center;
    z-index: 99;
`

const SiteTitle = styled.h1`
    margin-left: 20px;
`

export default Header