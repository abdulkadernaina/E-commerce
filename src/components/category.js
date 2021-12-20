import  React from 'react';
import "./category.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image1 from '../images/redmi9.jpg';
import image2 from '../images/oppoa31.jpg';
import image3 from '../images/realmenarzo.jpg';
import image4 from '../images/samsungm12.jpg';
import image5 from '../images/samsungm31.jpg';
import mens1 from '../images/mens1.jpg';
import mens2 from '../images/men2.png';
import mens3 from '../images/mens3.png';
import mens4 from '../images/mens4.png';
import mens5 from '../images/mens5.png';
import women1 from '../images/women1.png';
import women2 from '../images/women2.png';
import women3 from '../images/women3.png';
import women4 from '../images/women4.png';
import women5 from '../images/women5.png';
import kids1 from '../images/kids1.png';
import kids2 from '../images/kids2.png';
import kids3 from '../images/kids3.png';
import kids4 from '../images/kids4.png';
import kids5 from '../images/kids5.png';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import home4 from '../images/home4.png';
import home5 from '../images/home5.png';
import {FaCartPlus} from 'react-icons/fa'

import Box from '@mui/material/Box';

function Electronics(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
            }}
        >
            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
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
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
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
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
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
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
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
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
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
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

function Mens(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
            }}
        >
            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={mens1} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Mens Dress 1
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={mens2} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                           Mens Dress 2
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={mens3} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Mens Dress 3
                        </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={mens4} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Mens dress 4
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={mens5} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Mens Dress 5
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

function Women(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
            }}
        >
            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={women1} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Women Dress 1
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={women2} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Women Dress 2
                        </Typography>
                      
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={women3} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Women Dress 3
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={women4} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Women Dress 4
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={women5} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Women Dress 5
                        </Typography>
                      
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

function Kids(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
            }}
        >
            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={kids1} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Kids Dress 1
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={kids2} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Kids Dress 2
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={kids3} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Kids Dress 3
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={kids4} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Kids Dress 4
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={kids5} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Kids Dress 5
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

function HomeAppliances(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
            }}
        >
            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={home1} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                            Home Appliances 1
                        </Typography>
                      
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={home2} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Home Appliances 2
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={home3} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Home Appliances 3
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={home4} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Home Appliances 4
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <CardActionArea>
                    <CardContent>
                        <img src={home5} alt="" />
                        <Typography gutterBottom variant="h5" color="primary" component="div">
                        Home Appliances 5
                        </Typography>
                       
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button size="small" color="primary">
                        <FaCartPlus color="primary" />   Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}





export default function product_type(props) {

    const product = props.name;
    if (product === "electronics") {
        return <Electronics />;
    }
    if (product === "Mens") {
        return <Mens />;
    }
    if (product === "Women") {
        return <Women />;
    }
    if (product === "Kids") {
        return <Kids />;
    }
    if (product === "HomeAppliances") {
        return <HomeAppliances />;
    }

}