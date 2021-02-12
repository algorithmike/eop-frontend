import { useMutation, gql } from '@apollo/client';
import React from 'react';


// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!){
//     uploadFile(file: $file){
//       url
//     }
//   }
// `

const CREATE_CONTENT = gql`
  mutation createContent(
    $file: Upload!
    $title: String!
    $coordinates: String!
    $description: String
    $postedFromEop: Boolean
    $customDate: Float
    $eventId: String
    ){
    createContent( 
      data: {
        file: $file,
        title: $title,
        coordinates: $coordinates,
        description: $description,
        postedFromEop: $postedFromEop,
        customDate: $customDate,
        eventId: $eventId
      }
    ){
      mediaType,
      title,
      createdAt,
      updatedAt,
      postedFromEop,
      mediaUrl,
      mediaPreviewUrl,
      description,
      customDate
    }
  }
`

const CreateContent = () => {
    const [createContent] = useMutation(CREATE_CONTENT, {
      context: {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MDE0MzJkLTEwZWMtNDliZC04Y2JiLWJmZWQ5YTNkNmFkZiIsImlhdCI6MTYxMjkzNjE0M30.JOtbWztCYWF0RFA3WQWYo4RTOHGSLHH-OKn7cTtDLFM" // Test
        }
      },
      onCompleted: data => {console.log(data)}
    })

    const handleFileChange = async (event) => {
      const file = event.target.files && event.target.files[0];
      if(!file) return
    
      const data = await createContent({
        variables: {
          file,
          title: "Test Title", // To be wired up.
          coordinates: "123, 456", // To be wired up.
          description: "Test Description", // To be wired up.
          postedFromEop: false, // To be wired up.
          customDate: undefined, // To be wired up.
          eventId: undefined // To be wired up.
        }
      })

      // uploadFile({
      //   variables: {file}
      // })
    }

    return (
      <div>
        <p>This is the Upload component.</p>
        <input type='file' onChange={handleFileChange}/>
      </div>
    )
  };
  
  export default CreateContent;