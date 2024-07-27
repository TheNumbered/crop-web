import { Card, Grid } from "@mui/material";
import { CropDetails } from "../../interfaces/index";
import { BiddingInfo } from "./BiddingInfo";
import { CropImages } from "./CropImages";
import { CropInfo } from "./CropInfo";
import { SimilarListings } from "./SimilarListings";

interface CropDetailsCardProps {
  crop: CropDetails;
  timeLeft: string;
  auctionEnded: boolean;
  handleThumbnailClick: (picture: string) => void;
}

export const CropDetailsCard: React.FC<CropDetailsCardProps> = ({
  crop,
  timeLeft,
  auctionEnded,
  handleThumbnailClick,
}) => (
  <Card
    sx={{
      maxWidth: "xl",
      mx: "auto",
      p: 4,
      backgroundColor: "background.paper",
      borderRadius: 2,
      boxShadow: 3,
      mb: 4,
    }}
  >
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <CropImages crop={crop} handleThumbnailClick={handleThumbnailClick} />
      </Grid>
      <Grid item xs={12} md={4}>
        <CropInfo crop={crop} />
        <BiddingInfo
          crop={crop}
          timeLeft={timeLeft}
          auctionEnded={auctionEnded}
        />
      </Grid>
    </Grid>
    <SimilarListings />
  </Card>
);
