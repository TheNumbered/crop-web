import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const MarketItem: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: "xl",
          mx: "auto",
          p: 4,
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CardMedia
              component="img"
              height="400"
              image="https://placehold.co/600x400?text=Tomatoes+Image"
              alt="Tomatoes Image"
              sx={{ borderRadius: 2 }}
            />
            <Grid container spacing={1} mt={1}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Grid item xs={4} sm={2.4} key={index}>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://placehold.co/100x100?text=Thumbnail"
                    alt="Thumbnail"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardContent>
              <Typography variant="h5" component="div" fontWeight="bold">
                Fresh Roma Tomatoes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fresh Roma tomatoes from my farm. They are ripe and ready for
                sale.
              </Typography>
              <Box mt={2}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Crop Name:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Tomatoes</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Variety:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Roma</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Quality Grade:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">A</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Quantity:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">1000 kg</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Seller:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">John Doe</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Seller Rating:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">4.5</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Contact Info:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">0736462828</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Location:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Nairobi, Kenya</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Shipping Options:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Courier, Pickup</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Pickup Options:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Farm, Market</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Typography variant="h6" fontWeight="bold">
                  Bidding Information
                </Typography>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2">Current Bid</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    R100
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  mt={1}
                >
                  <Typography variant="body2">Time Left:</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    00:01:52
                  </Typography>
                </Grid>
                <TextField
                  variant="outlined"
                  placeholder="Enter Your Bid (Minimum R101)"
                  fullWidth
                  margin="normal"
                  sx={{ mt: 2 }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Place Bid
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
        <Typography variant="h6" fontWeight="bold" mt={6}>
          Similar Listings
        </Typography>
        <Grid container spacing={2} mt={2}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <CardMedia
                component="img"
                height="200"
                image="https://placehold.co/300x200?text=Similar+Listing"
                alt="Similar Listing"
                sx={{ borderRadius: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default MarketItem;
