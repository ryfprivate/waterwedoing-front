import React from 'react'
import Button from '../Button'
import TextInput from '../TextInput'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    && {
        margin: auto;
        color: green;
        background-color: black;
    }
`

const StyledTextInput = styled(TextInput)`
    && {
        color: green;
    }
`

const Wrapper = styled.div`
    margin-top: 15%;
`

const InputBar = () => {
    return (
        <Wrapper>
            <StyledTextInput label="Input asdfa" />
            <StyledButton label="Go" color="default" />
        </Wrapper>
    )
}

export default InputBar
