import { styled } from '@mui/material';

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