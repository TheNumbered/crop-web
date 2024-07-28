import { CropListings } from "@/interfaces";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import BiddingInfo from "./BiddingInfo";
import CropImages from "./CropImages";
import CropInfo from "./CropInfo";

interface CropDetailsCardProps {
  item: CropListings;
  timeLeft: string;
  auctionEnded: boolean;
  selectedImage: string;
  setSelectedImage: (image: string) => void;
}

const CropDetailsCard: React.FC<CropDetailsCardProps> = ({
  item,
  timeLeft,
  auctionEnded,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "xl",
        mx: "auto",
        p: 4,
        backgroundColor: "background.paper",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <CropImages
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            pictures={item.pictures}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardContent>
            <Typography variant="h5" component="div" fontWeight="bold">
              {item.cropName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <CropInfo item={item} />
            <BiddingInfo
              item={item}
              timeLeft={timeLeft}
              auctionEnded={auctionEnded}
            />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CropDetailsCard;
