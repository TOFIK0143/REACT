import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function Icon(){
    return (
        <Stack direction="row" spacing={2}>    
    <Button variant="outlined" startIcon={<DeleteIcon />}>
        Cancel
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Ready
      </Button>
      </Stack>
    );
}   

export default Icon;