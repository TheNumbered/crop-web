import { CropListings } from "@/interfaces";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface CropInfoProps {
  item: CropListings;
}

const CropInfo: React.FC<CropInfoProps> = ({ item }) => {
  return (
    <Box mt={2}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Crop Name:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{item.cropName}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Variety:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{item.variety}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Quality Grade:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{item.qualityGrade}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Quantity:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{item.quantity}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Seller:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{item.sellerName}</Typography>
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
          <Typography variant="body2">{item.contactInfo}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Location:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{item.location}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Shipping Options:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {item.shippingOptions.map((option: any, index: any) => (
            <Typography variant="body2" key={index}>
              {option} {index < item.shippingOptions.length - 1 && ","}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Pickup Options:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {item.pickupOptions.map((option: any, index: any) => (
            <Typography variant="body2" key={index}>
              {option} {index < item.pickupOptions.length - 1 && ","}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CropInfo;
