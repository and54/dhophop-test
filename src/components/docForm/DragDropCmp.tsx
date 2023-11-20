import { useEffect, useState } from 'react';
import { Box, Button, LinearProgress } from '@mui/material';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { TextSnippet as TextSnippetIcon, UploadFile as UploadFileIcon } from '@mui/icons-material';
import { DragStyled } from './styles';
import { IDragDropCmp } from './interfaces';

export const DragDropCmp = ({ setFile }: IDragDropCmp) => {
  const [progress, setProgress] = useState(0);
  const { getRootProps, getInputProps, open, acceptedFiles, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      noClick: true,
      noKeyboard: true,
      multiple: false,
    });

  const { path, size } = acceptedFiles[0] as FileWithPath || {};

  useEffect(() => {
    setFile(path || '');
    setProgress(0);
    if (path) {
      const timer = setInterval(() => {
        setProgress((op) => {
          if (op >= 100) clearInterval(timer);
          return op >= 100 ? 100 : op + 5;
        });
      }, 500);
      return () => clearInterval(timer);
    }
  }, [path]);

  return (
    <DragStyled {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
      <div className="drag-container">
        <div className="drag-area">
          <input {...getInputProps()} />
          <TextSnippetIcon color="secondary" />
          <p>Drag & Drop Here Or <b>Browse</b></p>
        </div>
        <Button onClick={open} variant="contained">
          Upload Manifest
        </Button>
      </div>
      {path &&
        <div className="drag-loading">
          <UploadFileIcon color="secondary" />
          <div className="drag-progress">
            {progress < 100 ?
              <>
                <div className="drag-text-progress">
                  <span>{path}</span>
                  <span>{size}KB</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  color="secondary"
                />
              </> :
              <span>File Uploaded <b>{path}</b></span>
            }
          </div>
        </div>
      }
    </DragStyled>
  )
}