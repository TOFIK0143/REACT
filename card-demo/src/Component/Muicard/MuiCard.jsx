import React from 'react';
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";


export const MuiCard = () => {
    return(
        <Box width='300px'>
            <Card>
                <CardMedia component='img' height='140'
                image='https://source.unsplash.com/random' alt='image' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='Div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        React is a Javascript library for building the user interface
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
            
        </Box>
    );
}

