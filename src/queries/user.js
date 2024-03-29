// TODO: Use this when implementing Login.jsx.
import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      username
      email
      realname
      description
      profilePicUrl
    }
  }
`;
