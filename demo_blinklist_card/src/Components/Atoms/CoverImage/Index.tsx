import { CardMedia } from '@mui/material';
import React from 'react';

type PropsType ={
    
    images:string 
}
function CoverImg({images}:PropsType) {
    return (
       <>
        <CardMedia component="img" image={images}
        height="286" alt='Entrepreneurship BOOK'/>
       </>
    )
}

export default CoverImg