import React from 'react'
import styled from 'styled-components'

function Footer () {
    return (
        <FooterWrapper>
            <p>Ben Governali &#8482;</p>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    width: 100vw;
    height: 40px;
    display: flex;
    justify-content: center;
    background-color: #3AAFB9;
    color: #FFFFFF;
    position: fixed;
    bottom: 0;
`

export default Footer