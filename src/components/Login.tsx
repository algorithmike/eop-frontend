import React from 'react';
import { Button, TextField, Container } from '@material-ui/core';


const Login = () => {
    return (
        <Container maxWidth="xs">
            <form noValidate>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
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