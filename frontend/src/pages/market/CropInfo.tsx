import { Box, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { CropDetails } from "../../interfaces/index";

interface CropInfoProps {
  crop: CropDetails;
}

export const CropInfo: React.FC<CropInfoProps> = ({ crop }) => (
  <Box mt={2}>
    <CardContent>
      <Typography variant="h5" component="div" fontWeight="bold">
        {crop.cropName} - {crop.variety}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {crop.description}
      </Typography>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Crop Name:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{crop.cropName}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Variety:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{crop.variety}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Quality Grade:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{crop.qualityGrade}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Quantity:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{crop.quantity}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Contact Info:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{crop.contactInfo}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Location:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">{crop.location}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Shipping Options:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            {crop.shippingOptions.join(", ")}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" fontWeight="bold">
            Pickup Options:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            {crop.pickupOptions.join(", ")}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Box>
);
