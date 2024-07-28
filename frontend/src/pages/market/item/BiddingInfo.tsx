import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { CropDetails } from "../../../interfaces/index";

interface BiddingInfoProps {
  crop: CropDetails;
  timeLeft: string;
  auctionEnded: boolean;
}

export const BiddingInfo: React.FC<BiddingInfoProps> = ({
  crop,
  timeLeft,
  auctionEnded,
}) => (
  <Box mt={2}>
    <Typography variant="h6" fontWeight="bold">
      Bidding Information
    </Typography>
    <Grid container justifyContent="space-between" alignItems="center">
      <Typography variant="body2">Current Bid</Typography>
      <Typography variant="h6" fontWeight="bold">
        R{crop.currentBid}
      </Typography>
    </Grid>
    <Grid container justifyContent="space-between" alignItems="center" mt={1}>
      <Typography variant="body2">Time Left:</Typography>
      <Typography variant="h6" fontWeight="bold">
        {timeLeft}
      </Typography>
    </Grid>
    <TextField
      variant="outlined"
      placeholder={`Enter Your Bid (Minimum R${parseInt(
        crop.currentBid.toString()
      )})`}
      fullWidth
      margin="normal"
      sx={{ mt: 2 }}
    />
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      sx={{ mt: 2 }}
      disabled={auctionEnded}
    >
      Place Bid
    </Button>
  </Box>
);
