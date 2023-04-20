import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Home from './Home';

const router = createBrowserRouter([
    {path: '/', element: <Home />},
]);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {default: '#1D2021'},
    },
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