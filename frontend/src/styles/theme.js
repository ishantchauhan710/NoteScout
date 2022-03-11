import { createTheme } from "@material-ui/core";

export const appTheme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#5f50e4',
            darker: '#ff2424',
          },
        secondary: {
            main: '#5f50e4',
            darker: '#3b28e7',
          }, 
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
});