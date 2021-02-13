import { useMutation } from '@apollo/client';
import { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CREATE_CONTENT } from '../queries/content';

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