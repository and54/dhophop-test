import { Button, createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useState } from 'react';
import { AppStyled } from './App.styles';
import { DocForm } from './components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#051D59'
    },
    secondary: {
      main: '#FA9D26'
    },
    success: {
      main: '#509A5F'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
        }
      }
    }
  }
});

function App() {
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
