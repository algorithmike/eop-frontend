// TODO: Use this when implementing CreateContent.jsx.
import { gql } from "@apollo/client";

export const CREATE_CONTENT = gql`
  mutation createContent(
    $file: Upload!
    $title: String!
    $coordinates: String!
    $description: String
    $postedFromEop: Boolean
    $customDate: Float
    $eventId: String
  ) {
    createContent(
      data: {
        file: $file
        title: $title
        coordinates: $coordinates
        description: $description
        postedFromEop: $postedFromEop
        customDate: $customDate
        eventId: $eventId
      }
    ) {
      mediaType
      title
      createdAt
      updatedAt
      postedFromEop
      mediaUrl
      mediaPreviewUrl
      description
      customDate
    }
  }
`;
