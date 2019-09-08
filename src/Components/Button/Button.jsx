import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    && {
        margin: 13px;
    }
`

const BasicButton = ({ children, color, onClick }) => {
    return (
        <StyledButton variant="outlined" color={color} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default BasicButton
