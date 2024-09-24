import { Button, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { AppStyled, theme } from './App.styles';
import { DocForm } from './components';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        {!formOpen ?
          <Button
            onClick={() => setFormOpen(true)}
            variant="contained"
          >
            Open Form
          </Button> :
          <DocForm close={() => setFormOpen(false)} />
        }
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
