import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image1 from '../images/redmi9.jpg';
import image2 from '../images/oppoa31.jpg';
import image3 from '../images/realmenarzo.jpg';
import image4 from '../images/samsungm12.jpg';
import image5 from '../images/samsungm31.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';

export default function Card_Component() {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent:'space-evenly',
      p: 1,
      m: 1,
      bgcolor: 'background.paper',
    }}
  >
    <Card sx={{ width: 250,
     display: 'flex',
     flexDirection:'column',
     justifyContent:'space-around'
      }}>
      <CardActionArea>
        <CardContent>
        <img src={image1} alt="" />
          <Typography gutterBottom variant="h5" color="primary" component="div">
          Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage) 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          2.3GHz Mediatek Helio G35 Octa core Processor
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
          display: 'flex',
          justifyContent: 'center',
          }}>
        <Button size="small" color="primary">
        <AddShoppingCartIcon  color="primary" />   Add to Cart
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ width: 250,
     display: 'flex',
     flexDirection:'column',
     justifyContent:'space-around'
      }}>
      <CardActionArea>
        <CardContent>
        <img src={image2} alt="" />
          <Typography gutterBottom variant="h5" color="primary" component="div">
          OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          with No Cost EMI/Additional Exchange Offers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
          display: 'flex',
          justifyContent: 'center',
          }}>
        <Button size="small" color="primary">
        <AddShoppingCartIcon  color="primary" />   Add to Cart
        </Button>
      </CardActions>
    </Card>
    
    <Card sx={{ width: 250,
     display: 'flex',
     flexDirection:'column',
     justifyContent:'space-around'
      }}>
      <CardActionArea>
        <CardContent>
        <img src={image3} alt="" />
          <Typography gutterBottom variant="h5" color="primary" component="div">
          realme narzo 50A (Oxygen Green, 4GB RAM + 128GB Storage)
          </Typography>
          <Typography variant="body2" color="text.secondary">
          - with No Cost EMI/Additional Exchange Offers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
          display: 'flex',
          justifyContent: 'center',
          }}>
        <Button size="small" color="primary">
        <AddShoppingCartIcon  color="primary" />   Add to Cart
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ width: 250,
     display: 'flex',
     flexDirection:'column',
     justifyContent:'space-around'
      }}>
      <CardActionArea>
        <CardContent>
        <img src={image4} alt="" />
          <Typography gutterBottom variant="h5" color="primary" component="div">
          Samsung Galaxy M12 (Black,4GB RAM, 64GB Storage) 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
          display: 'flex',
          justifyContent: 'center',
          }}>
        <Button size="small" color="primary">
        <AddShoppingCartIcon  color="primary" />   Add to Cart
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ width: 250,
     display: 'flex',
     flexDirection:'column',
     justifyContent:'space-around'
      }}>
      <CardActionArea>
        <CardContent>
        <img src={image5} alt="" />
          <Typography gutterBottom variant="h5" color="primary" component="div">
          Samsung Galaxy M31 (Ocean Blue, 8GB RAM, 128GB Storage) 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          6 Months Free Screen Replacement for Prime
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
          display: 'flex',
          justifyContent: 'center',
          }}>
        <Button size="small" color="primary">
        <AddShoppingCartIcon  color="primary" />   Add to Cart
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}
