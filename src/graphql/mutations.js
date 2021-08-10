import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      text
      rating
      createdAt
      repositoryId
      user {
        id
        username
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;
