import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Home from './Home';

declare module '@mui/material/styles' {
    interface Theme {
        customPalette: {
            [name: string]: string
        }
    }
    interface ThemeOptions {
        customPalette?: {
            [name: string]: string
        };
    }
}

const router = createBrowserRouter([
    {path: '/', element: <Home />},
]);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {default: '#1D2021'},
    },
    customPalette: {
        background: '#1D2021',
        headerBackground: '#282828',
        lighterHeader: '#32302F',
        contentBackground: '#3C3836',
        backgroundHighlight: '#504945',
        foregroundHighlight: '#665C54',
        contrastHighlight: '#7C6F64',
    }
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
};

export default App;