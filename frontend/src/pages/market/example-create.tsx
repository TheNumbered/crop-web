import { useCreateMutation } from "@/dataprovider";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const CreateCropListing: React.FC = () => {
  const [formData, setFormData] = useState({
    cropName: "",
    variety: "",
    qualityGrade: "",
    quantity: "",
    currentBid: "",
    auctionEnd: "",
    sellerName: "",
    contactInfo: "",
    location: "",
    shippingOptions: "",
    pickupOptions: "",
    description: "",
    certifications: "",
    primaryImage: "",
    pictures: "",
  });

  const { mutate : createAdvert } = useCreateMutation({
    resource: "crop_listings",
    invalidateKeys: ["crop_listings"],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createAdvert({
      ...formData,
      shippingOptions: JSON.stringify(formData.shippingOptions.split(",")),
      pickupOptions: JSON.stringify(formData.pickupOptions.split(",")),
      certifications: JSON.stringify(formData.certifications.split(",")),
      pictures: JSON.stringify(formData.pictures.split(",")),
    });
  };

  return (
    <Card sx={{ maxWidth: "md", mx: "auto", p: 4, backgroundColor: "background.paper", borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold" mb={3}>
          Create Crop Listing
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {Object.keys(formData).map((key) => (
              <Grid item xs={12} sm={6} key={key}>
                <TextField
                  fullWidth
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  variant="outlined"
                  name={key}
                  value={(formData as any)[key]}
                  onChange={handleInputChange}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateCropListing;
