import React from 'react'
import suburbs from '../../data/suburbs'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '../Button'
import styled from 'styled-components'

const suburbArray = []

suburbs.map((value, key) => {
    suburbArray.push(value['suburb'])
    return key
})

const Form = styled.form`
    margin: 10%;
`

const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        display: 'flex',
        width: 200,
        margin: '3% auto',
    },
}))

const FormInput = () => {
    const classes = useStyles()
    const [suburb, setSuburb] = React.useState('')
    const [open, setOpen] = React.useState(false)

    function handleChange(event) {
        setSuburb(event.target.value)
        console.log('suburb: ', suburb)
    }

    function handleClose() {
        setOpen(false)
    }

    function handleOpen() {
        setOpen(true)
    }

    return (
        <Form autoComplete="off">
            <Button className={classes.button} onClick={handleOpen}>
                Select your commute destination
            </Button>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">
                    Suburb
                </InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={suburb}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'demo-controlled-open-select',
                    }}
                >
                    {suburbArray.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Button color="primary" className={classes.button}>
                Submit
            </Button>
        </Form>
    )
}

export default FormInput
