import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

const ButtonTheme = createTheme({
  palette:{
    primary:{
      main:orange[500],
    },
  },
});



export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="AppBar" position="static" >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book
          </Typography>
          <ThemeProvider theme={ButtonTheme}>
          <Button color="inherit">Login</Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
