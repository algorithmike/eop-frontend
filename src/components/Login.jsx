import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import { Box, Button, TextField, Container } from '@material-ui/core';

const LOG_IN = gql`
    mutation login (
        $email: String!
        $password: String!
    ){
        login(
            email: $email
            password: $password
        ){
            token
        }
    }
`        

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        errors: []
    })

    const [login, {loading}] = useMutation(LOG_IN, {
        update: (proxy, {data}) => {
            const token = data.login.token;
            console.log(token);
            setErrors({})
        },
        onError: async (errs) => {
            let errArray = []
            await new Promise(resolve => {
                errs.graphQLErrors.forEach(e => {
                    errArray.push(e.message)
                })
                resolve()
            })
            setErrors({errors: errArray})
        },
        variables: values
    })

    const onChangeHandler = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        login();
    }

    return (
        <Container maxWidth="xs">
            <form
                onSubmit={onSubmit}
                noValidate
            >
                {Object.keys(errors).length > 0 && (
                    Object.values(errors).map((value, index) => (
                        // error message
                        <Box color="text.primary" key={index}>{value}</Box>
                    ))
                )}
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChangeHandler}
                />
                <TextField
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={onChangeHandler}
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                >
                    Sign In
                </Button>
            </form>
        </Container>
    );
}

export default Login