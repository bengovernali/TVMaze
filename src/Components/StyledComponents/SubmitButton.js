import styled from "styled-components"

const SubmitButton = styled.button`
    height: 30px;
    width: 80px;
    border-radius: 30px;
    font-weight: bold;
    color: #FFFFFF;
    cursor: ${props => props.disabled ? 'clicker' : 'pointer'};
    background: ${props => props.disabled ? '#6a6a6a' : '#06908F'};
`

export default SubmitButton