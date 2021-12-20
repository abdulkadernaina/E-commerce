import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
import image1 from "../images/redmi9.jpg";
import image2 from "../images/oppoa31.jpg";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Cart_Component() {
  return (
    <div>
      <h1> My Cart </h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: 900,
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        <Card
          sx={{
            width: 800,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            p: 1,
            m: 2,
          }}
        >
          {" "}
          <img src={image1} alt="" />
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="primary"
                component="div"
              >
                Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2.3GHz Mediatek Helio G35 Octa core Processor
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "felx-end",
              }}
            >
              {/* <IconButton color="primary" aria-label="add"> */}
              {/* <AddIcon /> */}
              {/* </IconButton> */}
              <TextField
                id="standard-basic"
                value="1"
                variant="standard"
                sx={{
                  width: 15,
                }}
              />
              {/* <IconButton color="primary" aria-label="remove"> */}
              {/* <RemoveIcon /> */}
              {/* </IconButton> */}
            </CardContent>
            <Button size="small" color="error">
              <RemoveShoppingCartIcon color="error" /> Remove
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 800,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            p: 1,
            m: 2,
          }}
        >
          <img src={image2} alt="" />
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="primary"
                component="div"
              >
                OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                with No Cost EMI/Additional Exchange Offers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "felx-end",
              }}
            >
              {/* <IconButton color="primary" aria-label="add"> */}
              {/* <AddIcon /> */}
              {/* </IconButton> */}
              <TextField
                id="standard-basic"
                value="1"
                variant="standard"
                sx={{
                  width: 15,
                }}
              />
              {/* <IconButton color="primary" aria-label="remove"> */}
              {/* <RemoveIcon /> */}
              {/* </IconButton> */}
            </CardContent>
            <Button size="small" color="error">
              <RemoveShoppingCartIcon color="error" /> Remove
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
