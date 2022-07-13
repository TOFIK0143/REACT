import { Card } from '@mui/material'
import CoverImg from '../../Atoms/CoverImage/Index'
import TypographyCom from '../../Atoms/Typography/Typography'
import Index from '../../Atoms/TimeIcon/TimeIcon'
import HorizontalIcon from '../../Atoms/IconHorizontal/HorizontalIcon'

function BookCardM() {
    return (
        <Card sx={{height:"500px", width:"300px"}}>
            <CoverImg images='2.png'/>
            <TypographyCom>Beyond Enterpreneurship</TypographyCom>
            <TypographyCom>Jim Collins & Bill Lazier</TypographyCom>
             <Index/>
             <div className='dot'>
            <HorizontalIcon/>
            </div>
        </Card>
    )
}

export default BookCardM