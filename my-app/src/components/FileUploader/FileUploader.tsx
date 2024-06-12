import React, { ChangeEvent } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

import { CustomUploadButton } from './UploadButton';
import UploadForm from './UploadForm';
import axios from 'axios';
import FormData from 'form-data';

function FileUploader() {
  const [uploadProgress, setUploadProgress] = React.useState(0);

  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const onSelectFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSuccess('');
    setError('');

    if (!e.target.files) {
      return null;
    }
    setUploadProgress(0);
  };

  const onDeleteFileHandler = () => {
    setUploadProgress(0);
    setSuccess('');
    setError('');
  };

  const uploadFile = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (!fileInput || !fileInput.files) {
      return;
    }

    const file = fileInput.files[0];
    if (!file) {
      return;
    }

    let data = new FormData();
    data.append('file', file, file.name);

    axios
      .post('/api/upload', data, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data`,
        },
        onUploadProgress: (progressEvent) => {
          if (!progressEvent.total) {
            return;
          }
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      })
      .then(() => {
        setUploadProgress(100);
        setSuccess('Uploaded!');
      })
      .catch((error) => {
        setUploadProgress(0);
        setError(`Failed to Upload! \n ${error}`);
        // handle error here
      });
  };

  return (
    <div className='space-y-4'>
      <div className='flex flex-row justify-center space-x-4'>
        <UploadForm
          onSelectFile={onSelectFileHandler}
          onDeleteFile={onDeleteFileHandler}
        />
        <CustomUploadButton uploadOnClick={uploadFile} />
      </div>
      {error && <Alert severity='error'>{error}</Alert>}
      {success && (
        <Alert
          //icon={<CheckIcon fontSize='inherit' />}
          severity='success'>
          {success}
        </Alert>
      )}
      <LinearProgress
        variant='determinate'
        value={uploadProgress}
      />
    </div>
  );
}

export default FileUploader;
