import {Typography} from '@mui/material'


type PropsType = {
   children:string 
}

function TypographyCom(props:PropsType) {
    return (
      <div>
      <Typography gutterBottom variant='h6' component='div'>
         {props.children}
      </Typography>
      
      </div>
    )
}

export default TypographyCom