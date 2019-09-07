import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    && {
        margin: 13px;
    }
`

const BasicButton = ({ label, color }) => {
    return (
        <StyledButton variant="outlined" color={color}>
            {label}
        </StyledButton>
    )
}

export default BasicButton
