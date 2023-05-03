import React from "react";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NavMenu = () => {
    const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
    const theme = useTheme();

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    }

    const handleCloseMenu = () => setMenuAnchor(null);
    
    return (
        <AppBar
            position={'static'}>
            <Container
                maxWidth={'lg'}
                sx={{backgroundColor: theme.customPalette.headerBackground}}>
                <Toolbar disableGutters>
                    <Typography
                        component={'a'}
                        fontFamily={'monospace'}
                        href={'/'}
                        sx={{
                            color: 'inherit',
                            display: {xs: 'none', md: 'flex'},
                            textDecoration: 'none'
                        }}
                        variant={'h5'}
                    >
                        Roy Jackman
                    </Typography>
                    <Box sx={{
                        display: {xs: 'flex', md: 'none'},
                        flexGrow: 1,
                    }}>
                        <IconButton
                            onClick={handleOpenMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchor}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            onBlur={handleCloseMenu}
                            open={Boolean(menuAnchor)}
                            sx={{
                                display: {xs: 'block', md: 'none'}
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}>
                            <MenuItem key={'home'} onClick={handleCloseMenu}>
                                <Typography textAlign={'center'}>
                                    Home
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        component={'a'}
                        href={'/'}
                        sx={{
                            color: 'inherit',
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            textDecoration: 'none'
                        }}
                        variant={'h5'}
                    >
                        Roy Jackman
                    </Typography>
                    <Box sx={{
                        display: {xs: 'none', md: 'flex'},
                        flexGrow: 1,
                        ml: 3
                    }}>
                        <Button
                            href={'/'}
                            LinkComponent={'a'}
                            sx={{
                                color: 'inherit',
                                display: 'block',
                                my: 2,
                                textDecoration: 'none'
                            }}
                        >
                            Home
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavMenu;