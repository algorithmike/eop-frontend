// TODO: Implement this page.
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Box, Button, TextField, Container } from "@material-ui/core";

import { LOG_IN } from "../queries/user";
import { setMe } from "../store/slices/me";

const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    errors: [],
  });

  const [login] = useMutation(LOG_IN, {
    update: (proxy, { data }) => {
      const { token, email, realname, description, profilePicUrl } = data.login;
      localStorage.setItem("eop_auth", token);
      setErrors({});
      props.setMe({ token, email, realname, description, profilePicUrl });
    },
    onError: async (errs) => {
      let errArray = [];
      await new Promise((resolve) => {
        errs.graphQLErrors.forEach((e) => {
          errArray.push(e.message);
        });
        resolve();
      });
      setErrors({ errors: errArray });
    },
    variables: values,
  });

  const onChangeHandler = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login();
  };

  return props.me.token ? (
    <Redirect to="/" />
  ) : (
    <Container maxWidth="xs">
      <form onSubmit={onSubmit} noValidate>
        {Object.keys(errors).length > 0 &&
          Object.values(errors).map((value, index) => (
            // error message
            <Box color="text.primary" key={index}>
              {value}
            </Box>
          ))}
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
        <Button fullWidth type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  me: state.me,
});
const mapDispatchToProps = (dispatch) => ({
  setMe: (me) => dispatch(setMe(me)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
