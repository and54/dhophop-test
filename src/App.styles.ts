import { createTheme, styled } from '@mui/material';

export const AppStyled = styled("div")(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.spacing(4)})`,
  width: `calc(100% - ${theme.spacing(4)})`,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  color: theme.palette.primary.main,
  button: {
    textTransform: 'capitalize',
    borderRadius: theme.spacing(1),
  }
}));

export const theme = createTheme({
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