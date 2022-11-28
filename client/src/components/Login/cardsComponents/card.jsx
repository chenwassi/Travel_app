import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';

export default function CardComponent({image,info,name,location,coords}) {
    const navigate= useNavigate()
    const [cordsState,setCordsState] = useState([])
const scroll = ()=>{
window.scroll({top:0,behavior:'smooth'})
}
 return(
  <Card sx={{ maxWidth: 300}} style={{height:'100%'}} >
      <CardMedia 
        style={{width:'400px',height:'300px'}}
        component="img"
        image={image}
        alt={location}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name},{location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>{navigate('/PlacePage');scroll()}} size="small">learn more</Button>
        <Button onClick={()=>{
        navigate(`/Map/${coords[0]}/${coords[1]}`)
        scroll()}} 
        size ="small">map view</Button>
     </CardActions>
    </Card>
 )}