import React from 'react'
import Button from '../Button'
import TextInput from '../TextInput'
import styled from 'styled-components'

const StyledButton = styled(Button)``

const StyledTextInput = styled(TextInput)``

const Wrapper = styled.div`
    width: 50%;
    margin: auto;
`

const InputBar = () => {
    return (
        <Wrapper>
            <StyledTextInput label="Input your commute destination" />
            <StyledButton label="Go" color="default" />
        </Wrapper>
    )
}

export default InputBar
