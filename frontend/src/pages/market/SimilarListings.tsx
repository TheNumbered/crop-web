import { CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

export const SimilarListings: React.FC = () => (
  <>
    <Typography variant="h6" fontWeight="bold" mt={6}>
      Similar Listings
    </Typography>
    <Grid container spacing={2} mt={2}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid item xs={12} sm={3} key={index}>
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
  </>
);
