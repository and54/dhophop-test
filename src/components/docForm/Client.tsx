import { useState } from 'react';
import { TextField, MenuItem, IconButton } from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { IClient } from './interfaces';
import { ClientStyled } from './styles';

export const Client = ({ title }: IClient) => {
  const [client, setClient] = useState('');
  return (
    <ClientStyled>
      <span>{title}</span>
      <TextField
        select
        value={client}
        label="Select Client"
        size="small"
        onChange={({ target }) => setClient(target.value)}
      >
        {[...Array(10)].map((_, i) => (
          <MenuItem key={`Client ${i}`} value={`Client ${i}`}>
            {`Client ${i}`}
          </MenuItem>
        ))}
      </TextField>
      <IconButton>
        <AccessTimeIcon color="primary" />
      </IconButton>
    </ClientStyled>
  )
}