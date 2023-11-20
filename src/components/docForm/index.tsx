import { useEffect, useState } from 'react';
import { Button, FormControlLabel, MenuItem, Paper, Radio, RadioGroup, Switch, TextField } from '@mui/material';
import { Close as CloseIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { IDocForm } from './interfaces';
import { DocFormStyled } from './styles';
import { Client } from './Client';
import { DragDropCmp } from './DragDropCmp';

export const DocForm = ({ close }: IDocForm) => {
  const [message, setMessage] = useState('Please Select Import Name!');
  const [importName, setImportName] = useState('');
  const [clientType, setClientType] = useState('single');
  const [toleranceWindow, setToleranceWindow] = useState(true);
  const [file, setFile] = useState<null | string>(null);

  useEffect(() => {
    if (!importName) setMessage('Please Select Import Name!');
    else if (!file) setMessage('Please Upload A Manifest!');
    else setMessage('Data in the import file is correct. Please press Continue to import.');
  }, [importName, file])

  return (
    <DocFormStyled>
      <Paper elevation={8}>
        <Button
          onClick={close}
          variant="contained"
          className="close-button"
        >
          <CloseIcon />
        </Button>
        <div className="form-header">
          <h1>Document Upload</h1>
        </div>
        <div className="form-content">
          <div className="form-content-left">
            <TextField
              select
              value={importName}
              label="Select Import Name:"
              size="small"
              onChange={({ target }) => setImportName(target.value)}
            >
              {[...Array(10)].map((_, i) => (
                <MenuItem key={`Import Name ${i}`} value={`Import Name ${i}`}>
                  {`Import Name ${i}`}
                </MenuItem>
              ))}
            </TextField>

            <div className="divider" />
            <h4>Select Manifest that you'd like to import</h4>

            <DragDropCmp setFile={file => setFile(file)} />

            <div className="divider" />
            <h4>Elapse Data Checking:</h4>
            <h4 className="success-text">No Elapsed Dates!</h4>

            <div className="divider" />
            <h4>Tolerance Window:</h4>
            <div className="form-tolerance-window">
              <FormControlLabel
                control={<Switch defaultChecked />}
                label={`Toggle ${toleranceWindow ? 'ON' : 'OFF'}`}
                onClick={() => setToleranceWindow(!toleranceWindow)}
              />
              <div className="v-divider" />
              <AccessTimeIcon color="primary" />
              <span>Select Tolerance Level</span>
            </div>

          </div>
          <div className="form-content-right">
            <h4>Split schedule using social distancing</h4>
            <RadioGroup defaultValue="true" row>
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>

            <div className="divider" />
            <h4>Location Checking: </h4>
            <h4 className="success-text">All Available!</h4>

            <div className="divider" />
            <h4>Client: </h4>
            <RadioGroup
              value={clientType}
              onChange={({ target }) => setClientType(target.value)}
              defaultValue="single"
              row
            >
              <FormControlLabel value="single" control={<Radio />} label="Single" />
              <FormControlLabel value="multiple" control={<Radio />} label="Multiple" />
            </RadioGroup>
            {[...Array(clientType === 'single' ? 1 : 4)].map((_, i) => (
              <Client key={`client${i}`} title={`Testing Center ${i}`} />
            ))}
          </div>
        </div>
        {message &&
          <div className="form-message">
            <h3>{message}</h3>
          </div>
        }
        <div className="form-actions">
          <Button
            variant="contained"
            disabled={!file || !importName}
          >
            Continue Import
          </Button>
          <Button
            onClick={close}
            color="secondary"
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </Paper>
    </DocFormStyled>
  )
};