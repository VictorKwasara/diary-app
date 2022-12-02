import React, { FC, ReactNode } from 'react';
import {
	createTheme,
	ThemeProvider,
	responsiveFontSizes,
} from '@mui/material/styles';
import Container from '@mui/material/Container';

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      bg: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background?: {
      bg?: string;
    };
  }
}

let theme = createTheme({
	background: {
    bg: "#00C9EE"
  },
	palette: {
		primary: {
			main: "#F34213",
		},
		secondary: {
			main: "#402E32",
		},
	},
});

theme = responsiveFontSizes(theme);

const Theme: FC<{children: ReactNode}> = ({children}) => {
  return (
     <ThemeProvider theme={theme}><Container maxWidth="xl">{children}</Container></ThemeProvider>
  )
}

export default Theme