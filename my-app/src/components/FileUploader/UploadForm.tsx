import React, { useState, useRef, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DeleteIcon from '@mui/icons-material/Delete';
import './UploaderForm.css';

interface UploaderFormProps {
  accept?: string;
  onSelectFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onDeleteFile: () => void;
  disabled?: boolean;
}

const UploaderForm: React.FC<UploaderFormProps> = ({
  accept,
  onSelectFile,
  onDeleteFile,
  disabled = false,
}: UploaderFormProps) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      onSelectFile(event);
    }
  };

  const onDeleteFileHandler = () => {
    setFile(null);
    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = '';
    }
    onDeleteFile();
  };

  return (
    <div className='file-uploader'>
      <div className={`file-div ${disabled && 'disabled'}`}>
        <Button
          className='attachment-icon'
          onClick={handleClick}
          disabled={disabled}>
          <AttachmentIcon />
          <input
            type='file'
            id='file'
            accept={accept}
            ref={hiddenFileInput}
            onChange={handleChange}
            hidden
            disabled={disabled}
            data-testid='file-upload-input'
          />
          <div className='file-name'>
            {file ? <div>{file.name}</div> : <div>Choose file</div>}
          </div>
        </Button>
      </div>
      <div className={`${disabled && 'disabled'}`}>
        <IconButton
          aria-label='delete'
          disabled={disabled}
          color='primary'
          onClick={onDeleteFileHandler}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UploaderForm;
