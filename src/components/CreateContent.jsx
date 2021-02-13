import { useMutation, gql } from '@apollo/client';
import { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


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

const CreateContent = (props) => {
  const [values, setValues] = useState({
      title: 'Untitled',
      coordinates: '123, 456',
      description: 'Test Description',
      postedFromEop: false,
      eventId: undefined // Add event selector dropdown for this.
  })

  const [createContent] = useMutation(CREATE_CONTENT, {
    context: {
      headers: {
          "Authorization": `Bearer ${props.me.token}`
      }
    },
    onCompleted: data => {console.log(data)},
    onError: (errs) => {
      console.log(errs) // Add error handling.
    }
  })

  const handleFileChange = async (event) => {
    const file = event.target.files && event.target.files[0];
    if(!file) return
  
    const data = await createContent({
      variables: {
        file,
        ...values
      }
    })

    // uploadFile({
    //   variables: {file}
    // })
  }

  return (!props.me.token) ? <Redirect to="/login" /> 
  : (
    <div>
      <p>This is the Upload component.</p>
      <input type='file' onChange={handleFileChange}/>
    </div>
  )
};

const mapStateToProps = (state) => ({
    me: state.me
})

export default connect(mapStateToProps)(CreateContent); 