import React from 'react'
import {Typography} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../../Themes/main';


const TypographyComponents = (props:any) => {
    return (
        <ThemeProvider theme={theme} >
        <Typography variant={props.variant1} mb={1} mt={1}   {...props} >
            {props.children}
        </Typography>
         </ThemeProvider>
    );
}

export default TypographyComponents;