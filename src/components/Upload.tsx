import { useMutation, gql } from '@apollo/client';
import React from 'react'


const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!){
    uploadFile(file: $file){
      url
    }
  }
`

const Upload = () => {
    const [uploadFile] = useMutation(UPLOAD_FILE, {
      onCompleted: data => {console.log(data)}
    })

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if(!file) return
    
      uploadFile({
        variables: {file}
      })
    }

    return (
      <div>
        <p>This is the Upload page.</p>
        <input type='file' onChange={handleFileChange}/>
      </div>
    )
  };
  
  export default Upload;