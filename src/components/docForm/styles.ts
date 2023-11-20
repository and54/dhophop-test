import { styled } from '@mui/material';
import { IDragStyled } from "./interfaces";

export const DocFormStyled = styled('div')(({ theme }) => ({
  width: '100%',
  '.MuiPaper-root': {
    maxWidth: 960,
    margin: '0 auto',
    padding: theme.spacing(10),
    borderRadius: theme.spacing(3),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    color: 'inherit',
    button: {
      minWidth: 200,
    },
    '.close-button': {
      padding: theme.spacing(1),
      minWidth: 'fit-content',
      position: 'absolute',
      top: theme.spacing(4),
      left: theme.spacing(4),
    },
    '.form-header': {
      alignSelf: 'center',
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      h1: {
        width: 'fit-content',
        margin: `${theme.spacing(1)} 0`,
      }
    },
    '.form-content': {
      display: 'flex',
      gap: theme.spacing(8),
      h4: {
        margin: `-${theme.spacing(1)} 0`,
      },
      '.success-text': {
        color: theme.palette.success.main,
      },
      '.divider': {
        borderBottom: `1px solid ${theme.palette.grey[400]}`,
        width: '100%',
        maxWidth: 280,
      },
      '.v-divider': {
        borderLeft: `1px solid ${theme.palette.primary.main}`,
        height: '100%',
        maxHeight: theme.spacing(3),
        marginRight: theme.spacing(1),
      },
      '> div': {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
      },
      '.form-content-left': {
        flex: 4,
        '.form-tolerance-window': {
          display: 'flex',
          gap: theme.spacing(1),
          margin: `-${theme.spacing(2)} 0`,
          alignItems: 'center',
        },
      },
      '.form-content-right': {
        flex: 3,
      },
      '.MuiInputBase-root': {
        color: 'inherit',
        borderRadius: theme.spacing(1),
      },
      '.MuiFormLabel-root': {
        color: 'inherit',
        fontWeight: 'bold',
        fontSize: 15,
      },
      '.MuiFormGroup-root': {
        margin: `-${theme.spacing(2)} 0`,
      },
    },
    '.form-message': {
      alignSelf: 'center',
      margin: `-${theme.spacing(3)} 0`,
    },
    '.form-actions': {
      display: 'flex',
      alignSelf: 'center',
      gap: theme.spacing(2),
    },
  },
  [theme.breakpoints.down('md')]: {
    '.MuiPaper-root .form-content': {
      flexDirection: 'column',
    }
  },
  [theme.breakpoints.down('sm')]: {
    '.MuiPaper-root': {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(10),
    }
  }
}));

export const ClientStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  'span': {
    flex: 1,
  },
  '.MuiFormControl-root': {
    flex: 1,
  },
  'button.MuiButtonBase-root.MuiIconButton-root': {
    flex: 0,
    minWidth: 'auto',
    borderRadius: '50%',
  }
}));

export const DragStyled = styled('div')<IDragStyled>(({ theme, isDragAccept, isDragReject, isFocused }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  '.drag-container': {
    padding: theme.spacing(2),
    width: 'auto',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    '.drag-area': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      borderRadius: theme.spacing(1),
      border: 2,
      textAlign: 'center',
      borderColor: isDragAccept ?
        theme.palette.success.main :
        isDragReject ?
          theme.palette.error.main :
          isFocused ?
            theme.palette.primary.main :
            theme.palette.grey[300],
      borderStyle: 'dashed',
      outline: 'none',
      transition: 'border .24s ease-in-out',
    },
    button: {
      maxWidth: 200,
      margin: '0 auto',
    },
  },
  '.drag-loading': {
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
    margin: `-${theme.spacing(2)} 0`,
    '.drag-progress': {
      flex: 1,
      '.drag-text-progress': {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
      }
    }
  },
}));