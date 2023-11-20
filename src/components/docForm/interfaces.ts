import { Theme } from '@mui/material';
import { ComponentProps, PropsWithChildren } from 'react';

export interface IDocForm {
  close: () => void;
}

export interface IClient {
  title: string;
}

export interface IDragStyled extends PropsWithChildren<ComponentProps<'div'>> {
  isFocused: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}

export interface IDragDropCmp {
  setFile: (file: string) => void;
}